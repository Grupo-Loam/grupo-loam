"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

const META_APP_ID = "28053745120961816";
const META_CONFIG_ID = "1126162326746947";

export default function WhatsAppSetupPage() {
  const [sdkReady, setSdkReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [events, setEvents] = useState<any[]>([]);

  const callbackReceived = useRef(false);

  const addEvent = (name: string, data: any) => {
    console.log(name, data);

    setEvents((prev) => [
      ...prev,
      {
        time: new Date().toISOString(),
        name,
        data,
      },
    ]);
  };

  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      if (
        !event.origin.includes("facebook.com") &&
        !event.origin.includes("facebook.net")
      ) {
        return;
      }

      let data = event.data;

      try {
        if (typeof data === "string") {
          data = JSON.parse(data);
        }
      } catch {
        // Dejamos el valor original.
      }

      addEvent("WINDOW_MESSAGE", {
        origin: event.origin,
        data,
      });

      if (data?.type === "WA_EMBEDDED_SIGNUP") {
        addEvent("WA_EMBEDDED_SIGNUP", data);

        if (data.event === "FINISH") {
          setResult({
            success: true,
            event: data.event,
            data: data.data,
          });
        }

        if (data.event === "CANCEL") {
          setError(
            "El proceso de WhatsApp Embedded Signup fue cancelado."
          );
        }

        if (data.event === "ERROR") {
          setError(
            "Meta devolvió un error durante WhatsApp Embedded Signup."
          );
        }
      }
    };

    window.addEventListener("message", messageHandler);

    window.fbAsyncInit = function () {
      addEvent("FB_SDK_INIT", {
        appId: META_APP_ID,
        version: "v26.0",
        fedCM: false,
      });

      window.FB.init({
        appId: META_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v26.0",
        fedCM: false,
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

      script.onload = () => {
        addEvent("FB_SDK_SCRIPT_LOADED", true);
      };

      script.onerror = () => {
        addEvent("FB_SDK_SCRIPT_ERROR", true);
        setError("No se pudo cargar el SDK de Facebook.");
      };

      document.body.appendChild(script);
    } else if (window.FB) {
      setSdkReady(true);

      addEvent("FB_SDK_ALREADY_LOADED", true);
    }

    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  const exchangeCode = async (code: string) => {
    setLoading(true);

    try {
      addEvent("EXCHANGE_CODE_START", {
        codeReceived: true,
      });

      const response = await fetch("/api/whatsapp/exchange-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      addEvent("EXCHANGE_CODE_RESPONSE", {
        status: response.status,
        data,
      });

      if (!response.ok) {
        throw new Error(
          data?.error || "No se pudo completar la conexión."
        );
      }

      setResult({
        success: true,
        ...data,
      });
    } catch (err: any) {
      setError(
        err?.message || "Error procesando la autorización."
      );
    } finally {
      setLoading(false);
    }
  };

  const connectWhatsApp = () => {
    setError("");
    setResult(null);
    setEvents([]);

    callbackReceived.current = false;

    if (!window.FB) {
      setError("El SDK de Facebook todavía no está listo.");
      return;
    }

    addEvent("FB_LOGIN_START", {
      configId: META_CONFIG_ID,
      featureType: "whatsapp_business_app_onboarding",
      fedCM: false,
    });

    try {
      window.FB.login(
        (response: any) => {
          callbackReceived.current = true;

          addEvent("FB_LOGIN_CALLBACK", response);

          console.log(
            "META FULL FB.LOGIN RESPONSE:",
            response
          );

          setResult({
            status: response?.status ?? "sin-status",
            authResponse: response?.authResponse ?? null,
            fullResponse: response,
          });

          const code = response?.authResponse?.code;

          if (!code) {
            setError(
              "El callback de Meta sí respondió, pero no devolvió un código de autorización."
            );
            return;
          }

          void exchangeCode(code);
        },
        {
          config_id: META_CONFIG_ID,
          response_type: "code",
          override_default_response_type: true,

          extras: {
            setup: {},
            featureType: "whatsapp_business_app_onboarding",
            sessionInfoVersion: "3",
          },
        }
      );

      setTimeout(() => {
        if (!callbackReceived.current) {
          addEvent("FB_LOGIN_CALLBACK_NOT_RECEIVED", {
            message:
              "Meta no ejecutó el callback de FB.login.",
          });

          setError(
            "Meta cerró/interrumpió el popup antes de ejecutar el callback de FB.login."
          );
        }
      }, 15000);
    } catch (err: any) {
      addEvent("FB_LOGIN_EXCEPTION", {
        message: err?.message,
        stack: err?.stack,
      });

      setError(
        `Excepción ejecutando FB.login: ${
          err?.message || "Error desconocido"
        }`
      );
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f8f6f1",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "60px auto",
          border: "1px solid #ddd",
          borderRadius: "16px",
          padding: "32px",
          background: "#fff",
        }}
      >
        <h1>Conectar WhatsApp Business</h1>

        <p>
          Usa este botón para conectar la cuenta de WhatsApp Business
          de Grupo LOAM con Meta.
        </p>

        <p>
          Estado SDK:{" "}
          <strong>{sdkReady ? "LISTO" : "CARGANDO"}</strong>
        </p>

        <p>
          Configuration ID: <strong>{META_CONFIG_ID}</strong>
        </p>

        <button
          onClick={connectWhatsApp}
          disabled={!sdkReady || loading}
          style={{
            padding: "14px 20px",
            borderRadius: "10px",
            border: "1px solid #0866ff",
            cursor:
              sdkReady && !loading
                ? "pointer"
                : "not-allowed",
            fontSize: "16px",
            fontWeight: 600,
            background: "white",
          }}
        >
          {loading
            ? "Conectando..."
            : sdkReady
            ? "Conectar WhatsApp Business"
            : "Cargando Meta SDK..."}
        </button>

        {error && (
          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              border: "1px solid #d66",
              borderRadius: "10px",
              background: "#fff5f5",
            }}
          >
            <strong>Error</strong>
            <p>{error}</p>
          </div>
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

        <div style={{ marginTop: "30px" }}>
          <h2>Eventos de diagnóstico</h2>

          {events.length === 0 ? (
            <p>Aún no se han recibido eventos.</p>
          ) : (
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                background: "#111",
                color: "#eee",
                padding: "16px",
                borderRadius: "10px",
                maxHeight: "500px",
                overflow: "auto",
              }}
            >
              {JSON.stringify(events, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </main>
  );
}