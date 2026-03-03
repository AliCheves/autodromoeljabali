import Link from "next/link";
import type { EventDocument } from "@/types/content";

interface EventDocumentCTAProps {
    document: EventDocument;
}

export function EventDocumentCTA({ document }: EventDocumentCTAProps) {
    return (
        <div className="text-center">
            <Link
                href={document.filePath}
                target="_blank"
                rel="noopener noreferrer"
                download={document.fileName}
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wide hover:bg-brand-red/80 transition-all duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3"
                    />
                </svg>
                {document.label}
            </Link>
            <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mt-3">
                Documento oficial en formato PDF
            </p>
        </div>
    );
}
