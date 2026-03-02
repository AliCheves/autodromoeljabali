import Link from "next/link";

export function HeroHome() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-black"
      style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Fondo grid y número grande */}
      <div className="absolute inset-0 z-0">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Large number background watermark */}
        <div className="absolute right-32 top-1/2 -translate-y-1/2 font-black text-[28vw] leading-none text-white/[0.07] select-none pointer-events-none" style={{ fontFamily: "inherit" }}>
          27
        </div>
        {/* Sutil gradiente rojo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-red/10 to-brand-red/20" />
      </div>

      <div className="relative z-10 container-xl py-24 flex flex-col items-start">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-[2px] bg-brand-red mr-4" />
            <span className="uppercase tracking-widest text-brand-red text-sm font-mono" style={{ fontFamily: "inherit" }}>TEMPORADA DE CAMPEONATO 2026</span>
          </div>

          {/* Main headline */}
          <h1 className="font-black text-white leading-none mb-2" style={{ fontFamily: "inherit" }}>
            <span className="block text-[clamp(3rem,8vw,7rem)]" style={{ fontFamily: "inherit" }}>SUPERANDO LOS</span>
            <span className="block text-[clamp(3rem,8vw,7rem)] text-brand-red" style={{ fontFamily: "inherit" }}>LÍMITES</span>
          </h1>

          {/* Subheadline */}
          <p className="text-brand-gray-light text-lg max-w-xl leading-relaxed mt-6 mb-10" style={{ fontFamily: "inherit" }}>
            Experimente el pináculo del automovilismo en Autódromo Internacional El Jabalí. Donde la precisión se encuentra con la pasión en la pista.
          </p>

          {/* CTAs */}
          <div className="flex gap-6 mt-2">
            <Link href="/estructura" className="px-8 py-3 bg-brand-red text-white font-bold text-lg rounded-none shadow-none hover:bg-brand-red/80 transition-all" style={{ fontFamily: "inherit" }}>
              DESCUBRIR MÁS
            </Link>
            <Link href="/eventos" className="px-8 py-3 border border-white text-white font-bold text-lg rounded-none shadow-none hover:bg-white hover:text-black transition-all" style={{ fontFamily: "inherit" }}>
              VER EVENTOS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
