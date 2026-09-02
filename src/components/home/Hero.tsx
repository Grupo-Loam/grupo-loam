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

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="w-full bg-[var(--bg-secondary)]">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-12 sm:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-20 2xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
          {/* TEXTO */}
          <div className="w-full lg:pr-4 xl:pr-8">
            <div className="mb-5 h-[2px] w-12 bg-[var(--color-bronce)] lg:mb-6 lg:w-14" />

            <h1 className="max-w-[600px] font-[var(--font-cinzel)] text-[37px] leading-[1.12] tracking-[-0.025em] text-[var(--color-carbon)] sm:text-[46px] lg:text-[54px] lg:leading-[1.06] xl:text-[60px]">
              Visión de hoy,
              <br />
              legado de mañana.
            </h1>

            <p className="mt-6 max-w-[470px] text-[15px] leading-7 text-[var(--color-text-secondary)] sm:text-[16px] sm:leading-8 lg:mt-8 lg:text-[17px] lg:leading-9">
              Desarrollamos y gestionamos negocios con propósito, generando
              valor sostenible para las personas, colaboradores y futuras
              generaciones.
            </p>

            <a
              href="#negocios"
              className="mt-7 inline-flex items-center gap-3 bg-[var(--color-bronce-claro)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[var(--color-bronce)] lg:mt-9 lg:px-7 lg:py-4 lg:text-[12px]"
            >
              Conoce más
              <span>→</span>
            </a>
          </div>

          {/* CARRUSEL */}
          <div
            className="relative h-[300px] w-full overflow-hidden rounded-[18px] sm:h-[390px] md:h-[450px] lg:h-[500px] xl:h-[520px] lg:rounded-[24px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((slide, index) => (
              <div
                key={slide}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
              >
                <Image
                  src={slide}
                  alt={`LOAM Grupo Empresarial ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            ))}

            {/* FLECHA IZQUIERDA */}
            <button
              type="button"
              aria-label="Imagen anterior"
              onClick={previousSlide}
              className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-[#EEEBE3]/90 text-[22px] text-[var(--color-carbon)] shadow-[0_5px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#EEEBE3] md:flex"
            >
              <span className="-translate-y-[1px]">‹</span>
            </button>

            {/* FLECHA DERECHA */}
            <button
              type="button"
              aria-label="Siguiente imagen"
              onClick={nextSlide}
              className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-[#EEEBE3]/90 text-[22px] text-[var(--color-carbon)] shadow-[0_5px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#EEEBE3] md:flex"
            >
              <span className="-translate-y-[1px]">›</span>
            </button>
          </div>
        </div>

        {/* INDICADORES */}
        <div className="mt-6 flex items-center justify-center gap-2 lg:mt-7">
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