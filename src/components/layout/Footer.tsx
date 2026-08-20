import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--bg-primary)]">
      <div className="w-full px-6 py-12 lg:px-10 2xl:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {/* MARCA */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/logos/Loam.png"
              alt="LOAM Grupo Empresarial"
              className="mb-6 h-auto w-[200px] sm:w-[215px]"
            />

            <p className="max-w-[230px] text-[14px] leading-7 text-[#666]">
              Construimos el presente para transformar el futuro.
            </p>
          </div>

          {/* ENLACES */}
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-5 font-[var(--font-cinzel)] text-[16px] tracking-[0.05em] text-[var(--color-carbon)]">
              ENLACES RÁPIDOS
            </h3>

            <ul className="space-y-2 text-[14px] leading-7 text-[#555]">
              <li>
                <Link
                  href="#nosotros"
                  className="transition hover:text-[var(--color-bronce)]"
                >
                  Nosotros
                </Link>
              </li>

              <li>
                <Link
                  href="#negocios"
                  className="transition hover:text-[var(--color-bronce)]"
                >
                  Negocios
                </Link>
              </li>

              <li>
                <Link
                  href="#inversion"
                  className="transition hover:text-[var(--color-bronce)]"
                >
                  Inversión
                </Link>
              </li>

              <li>
                <Link
                  href="#sostenibilidad"
                  className="transition hover:text-[var(--color-bronce)]"
                >
                  Sostenibilidad
                </Link>
              </li>

              <li>
                <Link
                  href="#contacto"
                  className="transition hover:text-[var(--color-bronce)]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-5 font-[var(--font-cinzel)] text-[16px] tracking-[0.05em] text-[var(--color-carbon)]">
              CONTÁCTANOS
            </h3>

            <div className="text-[14px] leading-7 text-[#555]">
              <a
                href="mailto:administracion@grupoloam.com"
                className="block transition hover:text-[var(--color-bronce)]"
              >
                administracion@grupoloam.com
              </a>

              <a
                href="https://wa.me/50431666486"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-[var(--color-bronce)]"
              >
                +504 3166-6486
              </a>

              <p>Honduras</p>
            </div>

            <div className="mt-5 flex items-center justify-center gap-5">
              <Link href="#">
                <Image
                  src="/images/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="opacity-75 transition hover:opacity-100"
                />
              </Link>

              <Link
                href="https://wa.me/50431666486"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="opacity-75 transition hover:opacity-100"
                />
              </Link>
            </div>
          </div>

{/* UBICACIÓN */}
<div className="flex flex-col items-center text-center">
  <h3 className="mb-5 font-[var(--font-cinzel)] text-[16px] tracking-[0.05em] text-[var(--color-carbon)]">
    UBICACIÓN
  </h3>

  <div className="w-full max-w-[290px] overflow-hidden border border-[var(--color-border)] shadow-sm">
    <iframe
      title="Ubicación LOAM"
      src="https://maps.google.com/maps?q=Tegucigalpa,Honduras&t=&z=13&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="210"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0 grayscale transition duration-500 hover:grayscale-0"
    />
  </div>

  <p className="mt-4 text-[13px] leading-6 text-[#666]">
    Próximamente compartiremos nuestra ubicación oficial.
  </p>
</div>
<a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-bronce)] transition hover:opacity-70"
>
  Abrir en Google Maps
  <span>↗</span>
</a>

        {/* PARTE INFERIOR */}
        <div className="mt-12 border-t border-[var(--color-border)] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-[12px] text-[#777] md:flex-row md:text-left">
            <p>
              © {new Date().getFullYear()} LOAM Grupo Empresarial. Todos los
              derechos reservados.
            </p>

            <div className="flex items-center justify-center gap-6">
              <Link
                href="#"
                className="transition hover:text-[var(--color-bronce)]"
              >
                Privacidad
              </Link>

              <Link
                href="#"
                className="transition hover:text-[var(--color-bronce)]"
              >
                Cookies
              </Link>

              <Link
                href="#"
                className="transition hover:text-[var(--color-bronce)]"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}