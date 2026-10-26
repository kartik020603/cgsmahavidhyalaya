import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  hindiTitle?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  hindiTitle,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3",
            isDark
              ? "bg-[#d5ad55] text-[#0a1c32]"
              : "bg-[#e6eeff] text-[#123b70] border border-[#c3c6d1]/40"
          )}
        >
          {badge}
        </span>
      )}

      <h2
        className={cn(
          "font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 leading-tight",
          isDark ? "text-white" : "text-[#002550]"
        )}
      >
        {title}
      </h2>

      {hindiTitle && (
        <p
          className={cn(
            "font-hindi text-base sm:text-xl font-medium mb-3",
            isDark ? "text-[#ffdf9e]" : "text-[#4f5f78]"
          )}
        >
          {hindiTitle}
        </p>
      )}

      {/* Decorative accent underline */}
      <div
        className={cn(
          "w-16 h-1 bg-[#d5ad55] rounded-full mb-4",
          align === "center" ? "mx-auto" : ""
        )}
      />

      {description && (
        <p
          className={cn(
            "text-sm sm:text-base max-w-2xl leading-relaxed",
            align === "center" ? "mx-auto" : "",
            isDark ? "text-gray-300" : "text-[#43474f]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
