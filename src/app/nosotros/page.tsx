import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Nosotros | LOAM Grupo Empresarial",
  description:
    "Conoce la misión, visión y valores de LOAM Grupo Empresarial.",
};

const values = [
  {
    title: "Visión de largo plazo",
    description: "Pensamos en generaciones, no en trimestres.",
    image: "/images/values/vision-largo-plazo.jpg",
  },
  {
    title: "Excelencia operativa",
    description:
      "Eficiencia, calidad y mejora continua en todo lo que hacemos.",
    image: "/images/values/excelencia-operativa.jpg",
  },
  {
    title: "Crecimiento sostenible",
    description: "Invertimos en ideas, personas y comunidades.",
    image: "/images/values/crecimiento-sostenible.jpg",
  },
  {
    title: "Integridad",
    description:
      "Actuamos con transparencia, respeto y responsabilidad.",
    image: "/images/values/integridad.jpg",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#F3F0E8]">
        {/* NOSOTROS */}
        <section className="flex w-full justify-center bg-[var(--bg-secondary)]">
          <div className="flex w-full max-w-[1100px] flex-col items-center px-6 py-24 text-center sm:px-8 md:py-28 lg:px-10 lg:py-32">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronce)]">
              Nosotros
            </p>

            <h1 className="mt-10 max-w-[850px] text-center font-[var(--font-cinzel)] text-[30px] font-medium leading-[1.2] text-[var(--color-carbon)] sm:text-[36px] md:text-[42px] lg:text-[44px]">
              LOAM Grupo Empresarial
            </h1>

            <div className="mt-10 h-px w-16 bg-[var(--color-bronce)]" />

            <p className="mt-14 max-w-[820px] text-center text-[15px] leading-8 text-[#514D47] sm:text-[16px] md:text-[17px] md:leading-9">
              Somos la marca corporativa matriz desde la cual desarrollamos,
              administramos e impulsamos negocios y marcas con identidad propia,
              construyendo estructuras sólidas preparadas para crecer de manera
              sostenible y con visión de largo plazo.
            </p>
          </div>
        </section>

        {/* ESPACIO */}
        <div className="h-14 w-full bg-[#F3F0E8] md:h-16 lg:h-20" />

        {/* MISIÓN */}
        <section className="flex w-full justify-center bg-[var(--bg-primary)]">
          <div className="flex w-full max-w-[1100px] flex-col items-center px-6 py-24 text-center sm:px-8 md:py-28 lg:px-10 lg:py-32">
            <div className="flex w-full items-center justify-center gap-5 sm:gap-8">
              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />

              <h2 className="shrink-0 font-[var(--font-cinzel)] text-[22px] font-medium uppercase tracking-[0.12em] text-[var(--color-carbon)] sm:text-[26px]">
                Misión
              </h2>

              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />
            </div>

            <p className="mt-16 max-w-[850px] text-center text-[15px] leading-8 text-[#514D47] sm:text-[16px] md:text-[17px] md:leading-9">
              Desarrollar, administrar e impulsar negocios y marcas con
              identidad propia, creando valor sostenible a través de la
              innovación, la excelencia operativa y la gestión responsable,
              generando bienestar para nuestros clientes, colaboradores,
              inversionistas y comunidades, hoy y para las futuras generaciones.
            </p>
          </div>
        </section>

        {/* ESPACIO */}
        <div className="h-14 w-full bg-[#F3F0E8] md:h-16 lg:h-20" />

        {/* VISIÓN */}
        <section className="flex w-full justify-center bg-[#EAE6DD]">
          <div className="flex w-full max-w-[1100px] flex-col items-center px-6 py-24 text-center sm:px-8 md:py-28 lg:px-10 lg:py-32">
            <div className="flex w-full items-center justify-center gap-5 sm:gap-8">
              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />

              <h2 className="shrink-0 font-[var(--font-cinzel)] text-[22px] font-medium uppercase tracking-[0.12em] text-[var(--color-carbon)] sm:text-[26px]">
                Visión
              </h2>

              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />
            </div>

            <p className="mt-16 max-w-[850px] text-center text-[15px] leading-8 text-[#514D47] sm:text-[16px] md:text-[17px] md:leading-9">
              Ser un grupo empresarial sólido, diversificado y referente por la
              excelencia de sus marcas, su capacidad de innovación y su
              crecimiento sostenible, construyendo un legado que trascienda
              generaciones y abra oportunidades para un futuro mejor.
            </p>
          </div>
        </section>

        {/* ESPACIO */}
        <div className="h-14 w-full bg-[#F3F0E8] md:h-16 lg:h-20" />

        {/* VALORES */}
        <section className="flex w-full justify-center bg-[var(--bg-primary)]">
          <div className="flex w-full max-w-[1320px] flex-col items-center px-6 py-24 text-center sm:px-8 md:py-28 lg:px-10 lg:py-32">
            <div className="flex w-full max-w-[1100px] items-center justify-center gap-5 sm:gap-8">
              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />

              <h2 className="shrink-0 font-[var(--font-cinzel)] text-[22px] font-medium uppercase tracking-[0.12em] text-[var(--color-carbon)] sm:text-[26px]">
                Valores
              </h2>

              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />
            </div>

            <div className="mt-24 grid w-full gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="group overflow-hidden border border-[#D6D0C5] bg-[#F7F4ED] text-left transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-bronce)] hover:shadow-[0_14px_35px_rgba(23,26,28,0.10)]"
                >
                  <div className="relative h-[210px] w-full overflow-hidden sm:h-[220px]">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-black/5 transition duration-500 group-hover:bg-black/0" />
                  </div>

                  <div className="flex min-h-[220px] flex-col px-7 py-8">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[var(--color-bronce)]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-5 font-[var(--font-cinzel)] text-[17px] uppercase leading-7 tracking-[0.03em] text-[#1D1D1B] sm:text-[18px]">
                      {value.title}
                    </h3>

                    <div className="my-5 h-px w-10 bg-[var(--color-bronce)] transition-all duration-500 group-hover:w-16" />

                    <p className="text-[14px] leading-7 text-[#393633] sm:text-[15px]">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ESPACIO */}
        <div className="h-14 w-full bg-[#F3F0E8] md:h-16 lg:h-20" />

        {/* FILOSOFÍA */}
        <section className="flex w-full justify-center bg-[#EAE6DD]">
          <div className="flex w-full max-w-[1100px] flex-col items-center px-6 py-24 text-center sm:px-8 md:py-28 lg:px-10 lg:py-32">
            <div className="flex w-full items-center justify-center gap-5 sm:gap-8">
              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />

              <h2 className="shrink-0 font-[var(--font-cinzel)] text-[18px] font-medium uppercase tracking-[0.12em] text-[var(--color-carbon)] sm:text-[22px]">
                Nuestra filosofía
              </h2>

              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />
            </div>

            <h3 className="mt-20 max-w-[850px] text-center font-[var(--font-cinzel)] text-[30px] leading-tight text-[var(--color-carbon)] sm:text-[38px] md:text-[42px]">
              Construimos. Operamos. Crecemos.
            </h3>

            <p className="mt-10 max-w-[700px] text-center font-[var(--font-cinzel)] text-[17px] text-[#5D5852] sm:text-[20px]">
              Visión de hoy, legado de mañana.
            </p>
          </div>
        </section>

        {/* ESPACIO */}
        <div className="h-14 w-full bg-[#F3F0E8] md:h-16 lg:h-20" />

        {/* CIERRE */}
        <section className="flex w-full justify-center bg-[var(--bg-primary)]">
          <div className="flex w-full max-w-[900px] flex-col items-center px-6 py-24 text-center sm:px-8 md:py-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
              LOAM Grupo Empresarial
            </p>

            <p className="mt-10 max-w-[700px] text-center font-[var(--font-cinzel)] text-[24px] leading-[1.5] text-[var(--color-carbon)] sm:text-[28px]">
              Construimos el presente para transformar el futuro.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}