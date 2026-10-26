"use client";

import { GALLERY_CATEGORIES, GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

interface GalleryFiltersProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  counts: Record<GalleryCategory, number>;
}

export default function GalleryFilters({
  activeCategory,
  onSelectCategory,
  counts,
}: GalleryFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Gallery category filters"
      className="flex flex-wrap items-center justify-center gap-2 mb-10"
    >
      {GALLERY_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        const count = counts[cat.id] || 0;

        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#d5ad55]",
              isActive
                ? "bg-[#002550] text-[#ffdf9e] shadow-md font-bold scale-105"
                : "bg-white text-[#43474f] border border-[#c3c6d1]/60 hover:bg-[#e6eeff] hover:text-[#002550]"
            )}
          >
            <span>{cat.label}</span>
            <span
              className={cn(
                "text-[10px] px-1.5 py-0.2 rounded-full",
                isActive ? "bg-[#d5ad55] text-[#0a1c32]" : "bg-gray-100 text-[#737780]"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
