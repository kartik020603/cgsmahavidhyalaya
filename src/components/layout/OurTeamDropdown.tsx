"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, UserCheck, Sparkles, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

const TEAM_LINKS = [
  {
    label: "Our Team Overview",
    hindiLabel: "नेतृत्व परिचय",
    href: "/our-team",
    description: "Meet the leadership behind our institutional vision",
    icon: UserCheck,
  },
  {
    label: "Prabandhak's Message",
    hindiLabel: "प्रबंधक का संदेश",
    href: "/our-team/prabandhak",
    description: "Hariom Chaudhary — Purpose & Discipline",
    icon: UserCheck,
  },
  {
    label: "Ranjni Chaudhary's Message",
    hindiLabel: "निदेशक का संदेश (रंजनी चौधरी)",
    href: "/our-team/ranjni",
    description: "Ranjni Chaudhary — Curiosity & Transformation",
    icon: Sparkles,
  },
  {
    label: "Virat Chaudhary's Message",
    hindiLabel: "निदेशक का संदेश (विराट चौधरी)",
    href: "/our-team/virat",
    description: "Virat Chaudhary — 21st-Century Competence",
    icon: Laptop,
  },
];

export default function OurTeamDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isTeamActive = pathname.startsWith("/our-team");

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <Link
          href="/our-team"
          className={cn(
            "font-medium text-sm transition-colors py-2 flex items-center gap-1",
            isTeamActive
              ? "text-[#002550] font-bold border-b-2 border-[#d5ad55]"
              : "text-[#43474f] hover:text-[#002550]"
          )}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Our Team</span>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-[#43474f] hover:text-[#002550] focus:outline-none focus:ring-1 focus:ring-[#d5ad55] rounded"
          aria-label="Toggle leadership messages dropdown"
        >
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              isOpen ? "rotate-180 text-[#d5ad55]" : ""
            )}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-[#c3c6d1]/50 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="px-4 py-2 border-b border-gray-100 bg-[#f8f9ff]">
            <p className="text-xs font-semibold text-[#002550] uppercase tracking-wider">
              Management & Leadership
            </p>
            <p className="text-[11px] text-[#737780]">चौधरी गुलाब सिंह महाविद्यालय प्रशासन</p>
          </div>

          <div className="py-1">
            {TEAM_LINKS.map((item) => {
              const Icon = item.icon;
              const isCurrent = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={cn(
                    "flex items-start gap-3 px-4 py-2.5 transition-colors group",
                    isCurrent
                      ? "bg-[#eff4ff] text-[#002550] font-semibold"
                      : "text-[#121c2a] hover:bg-[#f8f9ff] hover:text-[#002550]"
                  )}
                >
                  <div
                    className={cn(
                      "p-1.5 rounded mt-0.5 transition-colors",
                      isCurrent
                        ? "bg-[#123b70] text-[#ffdf9e]"
                        : "bg-[#e6eeff] text-[#123b70] group-hover:bg-[#123b70] group-hover:text-white"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm flex items-center gap-1.5">
                      <span>{item.label}</span>
                    </div>
                    <p className="text-xs text-[#737780] font-normal mt-0.5 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
