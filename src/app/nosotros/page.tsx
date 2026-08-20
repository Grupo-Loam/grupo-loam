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
          <div className="mx-auto w-full max-w-[1500px] px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
            <div className="max-w-[950px]">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                Nosotros
              </p>

              <h1 className="font-[var(--font-cinzel)] text-[38px] leading-[1.12] tracking-[-0.02em] text-[var(--color-carbon)] sm:text-[48px] lg:text-[60px]">
                Construimos empresas
                <br />
                con visión de largo plazo.
              </h1>

              <p className="mt-8 max-w-[800px] text-[16px] leading-8 text-[var(--color-text-secondary)] sm:text-[17px] lg:text-[18px] lg:leading-9">
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
          <div className="mx-auto grid w-full max-w-[1500px] border-y border-[var(--color-border)] lg:grid-cols-2">
            {/* MISIÓN */}
            <article className="border-b border-[var(--color-border)] px-6 py-14 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-bronce)]">
                Misión
              </p>

              <h2 className="mt-5 font-[var(--font-cinzel)] text-[30px] leading-tight text-[var(--color-carbon)] sm:text-[36px] lg:text-[40px]">
                Crear valor sostenible.
              </h2>

              <div className="my-7 h-px w-12 bg-[var(--color-bronce)]" />

              <p className="max-w-[620px] text-[15px] leading-8 text-[#625D57] sm:text-[16px]">
                Desarrollar, administrar e impulsar negocios y marcas con
                identidad propia, creando valor sostenible a través de la
                innovación, la excelencia operativa y la gestión responsable,
                generando bienestar para nuestros clientes, colaboradores,
                inversionistas y comunidades, hoy y para las futuras
                generaciones.
              </p>
            </article>

            {/* VISIÓN */}
            <article className="px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-bronce)]">
                Visión
              </p>

              <h2 className="mt-5 font-[var(--font-cinzel)] text-[30px] leading-tight text-[var(--color-carbon)] sm:text-[36px] lg:text-[40px]">
                Construir un legado.
              </h2>

              <div className="my-7 h-px w-12 bg-[var(--color-bronce)]" />

              <p className="max-w-[620px] text-[15px] leading-8 text-[#625D57] sm:text-[16px]">
                Ser un grupo empresarial sólido, diversificado y referente por
                la excelencia de sus marcas, su capacidad de innovación y su
                crecimiento sostenible, construyendo un legado que trascienda
                generaciones y abra oportunidades para un futuro mejor.
              </p>
            </article>
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-16 text-center sm:px-8 md:py-20 lg:px-10 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
              Nuestra filosofía
            </p>

            <h2 className="mt-6 font-[var(--font-cinzel)] text-[32px] leading-tight text-[var(--color-carbon)] sm:text-[40px] lg:text-[48px]">
              Construimos. Operamos. Crecemos.
            </h2>

            <p className="mt-5 font-[var(--font-cinzel)] text-[18px] text-[#6B655E] sm:text-[20px] lg:text-[24px]">
              Visión de hoy, legado de mañana.
            </p>
          </div>
        </section>

        {/* VALORES */}
        <section className="w-full bg-[var(--bg-primary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
            <div className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                Lo que nos guía
              </p>

              <h2 className="mt-4 font-[var(--font-cinzel)] text-[32px] text-[var(--color-carbon)] sm:text-[38px]">
                Nuestros valores
              </h2>
            </div>

            <div className="grid border-y border-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className={`px-6 py-9 ${
                    index !== values.length - 1
                      ? "lg:border-r lg:border-[var(--color-border)]"
                      : ""
                  }`}
                >
                  <span className="text-[11px] tracking-[0.14em] text-[var(--color-bronce)]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 font-[var(--font-cinzel)] text-[17px] uppercase tracking-[0.03em] text-[var(--color-carbon)]">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-[260px] text-[14px] leading-7 text-[#68635D]">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MARCAS */}
        <section className="w-full bg-[var(--bg-secondary)]">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[40%_60%] lg:gap-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronce)]">
                  Grupo empresarial
                </p>

                <h2 className="mt-4 font-[var(--font-cinzel)] text-[32px] leading-tight text-[var(--color-carbon)] sm:text-[38px]">
                  Marcas con identidad propia.
                </h2>

                <p className="mt-6 max-w-[420px] text-[15px] leading-8 text-[#68635D]">
                  Cada negocio conserva su esencia mientras forma parte de una
                  estructura empresarial preparada para crecer de manera
                  sostenible.
                </p>
              </div>

              <div className="border-t border-[var(--color-border)]">
                {brands.map((brand, index) => (
                  <div
                    key={brand.name}
                    className="grid gap-4 border-b border-[var(--color-border)] py-6 sm:grid-cols-[60px_1fr]"
                  >
                    <span className="text-[11px] tracking-[0.14em] text-[var(--color-bronce)]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-[var(--font-cinzel)] text-[19px] text-[var(--color-carbon)]">
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
          <div className="mx-auto w-full max-w-[1500px] px-6 py-16 text-center sm:px-8 md:py-20 lg:px-10 lg:py-24">
            <h2 className="mx-auto max-w-[900px] font-[var(--font-cinzel)] text-[30px] leading-tight text-[var(--color-carbon)] sm:text-[38px] lg:text-[44px]">
              Construimos empresas pensando en el mañana.
            </h2>

            <Link
              href="/#negocios"
              className="mt-8 inline-flex items-center gap-3 border border-[var(--color-bronce)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-carbon)] transition hover:bg-[var(--color-bronce)] hover:text-white"
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