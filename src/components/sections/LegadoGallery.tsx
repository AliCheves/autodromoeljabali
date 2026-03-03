import Image from "next/image";
import type { GalleryImage } from "@/types/content";

interface LegadoGalleryProps {
    images: GalleryImage[];
}

export function LegadoGallery({ images }: LegadoGalleryProps) {
    return (
        <section className="bg-brand-gray-bg py-16 lg:py-24">
            <div className="container-xl">
                <p className="section-label text-brand-red mb-2">Galería</p>
                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-brand-black uppercase leading-tight mb-10">
                    NUESTRA <span className="text-brand-red">HISTORIA</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md motion-reduce:transition-none"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
