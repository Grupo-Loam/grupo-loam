"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/hero/Hero-1.jpeg",
  "/images/hero/Hero-2.jpeg",
  "/images/hero/Hero-3.jpeg",
  "/images/hero/Hero-4.jpeg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="w-full bg-[var(--bg-secondary)]">
      <div className="w-full px-6 py-10 sm:px-8 md:py-14 lg:px-10 lg:py-16 2xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[43%_57%] lg:gap-8">
          {/* TEXTO */}
          <div className="w-full max-w-[560px]">
            <div className="mb-5 h-[2px] w-12 bg-[var(--color-bronce)] lg:mb-6 lg:w-14" />

            <h1 className="font-[var(--font-cinzel)] text-[37px] leading-[1.12] tracking-[-0.025em] text-[var(--color-carbon)] sm:text-[46px] lg:text-[58px] lg:leading-[1.05] xl:text-[62px]">
              Visión de hoy,
              <br />
              legado de mañana.
            </h1>

            <p className="mt-6 max-w-[450px] text-[15px] leading-7 text-[var(--color-text-secondary)] sm:text-[16px] sm:leading-8 lg:mt-8 lg:text-[18px] lg:leading-9">
              Desarrollamos y gestionamos negocios con propósito, generando
              valor sostenible para las personas, colaboradores y futuras
              generaciones.
            </p>

            <a
              href="#negocios"
              className="mt-7 inline-flex items-center gap-3 bg-[var(--color-bronce-claro)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[var(--color-bronce)] lg:mt-10 lg:px-8 lg:py-4 lg:text-sm"
            >
              Conoce más
              <span>→</span>
            </a>
          </div>

          {/* CARRUSEL */}
          <div
            className="relative h-[300px] w-full overflow-hidden rounded-[18px] transition-transform sm:h-[390px] md:h-[450px] lg:h-[500px] lg:-translate-x-5 lg:rounded-3xl xl:h-[520px] xl:-translate-x-7"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((slide, index) => (
              <div
                key={slide}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0"
                }`}
              >
                <Image
                  src={slide}
                  alt={`LOAM Grupo Empresarial ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 57vw"
                  className="object-cover object-center"
                />
              </div>
            ))}

            {/* FLECHA IZQUIERDA */}
            <button
              type="button"
              aria-label="Imagen anterior"
              onClick={() =>
                setCurrentSlide((current) =>
                  current === 0 ? slides.length - 1 : current - 1
                )
              }
              className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg-primary)]/80 text-[20px] text-[var(--color-carbon)] backdrop-blur-sm transition hover:bg-[var(--bg-primary)] md:flex"
            >
              ←
            </button>

            {/* FLECHA DERECHA */}
            <button
              type="button"
              aria-label="Siguiente imagen"
              onClick={() =>
                setCurrentSlide((current) =>
                  current === slides.length - 1 ? 0 : current + 1
                )
              }
              className="absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg-primary)]/80 text-[20px] text-[var(--color-carbon)] backdrop-blur-sm transition hover:bg-[var(--bg-primary)] md:flex"
            >
              →
            </button>
          </div>
        </div>

        {/* INDICADORES */}
        <div className="mt-5 flex items-center justify-center gap-2 lg:mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ver imagen ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-7 bg-[var(--color-bronce)]"
                  : "w-2 bg-[var(--color-piedra)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}