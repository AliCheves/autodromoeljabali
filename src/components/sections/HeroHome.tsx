import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types/content";

interface HeroHomeProps {
  content: HeroContent;
}

export function HeroHome({ content }: HeroHomeProps) {
  const { label, title, titleAccent, description, image } = content;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">

      {image && (
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}



      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-red/10 to-brand-red/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />



      <div className="relative z-10 container-xl py-24 flex flex-col items-start">
        <div className="max-w-4xl mx-auto">
          {label && (
            <div className="flex items-center mb-6">
              <div className="w-12 h-[2px] bg-brand-red mr-4" />
              <span className="uppercase tracking-widest text-brand-red text-sm">
                {label}
              </span>
            </div>
          )}

          <h1 className="font-black text-white leading-none mb-2">
            <span className="block text-[clamp(3rem,8vw,7rem)]">{title}</span>
            {titleAccent && (
              <span className="block text-[clamp(3rem,8vw,7rem)] text-brand-red">
                {titleAccent}
              </span>
            )}
          </h1>

          {description && (
            <p className="text-brand-gray-light text-lg max-w-xl leading-relaxed mt-6 mb-10">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
            <Link
              href="/estructura"
              className="px-8 py-3 bg-brand-red text-white font-bold text-lg rounded-none shadow-none hover:bg-brand-red/80 transition-all text-center"
            >
              DESCUBRIR MÁS
            </Link>
            <Link
              href="/eventos"
              className="px-8 py-3 border border-white text-white font-bold text-lg rounded-none shadow-none hover:bg-white hover:text-black transition-all text-center"
            >
              VER EVENTOS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
