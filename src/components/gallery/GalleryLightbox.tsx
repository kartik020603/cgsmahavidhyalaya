"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Info, ShieldCheck } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  item,
  items,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
      className="fixed inset-0 z-50 bg-[#0a1c32]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#d5ad55] font-bold">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-xs uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded text-gray-300">
            {item.category}
          </span>
          {item.isRealUpload && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-[#d5ad55]/20 text-[#ffdf9e] px-2 py-0.5 rounded font-semibold border border-[#d5ad55]/40">
              <ShieldCheck className="w-3 h-3 text-[#d5ad55]" />
              <span>Campus Photo</span>
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 text-white hover:text-[#d5ad55] hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
          aria-label="Close photo preview"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-3 max-h-[75vh]">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="relative w-full h-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="90vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="bg-[#002550]/80 border border-[#d5ad55]/30 rounded-xl p-4 sm:p-5 max-w-3xl mx-auto w-full text-white text-center">
        <h3 className="font-serif font-bold text-lg sm:text-xl text-[#ffdf9e]">
          {item.title}
        </h3>
        <p className="font-hindi text-sm text-gray-200 mt-1">
          {item.hindiTitle}
        </p>
        <p className="text-xs text-gray-300 mt-2 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
