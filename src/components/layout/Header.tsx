"use client";

import Link from "next/link";
import AnnouncementBar from "./AnnouncementBar";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import CollegeLogo from "@/components/ui/CollegeLogo";
import { COLLEGE_INFO } from "@/data/college";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function Header() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(10,28,50,0.08)] border-b border-[#e6eeff]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation Bar */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo and College Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#d5ad55] rounded-md py-1"
          aria-label="CGS Mahavidyalaya Homepage"
        >
          <CollegeLogo size={52} className="transition-transform group-hover:scale-105 duration-300" />

          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#002550] leading-snug group-hover:text-[#123b70] transition-colors">
              {COLLEGE_INFO.name.hindi}
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#4f5f78] tracking-wider uppercase">
              {COLLEGE_INFO.name.english} • सादाबाद (हाथरस)
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <DesktopNavigation />

        {/* CTA and Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openEnquiryModal}
            className="hidden sm:inline-flex items-center justify-center bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#002550]"
          >
            <span>Enquire Now</span>
          </button>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
