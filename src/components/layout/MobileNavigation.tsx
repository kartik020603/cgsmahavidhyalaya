"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CollegeLogo from "@/components/ui/CollegeLogo";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MessageSquare, MapPin, ShieldCheck } from "lucide-react";
import { COLLEGE_INFO, getWhatsAppUrl } from "@/data/college";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { cn } from "@/lib/utils";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamExpanded, setIsTeamExpanded] = useState(false);
  const pathname = usePathname();
  const { openEnquiryModal } = useEnquiryModal();

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const teamSublinks = [
    { label: "Our Team Overview", href: "/our-team" },
    { label: "Prabandhak's Message", href: "/our-team/prabandhak", sub: "श्री हरिओम चौधरी" },
    { label: "Ranjni Chaudhary's Message", href: "/our-team/ranjni", sub: "श्रीमती रंजनी चौधरी" },
    { label: "Virat Chaudhary's Message", href: "/our-team/virat", sub: "श्री विराट चौधरी" },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2 text-[#002550] hover:bg-[#e6eeff] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
        aria-label="Open mobile navigation menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0a1c32]/70 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer Content */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Header */}
        <div className="p-4 border-b border-[#e6eeff] bg-[#f8f9ff] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CollegeLogo size={42} />
            <div>
              <p className="font-serif font-bold text-sm text-[#002550] leading-tight">
                {COLLEGE_INFO.name.english}
              </p>
              <p className="text-[11px] text-[#737780] font-hindi">
                {COLLEGE_INFO.name.hindi}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#43474f] hover:text-[#002550] hover:bg-[#e6eeff] rounded-full focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
          <Link
            href="/"
            className={cn(
              "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              pathname === "/"
                ? "bg-[#123b70] text-white font-semibold"
                : "text-[#121c2a] hover:bg-[#f8f9ff]"
            )}
          >
            Home (मुख्य पृष्ठ)
          </Link>

          <Link
            href="/about-us"
            className={cn(
              "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              pathname === "/about-us"
                ? "bg-[#123b70] text-white font-semibold"
                : "text-[#121c2a] hover:bg-[#f8f9ff]"
            )}
          >
            About Us (हमारे बारे में)
          </Link>

          {/* Our Team Tap-to-Expand */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setIsTeamExpanded(!isTeamExpanded)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                pathname.startsWith("/our-team")
                  ? "bg-[#eff4ff] text-[#002550] font-semibold"
                  : "text-[#121c2a] hover:bg-[#f8f9ff]"
              )}
            >
              <span>Our Team (प्रबंधन एवं संदेश)</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isTeamExpanded ? "rotate-180 text-[#d5ad55]" : "text-[#737780]"
                )}
              />
            </button>

            {isTeamExpanded && (
              <div className="mt-1 ml-3 pl-3 border-l-2 border-[#d5ad55]/40 space-y-1">
                {teamSublinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className={cn(
                      "block px-2 py-2 rounded text-xs transition-colors",
                      pathname === sub.href
                        ? "text-[#002550] font-bold bg-[#eff4ff]"
                        : "text-[#43474f] hover:text-[#002550]"
                    )}
                  >
                    <div>{sub.label}</div>
                    {sub.sub && <div className="text-[10px] text-[#737780]">{sub.sub}</div>}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/photo-gallery"
            className={cn(
              "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              pathname === "/photo-gallery"
                ? "bg-[#123b70] text-white font-semibold"
                : "text-[#121c2a] hover:bg-[#f8f9ff]"
            )}
          >
            Photo Gallery (छायाचित्र)
          </Link>

          <Link
            href="/contact-us"
            className={cn(
              "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              pathname === "/contact-us"
                ? "bg-[#123b70] text-white font-semibold"
                : "text-[#121c2a] hover:bg-[#f8f9ff]"
            )}
          >
            Contact Us (संपर्क करें)
          </Link>

          {/* Enquire Now CTA Button in Drawer */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openEnquiryModal();
              }}
              className="w-full py-2.5 bg-[#d5ad55] text-[#0a1c32] font-bold text-xs rounded-md shadow uppercase tracking-wider hover:bg-[#c7a04a] transition-colors"
            >
              Enquire Now (प्रवेश परामर्श फॉर्म)
            </button>
          </div>

          {/* Institutional Badge */}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <div className="bg-[#eff4ff] p-3 rounded-lg border border-[#c3c6d1]/40 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#123b70] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#002550]">
                  Affiliated & Approved
                </p>
                <p className="text-[11px] text-[#53637d] leading-snug">
                  {COLLEGE_INFO.recognition.affiliationHindi}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-gray-100 bg-[#f8f9ff] space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#43474f] mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#d5ad55] shrink-0" />
            <span className="line-clamp-1">{COLLEGE_INFO.location.english}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={COLLEGE_INFO.contact.phoneTel}
              className="flex items-center justify-center gap-1.5 py-2.5 bg-[#002550] text-white rounded text-xs font-medium hover:bg-[#123b70] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffdf9e]" />
              <span>Call College</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366] text-white rounded text-xs font-medium hover:bg-[#1ebd59] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
