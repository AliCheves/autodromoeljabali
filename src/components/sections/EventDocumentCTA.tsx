import Link from "next/link";
import type { EventDocument } from "@/types/content";

interface EventDocumentCTAProps {
    document?: EventDocument;
    documents?: EventDocument[];
    sectionTitle?: string;
}

function DocumentButton({ doc }: { doc: EventDocument }) {
    const isSecondary = doc.variant === "secondary";

    return (
        <Link
            href={doc.filePath}
            target="_blank"
            rel="noopener noreferrer"
            download={doc.fileName}
            className={`inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 ${isSecondary
                ? "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                : "bg-brand-red text-white hover:bg-brand-red/80"
                }`}
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
            {doc.label}
        </Link>
    );
}

export function EventDocumentCTA({ document, documents, sectionTitle }: EventDocumentCTAProps) {
    const docs = documents || (document ? [document] : []);

    if (docs.length === 0) return null;

    return (
        <div className="text-center overflow-hidden">
            {sectionTitle && (
                <h3 className="font-display font-black text-heading-sm uppercase text-brand-black mb-6 break-words">
                    {sectionTitle}
                </h3>
            )}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                {docs.map((doc) => (
                    <DocumentButton key={doc.filePath} doc={doc} />
                ))}
            </div>
            <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mt-3">
                Documentos oficiales en formato PDF
            </p>
        </div>
    );
}

