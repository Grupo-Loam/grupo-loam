"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/hero/Hero-2.png",
  "/images/hero/Hero-1.png",
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
    <section className="relative w-full bg-[#EEEBE3]">
      {/* ========================================
          CARRUSEL HERO
      ======================================== */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#EEEBE3]

          h-[260px]
          min-[400px]:h-[285px]
          sm:h-[360px]
          md:h-[480px]
          lg:h-[620px]
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
              className="
                object-contain
                object-center

                md:object-cover
                md:object-center
              "
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
            left-4
            top-1/2
            z-30
            flex
            h-9
            w-9
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-[#EEEBE3]/90
            text-[20px]
            text-[var(--color-carbon)]
            shadow-[0_4px_16px_rgba(0,0,0,0.10)]
            backdrop-blur-md
            transition
            duration-300

            hover:scale-105
            hover:bg-[#EEEBE3]

            sm:h-10
            sm:w-10
            md:left-6
            md:h-12
            md:w-12
            md:text-[24px]
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
            right-4
            top-1/2
            z-30
            flex
            h-9
            w-9
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-[#EEEBE3]/90
            text-[20px]
            text-[var(--color-carbon)]
            shadow-[0_4px_16px_rgba(0,0,0,0.10)]
            backdrop-blur-md
            transition
            duration-300

            hover:scale-105
            hover:bg-[#EEEBE3]

            sm:h-10
            sm:w-10
            md:right-6
            md:h-12
            md:w-12
            md:text-[24px]
            lg:right-10
          "
        >
          <span className="-translate-y-[1px]">›</span>
        </button>

        {/* ========================================
            INDICADORES
        ======================================== */}
        <div
          className="
            absolute
            bottom-4
            left-1/2
            z-30
            flex
            -translate-x-1/2
            items-center
            justify-center
            gap-2
            md:bottom-6
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ver imagen ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] rounded-full shadow-sm transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-white"
                  : "w-3 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}