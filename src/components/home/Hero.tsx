"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/hero/Hero-1.png",
  "/images/hero/Hero-2.png",
  "/images/hero/Hero-3.png",
  "/images/hero/Hero-4.png",
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
    <section className="relative w-full bg-[var(--bg-secondary)]">
      {/* ========================================
          CARRUSEL HERO
      ======================================== */}
      <div
        className="
          relative
          h-[420px]
          w-full
          overflow-hidden
          sm:h-[500px]
          md:h-[580px]
          lg:h-[650px]
          xl:h-[700px]
          2xl:h-[760px]
        "
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ========================================
            SLIDES
        ======================================== */}
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
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* ========================================
            FLECHA IZQUIERDA
        ======================================== */}
        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={previousSlide}
          className="
            absolute
            left-6
            top-1/2
            z-30
            hidden
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-[#EEEBE3]/90
            text-[24px]
            text-[var(--color-carbon)]
            shadow-[0_5px_20px_rgba(0,0,0,0.12)]
            backdrop-blur-md
            transition
            duration-300
            hover:scale-105
            hover:bg-[#EEEBE3]
            md:flex
            lg:left-10
          "
        >
          <span className="-translate-y-[1px]">‹</span>
        </button>

        {/* ========================================
            FLECHA DERECHA
        ======================================== */}
        <button
          type="button"
          aria-label="Siguiente imagen"
          onClick={nextSlide}
          className="
            absolute
            right-6
            top-1/2
            z-30
            hidden
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-[#EEEBE3]/90
            text-[24px]
            text-[var(--color-carbon)]
            shadow-[0_5px_20px_rgba(0,0,0,0.12)]
            backdrop-blur-md
            transition
            duration-300
            hover:scale-105
            hover:bg-[#EEEBE3]
            md:flex
            lg:right-10
          "
        >
          <span className="-translate-y-[1px]">›</span>
        </button>

        {/* ========================================
            INDICADORES
        ======================================== */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ver imagen ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-white"
                  : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}