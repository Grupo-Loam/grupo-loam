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
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");

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

  const connectWhatsApp = () => {
    setError("");
    setResult(null);

    if (!window.FB) {
      setError("El SDK de Facebook todavía no está listo.");
      return;
    }

    window.FB.login(
      (response: any) => {
        console.log("Meta response:", response);

        if (response?.authResponse?.code) {
          setResult({
            status: "success",
            code: response.authResponse.code,
            raw: response,
          });
          return;
        }

        setResult({
          status: response?.status || "unknown",
          raw: response,
        });
      },
      {
        config_id: "28107029115586660",
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
          featureType: "",
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
          Usa este botón para iniciar el registro de WhatsApp Business con Meta
          y habilitar Coexistence.
        </p>

        <button
          onClick={connectWhatsApp}
          disabled={!sdkReady}
          style={{
            padding: "14px 20px",
            borderRadius: "10px",
            border: "none",
            cursor: sdkReady ? "pointer" : "not-allowed",
            fontSize: "16px",
          }}
        >
          {sdkReady
            ? "Conectar WhatsApp Business"
            : "Cargando Meta SDK..."}
        </button>

        {error && (
          <p style={{ marginTop: "20px" }}>
            Error: {error}
          </p>
        )}

        {result && (
          <div style={{ marginTop: "30px" }}>
            <h2>Respuesta de Meta</h2>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                background: "#f5f5f5",
                padding: "16px",
                borderRadius: "10px",
              }}
            >
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}