"use client";

import { useState } from "react";
import Image from "next/image";
import type { LeadershipMember } from "@/types/content";
import { PhotoLightbox } from "@/components/ui/PhotoLightbox";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

interface LeadershipGridProps {
    members: LeadershipMember[];
}

export function LeadershipGrid({ members }: LeadershipGridProps) {
    const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(
        null
    );

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                    <div
                        key={member.name}
                        className="bg-white border border-brand-gray-border p-8 flex flex-col items-center text-center group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                        <button
                            type="button"
                            aria-label={`Ver foto de ${member.name} más grande`}
                            onClick={() => setSelectedMember(member)}
                            className="w-32 h-32 rounded-full overflow-hidden bg-brand-gray-bg mb-6 border-2 border-brand-gray-border group-hover:border-brand-red transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 motion-reduce:transition-none"
                        >
                            <Image
                                src={member.image || PLACEHOLDER}
                                alt={member.name}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                            />
                        </button>
                        <h3 className="font-display font-black text-xl text-brand-black uppercase">
                            {member.name}
                        </h3>
                        <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mt-2">
                            {member.role}
                        </p>
                    </div>
                ))}
            </div>

            <PhotoLightbox
                isOpen={selectedMember !== null}
                onClose={() => setSelectedMember(null)}
                src={selectedMember?.image || PLACEHOLDER}
                alt={selectedMember?.name || ""}
                title={selectedMember?.name}
                subtitle={selectedMember?.role}
            />
        </>
    );
}
