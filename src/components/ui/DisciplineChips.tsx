import type { PilotDiscipline } from "@/types/content";

interface DisciplineChipsProps {
    disciplines: PilotDiscipline[];
    size?: "sm" | "md";
}

export function DisciplineChips({ disciplines, size = "sm" }: DisciplineChipsProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {disciplines.map((discipline) => (
                <span
                    key={discipline}
                    className={`inline-flex items-center rounded-full bg-brand-red/10 text-brand-red font-mono uppercase tracking-widest ${size === "sm"
                            ? "px-2.5 py-0.5 text-2xs"
                            : "px-3 py-1 text-xs"
                        }`}
                >
                    {discipline}
                </span>
            ))}
        </div>
    );
}
