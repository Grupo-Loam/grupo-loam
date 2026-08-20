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
    number: "01",
    name: "Heladería Sarita",
    tagline: "Experiencia dulce y familiar.",
  },
  {
    number: "02",
    name: "Espresso Express",
    tagline: "Energía que conecta.",
  },
  {
    number: "03",
    name: "Terraza Magnolia",
    tagline: "Celebraciones que trascienden.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
              <div>
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
                  Nosotros
                </p>

                <h1 className="max-w-[820px] font-[var(--font-cinzel)] text-[42px] leading-[1.12] tracking-[-0.025em] text-[var(--color-carbon)] sm:text-[52px] md:text-[60px] lg:text-[66px]">
                  Construimos empresas con visión de largo plazo.
                </h1>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-[520px] text-[16px] leading-8 text-[var(--color-text-secondary)] sm:text-[17px] lg:text-[18px] lg:leading-9">
                  LOAM Grupo Empresarial es la marca corporativa matriz desde
                  la cual desarrollamos, administramos e impulsamos negocios y
                  marcas con identidad propia.
                </p>

                <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-[#756F68]">
                  Construimos estructuras sólidas preparadas para crecer de
                  manera responsable, sostenible y con visión generacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISIÓN */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="mx-auto w-full max-w-[1300px] px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[230px_1fr] lg:gap-20">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
                  Misión
                </p>
              </div>

              <div className="max-w-[880px]">
                <h2 className="font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[42px] lg:text-[48px]">
                  Crear valor sostenible.
                </h2>

                <p className="mt-8 text-[16px] leading-8 text-[#625D57] sm:text-[17px] lg:leading-9">
                  Desarrollar, administrar e impulsar negocios y marcas con
                  identidad propia, creando valor sostenible a través de la
                  innovación, la excelencia operativa y la gestión responsable,
                  generando bienestar para nuestros clientes, colaboradores,
                  inversionistas y comunidades, hoy y para las futuras
                  generaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="mx-auto w-full max-w-[1300px] px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[230px_1fr] lg:gap-20">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
                  Visión
                </p>
              </div>

              <div className="max-w-[880px]">
                <h2 className="font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[42px] lg:text-[48px]">
                  Construir un legado.
                </h2>

                <p className="mt-8 text-[16px] leading-8 text-[#625D57] sm:text-[17px] lg:leading-9">
                  Ser un grupo empresarial sólido, diversificado y referente
                  por la excelencia de sus marcas, su capacidad de innovación y
                  su crecimiento sostenible, construyendo un legado que
                  trascienda generaciones y abra oportunidades para un futuro
                  mejor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="w-full bg-[#EAE6DD]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-20 text-center sm:px-8 md:py-24 lg:px-12 lg:py-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronce)]">
              Nuestra filosofía
            </p>

            <h2 className="mx-auto mt-7 max-w-[1000px] font-[var(--font-cinzel)] text-[36px] leading-[1.15] text-[var(--color-carbon)] sm:text-[44px] md:text-[50px] lg:text-[56px]">
              Construimos. Operamos. Crecemos.
            </h2>

            <p className="mt-5 font-[var(--font-cinzel)] text-[18px] text-[#67615A] sm:text-[22px]">
              Visión de hoy, legado de mañana.
            </p>
          </div>
        </section>

        {/* VALORES */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
                  Lo que nos guía
                </p>

                <h2 className="mt-5 font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[40px]">
                  Nuestros valores
                </h2>

                <p className="mt-6 max-w-[390px] text-[15px] leading-8 text-[#6C665F]">
                  Principios que orientan nuestras decisiones y la manera en que
                  construimos el futuro.
                </p>
              </div>

              <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
                {values.map((value) => (
                  <article key={value.title}>
                    <span className="text-[11px] tracking-[0.16em] text-[var(--color-bronce)]">
                      {value.number}
                    </span>

                    <h3 className="mt-5 font-[var(--font-cinzel)] text-[19px] uppercase leading-7 tracking-[0.03em] text-[var(--color-carbon)]">
                      {value.title}
                    </h3>

                    <p className="mt-4 max-w-[300px] text-[14px] leading-7 text-[#68635D]">
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MARCAS */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronce)]">
                  Grupo empresarial
                </p>

                <h2 className="mt-5 max-w-[500px] font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[40px]">
                  Marcas con identidad propia.
                </h2>

                <p className="mt-6 max-w-[430px] text-[15px] leading-8 text-[#68635D]">
                  Cada negocio conserva su esencia mientras forma parte de una
                  estructura empresarial preparada para crecer de manera
                  sostenible.
                </p>
              </div>

              <div>
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="grid gap-4 border-b border-[var(--color-border)] py-6 first:border-t sm:grid-cols-[60px_1fr]"
                  >
                    <span className="pt-1 text-[11px] tracking-[0.16em] text-[var(--color-bronce)]">
                      {brand.number}
                    </span>

                    <div>
                      <h3 className="font-[var(--font-cinzel)] text-[21px] text-[var(--color-carbon)] sm:text-[23px]">
                        {brand.name}
                      </h3>

                      <p className="mt-2 text-[12px] uppercase tracking-[0.08em] text-[#77716A]">
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
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-10 px-6 py-20 sm:px-8 md:py-24 lg:flex-row lg:items-end lg:px-12 lg:py-28">
            <h2 className="max-w-[760px] font-[var(--font-cinzel)] text-[34px] leading-tight text-[var(--color-carbon)] sm:text-[42px] lg:text-[48px]">
              Construimos empresas pensando en el mañana.
            </h2>

            <Link
              href="/#negocios"
              className="inline-flex shrink-0 items-center gap-3 border-b border-[var(--color-bronce)] pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-carbon)] transition duration-300 hover:text-[var(--color-bronce)]"
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