"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Negocios", href: "/#negocios" },

  // PENDIENTES DE IMPLEMENTACIÓN
  // { name: "Inversión", href: "/#inversion" },
  // { name: "Sostenibilidad", href: "/#sostenibilidad" },
  // { name: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/nosotros") {
      return pathname === "/nosotros";
    }

    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[#EEEBE3]/95 backdrop-blur-md">
      {/* CONTENEDOR */}
      <div className="relative mx-auto flex h-[90px] w-full max-w-[1920px] items-center px-6 sm:px-8 md:h-[98px] lg:px-14 xl:px-16 2xl:px-20">
        {/* LOGO */}
        <Link
          href="/"
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

        {/* DESKTOP - FIJO A LA DERECHA */}
        <nav className="absolute right-14 top-1/2 hidden -translate-y-1/2 items-center gap-12 lg:flex xl:right-20 xl:gap-16 2xl:right-24 2xl:gap-20">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative whitespace-nowrap py-3 text-[12px] font-medium uppercase tracking-[0.14em] transition duration-300 xl:text-[13px] ${
                  active
                    ? "text-[var(--color-carbon)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[var(--color-bronce)]"
                    : "text-[var(--color-carbon)] hover:text-[var(--color-bronce)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

{/* BOTÓN MÓVIL */}
<button
  type="button"
  onClick={() => setOpen((current) => !current)}
  aria-label={open ? "Cerrar menú" : "Abrir menú"}
  aria-expanded={open}
  className="
    relative
    ml-auto
    flex
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    rounded-full
    transition
    hover:bg-black/5
    focus:outline-none
    lg:hidden
  "
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
      {/* MENÚ MÓVIL */}
      <div
        className={`overflow-hidden bg-[#EEEBE3] transition-all duration-500 lg:hidden ${
          open
            ? "max-h-[500px] border-t border-[var(--color-border)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="w-full px-6 pb-8 pt-5 sm:px-8">
          <div className="mx-auto w-full max-w-[520px]">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex w-full items-center justify-between border-b border-[var(--color-border)]/70 px-2 py-[17px] last:border-0"
                >
                  <span
                    className={`text-[12px] font-medium uppercase tracking-[0.16em] ${
                      active
                        ? "text-[var(--color-bronce)]"
                        : "text-[var(--color-carbon)]"
                    }`}
                  >
                    {link.name}
                  </span>

                  <span className="text-[14px] text-[var(--color-taupe)] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}