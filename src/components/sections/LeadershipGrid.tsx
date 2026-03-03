import type { LeadershipMember } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

interface LeadershipGridProps {
    members: LeadershipMember[];
}

export function LeadershipGrid({ members }: LeadershipGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gray-border">
            {members.map((member) => (
                <div
                    key={member.name}
                    className="bg-white p-8 flex flex-col items-center text-center group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-brand-gray-bg mb-6 border-2 border-brand-gray-border group-hover:border-brand-red transition-colors duration-200">
                        <img
                            src={member.image || PLACEHOLDER}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="font-display font-black text-xl text-brand-black uppercase">
                        {member.name}
                    </h3>
                    <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mt-2">
                        {member.role}
                    </p>
                </div>
            ))}
        </div>
    );
}
