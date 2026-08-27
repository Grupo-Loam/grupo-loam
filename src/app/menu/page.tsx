"use client";

import { useEffect, useState } from "react";

export default function MenuPage() {
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    const hostname = window.location.hostname.toLowerCase();

    if (hostname.includes("menu-espresso")) {
      setVideo("/menus/espresso.mp4");
      return;
    }

    if (hostname.includes("menu-sarita")) {
      setVideo("/menus/sarita.mp4");
      return;
    }

    // Para poder probar localmente
    const params = new URLSearchParams(window.location.search);
    const menu = params.get("menu");

    if (menu === "espresso") {
      setVideo("/menus/espresso.mp4");
    }

    if (menu === "sarita") {
      setVideo("/menus/sarita.mp4");
    }
  }, []);

  if (!video) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        Menú no configurado
      </main>
    );
  }

  return (
    <main className="fixed inset-0 m-0 overflow-hidden bg-black p-0">
      <video
        key={video}
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        className="h-full w-full object-cover"
      />
    </main>
  );
}