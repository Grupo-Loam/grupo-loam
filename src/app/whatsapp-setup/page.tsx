"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

export default function WhatsAppSetupPage() {
  const [sdkReady, setSdkReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "28053745120961816",
        cookie: true,
        xfbml: true,
        version: "v26.0",
      });

      setSdkReady(true);
    };

    const existingScript = document.getElementById("facebook-jssdk");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);
    }
  }, []);

  const exchangeCode = async (code: string) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/whatsapp/exchange-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "No se pudo completar la conexión.");
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || "Error procesando la autorización.");
    } finally {
      setLoading(false);
    }
  };

  const connectWhatsApp = () => {
    setError("");
    setResult(null);

    if (!window.FB) {
      setError("El SDK de Facebook todavía no está listo.");
      return;
    }

  window.FB.login(
  async (response: any) => {
    console.log("Meta response status:", response?.status);

    const code = response?.authResponse?.code;

    if (!code) {
      setError("Meta no devolvió un código de autorización.");
      return;
    }

    await exchangeCode(code);
  },
  {
    config_id: "28107029115586660",
    response_type: "code",
    override_default_response_type: true,
    extras: {
      setup: {},
      featureType: "whatsapp_business_app_onboarding",
      sessionInfoVersion: "3",
    },
  }
);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          border: "1px solid #ddd",
          borderRadius: "16px",
          padding: "32px",
        }}
      >
        <h1>Conectar WhatsApp Business</h1>

        <p>
          Usa este botón para conectar la cuenta de WhatsApp Business de Grupo
          LOAM con Meta.
        </p>

        <button
          onClick={connectWhatsApp}
          disabled={!sdkReady || loading}
          style={{
            padding: "14px 20px",
            borderRadius: "10px",
            border: "none",
            cursor:
              sdkReady && !loading ? "pointer" : "not-allowed",
            fontSize: "16px",
          }}
        >
          {loading
            ? "Conectando..."
            : sdkReady
            ? "Conectar WhatsApp Business"
            : "Cargando Meta SDK..."}
        </button>

        {error && (
          <p style={{ marginTop: "20px" }}>
            Error: {error}
          </p>
        )}

        {result?.success && (
          <div style={{ marginTop: "30px" }}>
            <h2>WhatsApp conectado correctamente</h2>

            <p>
              La autorización con Meta fue procesada correctamente.
            </p>

            {result.wabaId && (
              <p>
                <strong>WhatsApp Business Account ID:</strong>{" "}
                {result.wabaId}
              </p>
            )}

            {result.phoneNumberId && (
              <p>
                <strong>Phone Number ID:</strong>{" "}
                {result.phoneNumberId}
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}