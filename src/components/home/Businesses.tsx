import Image from "next/image";
import Link from "next/link";

const businesses = [
  {
    name: "Sarita",
    tagline: "Experiencia dulce y familiar",
    image: "/images/brands/sarita-logo.png",
    href: "#",
  },
  {
    name: "Espresso Express",
    tagline: "Energía que conecta",
    image: "/images/brands/espresso-express.png",
    href: "#",
  },
  {
    name: "Terraza Magnolia",
    tagline: "Celebraciones que trascienden",
    image: "/images/brands/Magnolia-Terraza.png",
    href: "#",
  },
  {
    name: "Nueva Marca Futura",
    tagline: "Nuevas ideas, nuevos impactos",
    image: "/images/hero/hero.png",
    href: "#",
  },
];

export default function Businesses() {
  return (
    <section
      id="negocios"
      className="w-full bg-[var(--bg-secondary)] py-12 lg:py-14"
    >
      <div className="w-full px-6 lg:px-10 2xl:px-12">
        {/* ENCABEZADO */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 className="font-[var(--font-cinzel)] text-[24px] font-medium tracking-[0.02em] text-[var(--color-carbon)] md:text-[28px]">
            Nuestros Negocios
          </h2>

          <Link
            href="#"
            className="hidden shrink-0 pb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-carbon)] transition duration-300 hover:text-[var(--color-bronce)] sm:block"
          >
            Ver todos los negocios →
          </Link>
        </div>

        {/* TARJETAS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((business) => (
            <Link
              key={business.name}
              href={business.href}
              className="
                group
                relative
                h-[340px]
                overflow-hidden
                border
                border-[var(--color-border)]
                bg-[var(--bg-primary)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:border-[#C9BAA5]
                hover:shadow-[0_14px_35px_rgba(23,26,28,0.10)]
              "
            >
              {/* IMAGEN */}
              <Image
                src={business.image}
                alt={business.name}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                className={
                  business.name === "Sarita"
                    ? "object-contain scale-[0.92] transition-all duration-700 ease-out group-hover:scale-[0.97]"
                    : business.name === "Espresso Express"
                    ? "object-contain scale-[0.95] transition-all duration-700 ease-out group-hover:scale-[1.00]"
                    : "object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-95"
                }
              />

              {/* CAPA CLARA — más suave */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#F3F0E8]/25
                  transition-colors
                  duration-500
                  group-hover:bg-[#F3F0E8]/10
                "
              />

              {/* DEGRADADO INFERIOR */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-[58%]
                  bg-gradient-to-t
                  from-[#F3F0E8]
                  via-[#F3F0E8]/72
                  to-transparent
                  transition-opacity
                  duration-500
                  group-hover:opacity-90
                "
              />

              {/* CONTENIDO */}
              <div className="absolute inset-x-0 bottom-0 flex min-h-[150px] flex-col items-center justify-end px-6 pb-5 text-center">
                <h3
                  className="
                    font-[var(--font-cinzel)]
                    text-[17px]
                    uppercase
                    tracking-[0.07em]
                    text-[var(--color-carbon)]
                    transition-transform
                    duration-500
                    group-hover:-translate-y-0.5
                  "
                >
                  {business.name}
                </h3>

                <div
                  className="
                    my-3
                    h-px
                    w-8
                    bg-[var(--color-bronce)]
                    transition-all
                    duration-500
                    group-hover:w-12
                  "
                />

                <p className="max-w-[210px] text-[11px] uppercase leading-5 tracking-[0.06em] text-[#55514C]">
                  {business.tagline}
                </p>

                <span
                  className="
                    mt-3
                    text-[20px]
                    text-[var(--color-carbon)]
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* LINK MÓVIL */}
        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-carbon)]"
          >
            Ver todos los negocios →
          </Link>
        </div>
      </div>
    </section>
  );
}