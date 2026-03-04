import Image from "next/image";
import { BRANDING_ASSETS } from "@/config/branding";

export function BrandLogos() {
    return (
        <div className="flex items-center gap-x-3">
            <Image
                src={BRANDING_ASSETS.acesLogo}
                alt="ACES"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
            />
            <div className="w-px h-6 bg-brand-gray-border" />
            <Image
                src={BRANDING_ASSETS.autodromoLogo}
                alt="Autódromo Internacional El Jabalí"
                width={160}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
            />
        </div>
    );
}
