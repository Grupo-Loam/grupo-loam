import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Nosotros | LOAM Grupo Empresarial",
  description:
    "Conoce la misión, visión y filosofía de LOAM Grupo Empresarial.",
};

const values = [
  {
    number: "01",
    title: "Visión de largo plazo",
    description: "Pensamos en generaciones, no en trimestres.",
  },
  {
    number: "02",
    title: "Excelencia operativa",
    description:
      "Eficiencia, calidad y mejora continua en todo lo que hacemos.",
  },
  {
    number: "03",
    title: "Crecimiento sostenible",
    description: "Invertimos en ideas, personas y comunidades.",
  },
  {
    number: "04",
    title: "Integridad",
    description:
      "Actuamos con transparencia, respeto y responsabilidad.",
  },
];

const brands = [
  {
    name: "Heladería Sarita",
    text: "Experiencia dulce y familiar.",
  },
  {
    name: "Espresso Express",
    text: "Energía que conecta.",
  },
  {
    name: "Terraza Magnolia",
    text: "Celebraciones que trascienden.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="w-full px-6 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-32 2xl:px-12">
            <div className="grid items-end gap-12 lg:grid-cols-[45%_55%] lg:gap-20">
              {/* IZQUIERDA */}
              <div>
                <div className="mb-6 h-[2px] w-14 bg-[var(--color-bronce)]" />

                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  Nosotros
                </p>

                <h1 className="max-w-[720px] font-[var(--font-cinzel)] text-[42px] leading-[1.08] tracking-[-0.025em] text-[var(--color-carbon)] sm:text-[52px] lg:text-[68px] xl:text-[76px]">
                  Construimos hoy.
                  <br />
                  Pensamos en
                  <br />
                  generaciones.
                </h1>
              </div>

              {/* DERECHA */}
              <div className="max-w-[620px] lg:pb-3">
                <p className="text-[17px] leading-8 text-[var(--color-text-secondary)] sm:text-[18px] lg:text-[20px] lg:leading-10">
                  LOAM Grupo Empresarial es la marca corporativa matriz desde
                  la cual desarrollamos, administramos e impulsamos negocios y
                  marcas con visión de largo plazo.
                </p>

                <p className="mt-7 text-[15px] leading-8 text-[#77716A] lg:text-[16px]">
                  Construimos una organización sobria, moderna, confiable y
                  preparada para crecer durante generaciones, creando
                  estructuras capaces de evolucionar junto a cada una de
                  nuestras marcas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISIÓN Y VISIÓN */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="grid lg:grid-cols-2">
            {/* MISIÓN */}
            <article className="border-b border-[var(--color-border)] px-6 py-16 sm:px-8 md:py-20 lg:border-b-0 lg:border-r lg:px-12 lg:py-28 xl:px-16 2xl:px-24">
              <div className="max-w-[680px]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  01 — Misión
                </span>

                <h2 className="mt-7 font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[40px] lg:text-[48px]">
                  Crear valor sostenible.
                </h2>

                <div className="mt-8 h-px w-14 bg-[var(--color-bronce)]" />

                <p className="mt-8 text-[16px] leading-8 text-[#615D57] sm:text-[17px] lg:leading-9">
                  Desarrollar, administrar e impulsar negocios y marcas con
                  identidad propia, creando valor sostenible a través de la
                  innovación, la excelencia operativa y la gestión responsable,
                  generando bienestar para nuestros clientes, colaboradores,
                  inversionistas y comunidades, hoy y para las futuras
                  generaciones.
                </p>
              </div>
            </article>

            {/* VISIÓN */}
            <article className="px-6 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-28 xl:px-16 2xl:px-24">
              <div className="max-w-[680px]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  02 — Visión
                </span>

                <h2 className="mt-7 font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[40px] lg:text-[48px]">
                  Construir un legado.
                </h2>

                <div className="mt-8 h-px w-14 bg-[var(--color-bronce)]" />

                <p className="mt-8 text-[16px] leading-8 text-[#615D57] sm:text-[17px] lg:leading-9">
                  Ser un grupo empresarial sólido, diversificado y referente
                  por la excelencia de sus marcas, su capacidad de innovación y
                  su crecimiento sostenible, construyendo un legado que
                  trascienda generaciones y abra oportunidades para un futuro
                  mejor.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="px-6 py-20 text-center sm:px-8 md:py-28 lg:px-10 lg:py-36 2xl:px-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
              Nuestra filosofía
            </p>

            <h2 className="mx-auto mt-8 max-w-[1200px] font-[var(--font-cinzel)] text-[38px] leading-[1.15] tracking-[-0.02em] text-[var(--color-carbon)] sm:text-[48px] lg:text-[64px]">
              Construimos.
              <br className="sm:hidden" /> Operamos.
              <br className="sm:hidden" /> Crecemos.
            </h2>

            <div className="mx-auto my-9 h-px w-16 bg-[var(--color-bronce)]" />

            <p className="font-[var(--font-cinzel)] text-[20px] text-[#615D57] sm:text-[24px] lg:text-[30px]">
              Visión de hoy, legado de mañana.
            </p>
          </div>
        </section>

        {/* VALORES */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-28 2xl:px-12">
            <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  Lo que nos guía
                </p>

                <h2 className="mt-5 font-[var(--font-cinzel)] text-[34px] text-[var(--color-carbon)] sm:text-[42px] lg:text-[52px]">
                  Nuestros valores
                </h2>
              </div>

              <p className="max-w-[450px] text-[15px] leading-8 text-[#68635D]">
                Principios que orientan nuestras decisiones, nuestra manera de
                operar y la forma en que construimos el futuro.
              </p>
            </div>

            <div className="grid border-y border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className={`group min-h-[260px] px-7 py-10 transition duration-500 hover:bg-[var(--bg-secondary)] lg:px-8 ${
                    index < values.length - 1
                      ? "lg:border-r lg:border-[var(--color-border)]"
                      : ""
                  }`}
                >
                  <span className="text-[11px] font-medium tracking-[0.14em] text-[var(--color-bronce)]">
                    {value.number}
                  </span>

                  <h3 className="mt-12 font-[var(--font-cinzel)] text-[19px] uppercase tracking-[0.04em] text-[var(--color-carbon)]">
                    {value.title}
                  </h3>

                  <div className="my-5 h-px w-8 bg-[var(--color-bronce)] transition-all duration-500 group-hover:w-14" />

                  <p className="max-w-[260px] text-[14px] leading-7 text-[#69645E]">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MARCAS */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-28 2xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[35%_65%] lg:gap-20">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  Grupo Empresarial
                </p>

                <h2 className="mt-5 max-w-[480px] font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[42px] lg:text-[52px]">
                  Marcas con identidad propia.
                </h2>

                <p className="mt-7 max-w-[430px] text-[15px] leading-8 text-[#68635D]">
                  Cada negocio conserva su esencia mientras forma parte de una
                  estructura empresarial preparada para crecer de manera
                  sostenible.
                </p>
              </div>

              <div className="border-t border-[var(--color-border)]">
                {brands.map((brand, index) => (
                  <div
                    key={brand.name}
                    className="group grid gap-3 border-b border-[var(--color-border)] py-8 transition-all duration-300 sm:grid-cols-[70px_1fr_auto] sm:items-center"
                  >
                    <span className="text-[11px] tracking-[0.12em] text-[var(--color-bronce)]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-[var(--font-cinzel)] text-[20px] text-[var(--color-carbon)] sm:text-[23px]">
                        {brand.name}
                      </h3>

                      <p className="mt-2 text-[13px] uppercase tracking-[0.06em] text-[#77716A]">
                        {brand.text}
                      </p>
                    </div>

                    <span className="hidden text-[22px] text-[var(--color-carbon)] transition-transform duration-300 group-hover:translate-x-2 sm:block">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="px-6 py-20 text-center sm:px-8 md:py-24 lg:px-10 lg:py-28 2xl:px-12">
            <h2 className="mx-auto max-w-[850px] font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[42px] lg:text-[52px]">
              Construimos empresas pensando en el mañana.
            </h2>

            <Link
              href="/#negocios"
              className="mt-10 inline-flex items-center gap-4 border border-[var(--color-bronce)] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-carbon)] transition-all duration-300 hover:bg-[var(--color-bronce)] hover:text-white"
            >
              Conoce nuestros negocios
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}