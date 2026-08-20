import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Nosotros | LOAM Grupo Empresarial",
  description:
    "Conoce la misión, visión, filosofía y valores de LOAM Grupo Empresarial.",
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

const brands = [
  {
    name: "Heladería Sarita",
    tagline: "Experiencia dulce y familiar.",
  },
  {
    name: "Espresso Express",
    tagline: "Energía que conecta.",
  },
  {
    name: "Terraza Magnolia",
    tagline: "Celebraciones que trascienden.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* INTRODUCCIÓN */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-36 xl:px-16 2xl:px-20">
            <div className="max-w-[980px]">
              <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
                Nosotros
              </p>

              <h1 className="font-[var(--font-cinzel)] text-[40px] leading-[1.15] tracking-[-0.02em] text-[var(--color-carbon)] sm:text-[50px] md:text-[56px] lg:text-[64px]">
                Construimos empresas
                <br />
                con visión de largo plazo.
              </h1>

              <p className="mt-10 max-w-[820px] text-[16px] leading-8 text-[var(--color-text-secondary)] sm:text-[17px] lg:text-[18px] lg:leading-9">
                LOAM Grupo Empresarial es la marca corporativa matriz desde la
                cual desarrollamos, administramos e impulsamos negocios y
                marcas con identidad propia, construyendo estructuras sólidas
                preparadas para crecer de manera sostenible.
              </p>
            </div>
          </div>
        </section>

        {/* MISIÓN Y VISIÓN */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* MISIÓN */}
              <article>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  Misión
                </p>

                <h2 className="mt-6 font-[var(--font-cinzel)] text-[32px] leading-tight text-[var(--color-carbon)] sm:text-[38px] lg:text-[42px]">
                  Crear valor sostenible.
                </h2>

                <div className="my-8 h-px w-14 bg-[var(--color-bronce)]" />

                <p className="max-w-[620px] text-[15px] leading-8 text-[#625D57] sm:text-[16px] lg:leading-9">
                  Desarrollar, administrar e impulsar negocios y marcas con
                  identidad propia, creando valor sostenible a través de la
                  innovación, la excelencia operativa y la gestión responsable,
                  generando bienestar para nuestros clientes, colaboradores,
                  inversionistas y comunidades, hoy y para las futuras
                  generaciones.
                </p>
              </article>

              {/* VISIÓN */}
              <article>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  Visión
                </p>

                <h2 className="mt-6 font-[var(--font-cinzel)] text-[32px] leading-tight text-[var(--color-carbon)] sm:text-[38px] lg:text-[42px]">
                  Construir un legado.
                </h2>

                <div className="my-8 h-px w-14 bg-[var(--color-bronce)]" />

                <p className="max-w-[620px] text-[15px] leading-8 text-[#625D57] sm:text-[16px] lg:leading-9">
                  Ser un grupo empresarial sólido, diversificado y referente
                  por la excelencia de sus marcas, su capacidad de innovación y
                  su crecimiento sostenible, construyendo un legado que
                  trascienda generaciones y abra oportunidades para un futuro
                  mejor.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-24 text-center sm:px-8 md:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
              Nuestra filosofía
            </p>

            <h2 className="mt-8 font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[42px] lg:text-[50px]">
              Construimos. Operamos. Crecemos.
            </h2>

            <div className="mx-auto my-8 h-px w-14 bg-[var(--color-bronce)]" />

            <p className="font-[var(--font-cinzel)] text-[18px] text-[#6B655E] sm:text-[21px] lg:text-[24px]">
              Visión de hoy, legado de mañana.
            </p>
          </div>
        </section>

        {/* VALORES */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
            <div className="mb-14 max-w-[700px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                Lo que nos guía
              </p>

              <h2 className="mt-5 font-[var(--font-cinzel)] text-[34px] text-[var(--color-carbon)] sm:text-[40px] lg:text-[44px]">
                Nuestros valores
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#68635D]">
                Principios que orientan nuestras decisiones y la forma en que
                construimos el futuro.
              </p>
            </div>

            <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <article key={value.title} className="max-w-[290px]">
                  <span className="text-[11px] tracking-[0.14em] text-[var(--color-bronce)]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 font-[var(--font-cinzel)] text-[17px] uppercase leading-6 tracking-[0.03em] text-[var(--color-carbon)]">
                    {value.title}
                  </h3>

                  <div className="my-5 h-px w-10 bg-[var(--color-bronce)]" />

                  <p className="text-[14px] leading-7 text-[#68635D]">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MARCAS */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
            <div className="grid gap-14 lg:grid-cols-[40%_60%] lg:gap-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  Grupo empresarial
                </p>

                <h2 className="mt-5 font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[40px] lg:text-[44px]">
                  Marcas con identidad propia.
                </h2>

                <p className="mt-7 max-w-[430px] text-[15px] leading-8 text-[#68635D]">
                  Cada negocio conserva su esencia mientras forma parte de una
                  estructura empresarial preparada para crecer de manera
                  sostenible.
                </p>
              </div>

              <div className="space-y-0">
                {brands.map((brand, index) => (
                  <div
                    key={brand.name}
                    className="grid gap-4 border-b border-[var(--color-border)] py-7 first:border-t sm:grid-cols-[70px_1fr]"
                  >
                    <span className="text-[11px] tracking-[0.14em] text-[var(--color-bronce)]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-[var(--font-cinzel)] text-[20px] text-[var(--color-carbon)]">
                        {brand.name}
                      </h3>

                      <p className="mt-2 text-[12px] uppercase tracking-[0.07em] text-[#77716A]">
                        {brand.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-24 text-center sm:px-8 md:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
            <h2 className="mx-auto max-w-[900px] font-[var(--font-cinzel)] text-[32px] leading-tight text-[var(--color-carbon)] sm:text-[40px] lg:text-[46px]">
              Construimos empresas pensando en el mañana.
            </h2>

            <Link
              href="/#negocios"
              className="mt-10 inline-flex items-center gap-3 border border-[var(--color-bronce)] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-carbon)] transition duration-300 hover:bg-[var(--color-bronce)] hover:text-white"
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