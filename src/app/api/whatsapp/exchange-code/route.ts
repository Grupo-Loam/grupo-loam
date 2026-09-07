import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: "No se recibió el código de autorización." },
        { status: 400 }
      );
    }

    const appId = process.env.META_APP_ID;
    const appSecret = process.env.META_APP_SECRET;

    if (!appId || !appSecret) {
      return NextResponse.json(
        { error: "Faltan las variables de entorno de Meta." },
        { status: 500 }
      );
    }

    const tokenUrl = new URL(
      "https://graph.facebook.com/v26.0/oauth/access_token"
    );

    tokenUrl.searchParams.set("client_id", appId);
    tokenUrl.searchParams.set("client_secret", appSecret);
    tokenUrl.searchParams.set("code", code);

    const tokenResponse = await fetch(tokenUrl.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      console.error("Meta token error:", tokenData);

      return NextResponse.json(
        {
          error:
            tokenData?.error?.message ||
            "Meta no devolvió un access token.",
        },
        { status: 400 }
      );
    }

    const accessToken = tokenData.access_token;

    /*
      IMPORTANTE:
      De momento NO devolvemos accessToken al navegador.

      El siguiente paso será usar este token aquí mismo
      para consultar la cuenta de WhatsApp y el número.
    */

    return NextResponse.json({
      success: true,
      message: "Autorización procesada correctamente.",
    });
  } catch (error) {
    console.error("WhatsApp exchange error:", error);

    return NextResponse.json(
      {
        error: "Error interno procesando la autorización de Meta.",
      },
      { status: 500 }
    );
  }
}