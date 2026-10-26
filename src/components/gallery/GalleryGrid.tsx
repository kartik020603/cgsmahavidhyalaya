"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Maximize2, ShieldCheck } from "lucide-react";
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from "@/data/gallery";
import GalleryFilters from "./GalleryFilters";
import GalleryLightbox from "./GalleryLightbox";

interface GalleryGridProps {
  initialCategory?: GalleryCategory;
  limit?: number;
  showFilters?: boolean;
}

export default function GalleryGrid({
  initialCategory = "all",
  limit,
  showFilters = true,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(initialCategory);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Category counts
  const counts = useMemo(() => {
    const map: Record<GalleryCategory, number> = {
      all: GALLERY_ITEMS.length,
      campus: 0,
      classrooms: 0,
      facilities: 0,
      activities: 0,
      events: 0,
    };
    GALLERY_ITEMS.forEach((it) => {
      map[it.category] = (map[it.category] || 0) + 1;
    });
    return map;
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    const list =
      activeCategory === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((it) => it.category === activeCategory);
    return limit ? list.slice(0, limit) : list;
  }, [activeCategory, limit]);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleLightboxNavigate = (index: number) => {
    if (filteredItems[index]) {
      setSelectedItem(filteredItems[index]);
    }
  };

  return (
    <div className="w-full">
      {/* Category Filters */}
      {showFilters && (
        <GalleryFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-[#c3c6d1]/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Stage */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#002550]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c32]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-6 h-6 text-[#ffdf9e]" />
                </span>
              </div>

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 bg-[#002550]/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-[#d5ad55]/30">
                {item.category}
              </div>

              {item.isRealUpload && (
                <div className="absolute top-3 right-3 bg-[#d5ad55] text-[#0a1c32] text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#002550]" />
                  <span>Campus Photo</span>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#002550] group-hover:text-[#123b70] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="font-hindi text-xs sm:text-sm text-[#4f5f78] mt-1 line-clamp-1">
                  {item.hindiTitle}
                </p>
                <p className="text-xs text-[#737780] mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#737780]">
                <span>Sadabad, Hathras</span>
                <span className="text-[#123b70] font-semibold group-hover:underline">
                  View Photo →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        items={filteredItems}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={handleLightboxNavigate}
      />
    </div>
  );
}
