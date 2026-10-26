import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  hindiTitle: string;
  englishTitle: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({
  badge,
  hindiTitle,
  englishTitle,
  description,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative w-full bg-[#0a1c32] text-white py-14 sm:py-20 overflow-hidden border-b-4 border-[#d5ad55]">
      {/* Decorative architectural background grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d5ad55 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative ambient gradient */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#123b70]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#d5ad55]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 sm:mb-6"
        >
          <Link
            href="/"
            className="hover:text-[#ffdf9e] flex items-center gap-1 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#d5ad55]" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#ffdf9e] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#ffdf9e] font-medium">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 bg-[#d5ad55] text-[#0a1c32] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span>{badge}</span>
          </div>
        )}

        {/* Titles */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight">
          {englishTitle}
        </h1>

        <p className="font-hindi text-lg sm:text-2xl text-[#ffdf9e] font-medium mb-4">
          {hindiTitle}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
