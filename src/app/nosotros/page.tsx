import type { Metadata } from "next";

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
  },
  {
    title: "Excelencia operativa",
    description:
      "Eficiencia, calidad y mejora continua en todo lo que hacemos.",
  },
  {
    title: "Crecimiento sostenible",
    description: "Invertimos en ideas, personas y comunidades.",
  },
  {
    title: "Integridad",
    description:
      "Actuamos con transparencia, respeto y responsabilidad.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[var(--bg-secondary)]">
        {/* PRESENTACIÓN */}
        <section className="flex w-full justify-center border-b border-[var(--color-border)] bg-[var(--bg-secondary)]">
          <div className="flex w-full max-w-[1100px] flex-col items-center px-6 py-28 text-center sm:px-8 md:py-32 lg:px-10 lg:py-36">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronce)]">
              Nosotros
            </p>

            <h1 className="mt-6 max-w-[850px] text-center font-[var(--font-cinzel)] text-[34px] leading-[1.2] text-[var(--color-carbon)] sm:text-[42px] md:text-[48px]">
              LOAM Grupo Empresarial
            </h1>

            <div className="my-9 h-px w-16 bg-[var(--color-bronce)]" />

            <p className="max-w-[820px] text-center text-[15px] leading-8 text-[var(--color-text-secondary)] sm:text-[16px] md:text-[17px] md:leading-9">
              Somos la marca corporativa matriz desde la cual desarrollamos,
              administramos e impulsamos negocios y marcas con identidad propia,
              construyendo estructuras sólidas preparadas para crecer de manera
              sostenible y con visión de largo plazo.
            </p>
          </div>
        </section>

        {/* MISIÓN */}
        <section className="flex w-full justify-center bg-[var(--bg-primary)]">
          <div className="flex w-full max-w-[1100px] flex-col items-center px-6 py-28 text-center sm:px-8 md:py-32 lg:px-10 lg:py-36">
            <div className="flex w-full items-center justify-center gap-5 sm:gap-8">
              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />

              <h2 className="shrink-0 font-[var(--font-cinzel)] text-[22px] font-medium uppercase tracking-[0.12em] text-[var(--color-carbon)] sm:text-[26px]">
                Misión
              </h2>

              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />
            </div>

            <p className="mt-14 max-w-[850px] text-center text-[15px] leading-8 text-[#625D57] sm:text-[16px] md:text-[17px] md:leading-9">
              Desarrollar, administrar e impulsar negocios y marcas con
              identidad propia, creando valor sostenible a través de la
              innovación, la excelencia operativa y la gestión responsable,
              generando bienestar para nuestros clientes, colaboradores,
              inversionistas y comunidades, hoy y para las futuras generaciones.
            </p>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="flex w-full justify-center bg-[var(--bg-secondary)]">
          <div className="flex w-full max-w-[1100px] flex-col items-center px-6 py-28 text-center sm:px-8 md:py-32 lg:px-10 lg:py-36">
            <div className="flex w-full items-center justify-center gap-5 sm:gap-8">
              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />

              <h2 className="shrink-0 font-[var(--font-cinzel)] text-[22px] font-medium uppercase tracking-[0.12em] text-[var(--color-carbon)] sm:text-[26px]">
                Visión
              </h2>

              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />
            </div>

            <p className="mt-14 max-w-[850px] text-center text-[15px] leading-8 text-[#625D57] sm:text-[16px] md:text-[17px] md:leading-9">
              Ser un grupo empresarial sólido, diversificado y referente por la
              excelencia de sus marcas, su capacidad de innovación y su
              crecimiento sostenible, construyendo un legado que trascienda
              generaciones y abra oportunidades para un futuro mejor.
            </p>
          </div>
        </section>

        {/* VALORES */}
        <section className="flex w-full justify-center bg-[var(--bg-primary)]">
          <div className="flex w-full max-w-[1180px] flex-col items-center px-6 py-32 text-center sm:px-8 md:py-36 lg:px-10 lg:py-40">
            <div className="flex w-full max-w-[1100px] items-center justify-center gap-5 sm:gap-8">
              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />

              <h2 className="shrink-0 font-[var(--font-cinzel)] text-[22px] font-medium uppercase tracking-[0.12em] text-[var(--color-carbon)] sm:text-[26px]">
                Valores
              </h2>

              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />
            </div>

            <div className="mt-24 grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="
                    group
                    flex
                    min-h-[230px]
                    flex-col
                    items-center
                    justify-center
                    border
                    border-[var(--color-border)]
                    bg-[var(--bg-secondary)]
                    px-8
                    py-9
                    text-center
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[var(--color-bronce)]
                    hover:bg-[#EEE9E0]
                    hover:shadow-[0_12px_30px_rgba(23,26,28,0.08)]
                  "
                >
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[var(--color-bronce)]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 font-[var(--font-cinzel)] text-[17px] uppercase leading-7 tracking-[0.04em] text-[var(--color-carbon)] sm:text-[18px]">
                    {value.title}
                  </h3>

                  <div className="my-5 h-px w-10 bg-[var(--color-bronce)] transition-all duration-500 group-hover:w-16" />

                  <p className="max-w-[260px] text-center text-[14px] leading-7 text-[#68635D] sm:text-[15px]">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="flex w-full justify-center bg-[#EAE6DD]">
          <div className="flex w-full max-w-[1100px] flex-col items-center px-6 py-32 text-center sm:px-8 md:py-36 lg:px-10 lg:py-40">
            <div className="flex w-full items-center justify-center gap-5 sm:gap-8">
              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />

              <h2 className="shrink-0 font-[var(--font-cinzel)] text-[18px] font-medium uppercase tracking-[0.12em] text-[var(--color-carbon)] sm:text-[22px]">
                Nuestra filosofía
              </h2>

              <div className="h-px flex-1 bg-[var(--color-bronce)]/55" />
            </div>

            <h3 className="mt-16 max-w-[850px] text-center font-[var(--font-cinzel)] text-[30px] leading-tight text-[var(--color-carbon)] sm:text-[38px] md:text-[42px]">
              Construimos. Operamos. Crecemos.
            </h3>

            <p className="mt-7 max-w-[700px] text-center font-[var(--font-cinzel)] text-[17px] text-[#6B655E] sm:text-[20px]">
              Visión de hoy, legado de mañana.
            </p>
          </div>
        </section>

        {/* CIERRE */}
        <section className="flex w-full justify-center bg-[var(--bg-primary)]">
          <div className="flex w-full max-w-[900px] flex-col items-center px-6 py-28 text-center sm:px-8 md:py-32">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
              LOAM Grupo Empresarial
            </p>

            <p className="mt-7 max-w-[700px] text-center font-[var(--font-cinzel)] text-[24px] leading-[1.5] text-[var(--color-carbon)] sm:text-[28px]">
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