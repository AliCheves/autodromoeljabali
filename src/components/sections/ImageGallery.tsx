"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types/content";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

interface ImageGalleryProps {
    images: GalleryImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedImage(image)}
                        aria-label={`Ver ${image.alt} en tamaño completo`}
                        className="relative aspect-video overflow-hidden bg-brand-gray-bg group focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 motion-reduce:transition-none" />
                    </button>
                ))}
            </div>

            <ImageLightbox
                isOpen={selectedImage !== null}
                onClose={() => setSelectedImage(null)}
                src={selectedImage?.src || ""}
                alt={selectedImage?.alt || ""}
            />
        </>
    );
}
