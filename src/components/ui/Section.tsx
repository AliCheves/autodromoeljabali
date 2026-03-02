import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  gray?: boolean;
  id?: string;
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function Section({ children, className, dark, gray, id }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "section-spacing",
        dark && "bg-brand-black text-white",
        gray && "bg-brand-gray-bg",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  titleAccent,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p
          className={clsx(
            "section-label",
            align === "center" && "justify-center"
          )}
        >
          {label}
        </p>
      )}
      <h2 className="font-display font-black text-heading-lg text-brand-black">
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="text-brand-red">{titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-brand-gray-mid text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  bordered?: boolean;
}

export function Card({ children, className, hover, bordered }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-white",
        bordered && "border border-brand-gray-border",
        hover && "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={clsx("w-16 h-1 bg-brand-red", className)} />
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "gray" | "outline";
  className?: string;
}

export function Badge({ children, variant = "gray", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center font-mono text-2xs uppercase tracking-widest px-2.5 py-1",
        variant === "red" && "bg-brand-red text-white",
        variant === "gray" && "bg-brand-gray-bg text-brand-gray-mid",
        variant === "outline" && "border border-brand-gray-border text-brand-gray-mid",
        className
      )}
    >
      {children}
    </span>
  );
}
