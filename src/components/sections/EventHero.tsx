import type { HeroContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

interface EventHeroProps {
    label: HeroContent["label"];
    title: HeroContent["title"];
    titleAccent: HeroContent["titleAccent"];
    description: HeroContent["description"];
    image?: HeroContent["image"];
}

export function EventHero({ label, title, titleAccent, description, image }: EventHeroProps) {
    const bgImage = image || PLACEHOLDER;

    return (
        <section className="relative bg-brand-black overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('${bgImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent" />

            <div className="relative z-10 container-xl py-20 lg:py-28">
                <p className="section-label text-brand-red">{label}</p>
                <h1 className="font-display font-black text-white text-heading-xl leading-none">
                    {title}
                    <br />
                    <span className="text-brand-red">{titleAccent}</span>
                </h1>
                <p className="mt-6 text-brand-gray-light text-lg max-w-2xl leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}
