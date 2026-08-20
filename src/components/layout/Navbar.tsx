"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Inicio", href: "#" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Negocios", href: "#negocios" },
  { name: "Inversión", href: "#inversion" },
  { name: "Sostenibilidad", href: "#sostenibilidad" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--bg-primary)]/95 backdrop-blur-md">
      {/* CONTENEDOR */}
      <div className="mx-auto flex h-[90px] w-full max-w-[1920px] items-center justify-between px-6 sm:px-8 md:h-[98px] lg:px-12 xl:px-16 2xl:px-24">
        {/* LOGO */}
        <Link
          href="#"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/logos/Loam.png"
            alt="LOAM Grupo Empresarial"
            width={260}
            height={105}
            priority
            className="h-auto w-[175px] sm:w-[190px] md:w-[205px] lg:w-[220px]"
          />
        </Link>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-7 lg:mr-12 lg:flex xl:mr-16 xl:gap-10 2xl:mr-20">
          {links.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative whitespace-nowrap py-3 text-[11px] font-medium uppercase tracking-[0.13em] transition duration-300 xl:text-[12px] ${
                index === 0
                  ? "text-[var(--color-carbon)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[var(--color-bronce)]"
                  : "text-[var(--color-carbon)] hover:text-[var(--color-bronce)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTÓN MÓVIL */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5 focus:outline-none lg:hidden"
        >
          <div className="relative h-[17px] w-[23px]">
            <span
              className={`absolute left-0 top-0 h-[1.5px] bg-[var(--color-carbon)] transition-all duration-300 ${
                open ? "top-[7.5px] w-[23px] rotate-45" : "w-[23px]"
              }`}
            />

            <span
              className={`absolute left-0 top-[7.5px] h-[1.5px] bg-[var(--color-carbon)] transition-all duration-300 ${
                open ? "opacity-0" : "w-[17px] opacity-100"
              }`}
            />

            <span
              className={`absolute bottom-0 right-0 h-[1.5px] bg-[var(--color-carbon)] transition-all duration-300 ${
                open ? "bottom-[8px] w-[23px] -rotate-45" : "w-[20px]"
              }`}
            />
          </div>
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`overflow-hidden bg-[var(--bg-primary)] transition-all duration-500 lg:hidden ${
          open
            ? "max-h-[500px] border-t border-[var(--color-border)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="w-full px-6 py-3 sm:px-8">
          {links.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-[var(--color-border)]/70 py-[13px] last:border-0"
            >
              <span
                className={`text-[11px] font-medium uppercase tracking-[0.15em] ${
                  index === 0
                    ? "text-[var(--color-bronce)]"
                    : "text-[var(--color-carbon)]"
                }`}
              >
                {link.name}
              </span>

              <span className="text-[13px] text-[var(--color-taupe)]">
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}