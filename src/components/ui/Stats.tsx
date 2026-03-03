import { clsx } from "clsx";

export interface StatItem {
  icon?: React.ReactNode;
  value: string | number;
  label: string;
  suffix?: string;
}

interface StatGridProps {
  stats: StatItem[];
  columns?: 3 | 4 | 5 | 6;
  className?: string;
  bordered?: boolean;
  dark?: boolean;
}

export function StatGrid({
  stats,
  columns = 6,
  className,
  bordered = true,
  dark = false,
}: StatGridProps) {
  const colClass = {
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  }[columns];

  return (
    <div className={clsx("grid", colClass, className)}>
      {stats.map((stat, i) => (
        <div
          key={i}
          className={clsx(
            "stat-card",
            dark
              ? "border-brand-gray bg-brand-gray-dark text-white"
              : "border-brand-gray-border",
            i > 0 && bordered && "border-l-0"
          )}
        >
          {stat.icon && (
            <div className={clsx("mb-1", dark ? "text-brand-gray-light" : "text-brand-gray-mid")}>
              {stat.icon}
            </div>
          )}
          <div className={clsx("stat-value", dark && "text-white")}>
            {stat.value}
            {stat.suffix && (
              <span className="text-brand-red text-xl">{stat.suffix}</span>
            )}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

interface BigStatProps {
  value: string;
  label: string;
  description?: string;
  dark?: boolean;
}

export function BigStat({ value, label, description, dark }: BigStatProps) {
  return (
    <div className={clsx("text-center", dark && "text-white")}>
      <div
        className={clsx(
          "font-display font-black text-6xl lg:text-7xl leading-none",
          dark ? "text-white" : "text-brand-black"
        )}
      >
        {value}
      </div>
      <div className="font-mono text-2xs uppercase tracking-widest text-brand-red mt-2">
        {label}
      </div>
      {description && (
        <p className={clsx("text-sm mt-2", dark ? "text-brand-gray-light" : "text-brand-gray-mid")}>
          {description}
        </p>
      )}
    </div>
  );
}
