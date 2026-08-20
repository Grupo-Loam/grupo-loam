import Image from "next/image";

export default function WhatsAppButton() {
  const phone = "50431666486";

  const message =
    "Hola, me gustaría recibir más información sobre LOAM Grupo Empresarial.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        group
        fixed
        bottom-6
        right-6
        z-[100]
        flex
        h-[58px]
        w-[58px]
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
        sm:bottom-7
        sm:right-7
        sm:h-[62px]
        sm:w-[62px]
      "
    >
      <Image
        src="/images/icons/whatsapp.svg"
        alt=""
        width={29}
        height={29}
        className="h-[29px] w-[29px] brightness-0 invert transition-transform duration-300 group-hover:scale-110"
      />

      {/* Tooltip desktop */}
      <span
        className="
          pointer-events-none
          absolute
          right-[72px]
          hidden
          whitespace-nowrap
          rounded-sm
          bg-[#171A1C]
          px-4
          py-2
          text-[11px]
          font-medium
          uppercase
          tracking-[0.08em]
          text-white
          opacity-0
          shadow-lg
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
          lg:block
        "
      >
        Escríbenos
      </span>
    </a>
  );
}