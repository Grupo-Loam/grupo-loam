import {
  Leaf,
  Users,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "VISIÓN DE LARGO PLAZO",
    description: "Pensamos en generaciones, no en trimestres.",
  },
  {
    icon: Users,
    title: "EXCELENCIA OPERATIVA",
    description: "Eficiencia, calidad y mejora continua en todo lo que hacemos.",
  },
  {
    icon: TrendingUp,
    title: "CRECIMIENTO SOSTENIBLE",
    description: "Invertimos en ideas, personas y comunidades.",
  },
  {
    icon: ShieldCheck,
    title: "INTEGRIDAD",
    description: "Actuamos con transparencia, respeto y responsabilidad.",
  },
];

export default function Values() {
  return (
    <section className="w-full bg-[var(--bg-primary)]">
      <div className="w-full px-6 sm:px-8 lg:px-10 2xl:px-12">
        <div className="grid overflow-hidden border-y border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`flex min-h-[175px] flex-col items-center justify-center px-6 py-7 text-center lg:px-8 ${
                  index !== values.length - 1
                    ? "lg:border-r lg:border-[var(--color-border)]"
                    : ""
                }`}
              >
                <div className="flex h-[28px] items-center justify-center">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[var(--color-bronce-claro)]"
                  />
                </div>

                <div className="mt-4 flex min-h-[34px] items-center justify-center">
                  <h3 className="font-[var(--font-cinzel)] text-[15px] leading-tight tracking-[0.02em] text-[var(--color-carbon)]">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-2 flex min-h-[56px] items-start justify-center">
                  <p className="max-w-[230px] text-[14px] leading-7 text-[#666]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}