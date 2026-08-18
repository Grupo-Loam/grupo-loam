import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--bg-primary)]">
      <div className="w-full px-6 py-12 lg:px-10 2xl:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {/* MARCA */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/logos/loam.png"
              alt="LOAM Grupo Empresarial"
              width={145}
              height={52}
              className="mb-5 h-auto w-[145px]"
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
                <Link href="#nosotros" className="transition hover:text-[var(--color-bronce)]">
                  Nosotros
                </Link>
              </li>

              <li>
                <Link href="#negocios" className="transition hover:text-[var(--color-bronce)]">
                  Negocios
                </Link>
              </li>

              <li>
                <Link href="#inversion" className="transition hover:text-[var(--color-bronce)]">
                  Inversión
                </Link>
              </li>

              <li>
                <Link href="#sostenibilidad" className="transition hover:text-[var(--color-bronce)]">
                  Sostenibilidad
                </Link>
              </li>

              <li>
                <Link href="#contacto" className="transition hover:text-[var(--color-bronce)]">
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
              <p>administracion@grupoloam.com</p>
              <p>+504 9603-6255</p>
              <p>Honduras</p>
            </div>

            <div className="mt-5 flex items-center justify-center gap-5">
              <Link href="#">
                <Image
                  src="/images/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="opacity-75 transition hover:opacity-100"
                />
              </Link>

              <Link href="#">
                <Image
                  src="/images/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="opacity-75 transition hover:opacity-100"
                />
              </Link>

              <Link href="#">
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

          {/* NEWSLETTER */}
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-5 font-[var(--font-cinzel)] text-[16px] tracking-[0.05em] text-[var(--color-carbon)]">
              NEWSLETTER
            </h3>

            <p className="mb-5 max-w-[260px] text-[14px] leading-7 text-[#555]">
              Recibe noticias, novedades y crecimiento del grupo.
            </p>

            <div className="flex w-full max-w-[280px] overflow-hidden border border-[#C8A66A]">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[13px] outline-none placeholder:text-[#999]"
              />

              <button
                type="button"
                aria-label="Suscribirse"
                className="flex w-12 items-center justify-center bg-[#B48747] text-white transition hover:bg-[#9D743A]"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-[12px] text-[#777] md:flex-row md:text-left">
            <p>
              © {new Date().getFullYear()} LOAM Grupo Empresarial. Todos los derechos reservados.
            </p>

            <div className="flex items-center justify-center gap-6">
              <Link href="#" className="transition hover:text-[var(--color-bronce)]">
                Privacidad
              </Link>

              <Link href="#" className="transition hover:text-[var(--color-bronce)]">
                Cookies
              </Link>

              <Link href="#" className="transition hover:text-[var(--color-bronce)]">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}