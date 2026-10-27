"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CollegeLogo from "@/components/ui/CollegeLogo";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Home,
  Info,
  Users,
  Image as ImageIcon,
  Mail,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { COLLEGE_INFO, getWhatsAppUrl } from "@/data/college";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { cn } from "@/lib/utils";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamExpanded, setIsTeamExpanded] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const pathname = usePathname();
  const { openEnquiryModal } = useEnquiryModal();

  // Close drawer immediately on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll only when mobile menu is open
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

  // Handle right swipe to close the drawer
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 45) {
      // Swiped right -> close drawer
      setIsOpen(false);
    }
    setTouchStartX(null);
  };

  const closeMenu = () => setIsOpen(false);

  const teamSublinks = [
    { label: "Our Team Overview", href: "/our-team", role: "समस्त प्रबंधन मंडल" },
    { label: "Prabandhak's Message", href: "/our-team/prabandhak", role: "श्री हरिओम चौधरी (प्रबंधक)" },
    { label: "Ranjni Chaudhary's Message", href: "/our-team/ranjni", role: "श्रीमती रंजनी चौधरी (निदेशक)" },
    { label: "Virat Chaudhary's Message", href: "/our-team/virat", role: "श्री विराट चौधरी (निदेशक)" },
    { label: "Himani Chaudhary's Message", href: "/our-team/himani", role: "श्रीमती हिमानी चौधरी (उप-प्राचार्या)" },
  ];

  return (
    <div className="lg:hidden">
      {/* Accessible Hamburger Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-11 h-11 text-[#002550] bg-[#f8f9ff] hover:bg-[#e6eeff] active:bg-[#d6e3ff] border border-[#c3c6d1]/60 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#d5ad55] shadow-xs"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6 text-[#002550]" />
      </button>

      {/* Drawer Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0a1c32]/75 backdrop-blur-xs z-[99] transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer Container (Strictly invisible & non-scrollable when closed) */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={cn(
          "fixed top-0 right-0 bottom-0 h-screen h-[100dvh] max-h-[100dvh] w-[88%] max-w-[360px] bg-white z-[100] flex flex-col justify-between transition-all duration-300 ease-out",
          isOpen
            ? "translate-x-0 opacity-100 visible pointer-events-auto shadow-2xl"
            : "translate-x-full opacity-0 invisible pointer-events-none shadow-none"
        )}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="px-4 py-3.5 border-b border-[#e6eeff] bg-[#f8f9ff] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <CollegeLogo size={38} />
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
            onClick={closeMenu}
            className="flex items-center justify-center w-9 h-9 text-[#43474f] hover:text-[#002550] hover:bg-[#e6eeff] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Links */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-3 space-y-1">
          {/* Home */}
          <Link
            href="/"
            onClick={closeMenu}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === "/"
                ? "bg-[#123b70] text-white font-semibold shadow-sm"
                : "text-[#121c2a] hover:bg-[#f8f9ff]"
            )}
          >
            <Home className={cn("w-4 h-4", pathname === "/" ? "text-[#d5ad55]" : "text-[#737780]")} />
            <span>Home (मुख्य पृष्ठ)</span>
          </Link>

          {/* About Us */}
          <Link
            href="/about-us"
            onClick={closeMenu}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === "/about-us"
                ? "bg-[#123b70] text-white font-semibold shadow-sm"
                : "text-[#121c2a] hover:bg-[#f8f9ff]"
            )}
          >
            <Info className={cn("w-4 h-4", pathname === "/about-us" ? "text-[#d5ad55]" : "text-[#737780]")} />
            <span>About Us (महाविद्यालय परिचय)</span>
          </Link>

          {/* Our Team & Leadership Messages */}
          <div className="rounded-lg bg-[#f8f9ff]/70 border border-[#e6eeff] overflow-hidden">
            <button
              type="button"
              onClick={() => setIsTeamExpanded(!isTeamExpanded)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium transition-colors",
                pathname.startsWith("/our-team")
                  ? "bg-[#eff4ff] text-[#002550] font-semibold"
                  : "text-[#121c2a] hover:bg-[#f8f9ff]"
              )}
            >
              <div className="flex items-center gap-3">
                <Users className={cn("w-4 h-4", pathname.startsWith("/our-team") ? "text-[#123b70]" : "text-[#737780]")} />
                <span>Our Team (प्रबंधन एवं संदेश)</span>
              </div>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isTeamExpanded ? "rotate-180 text-[#d5ad55]" : "text-[#737780]"
                )}
              />
            </button>

            {isTeamExpanded && (
              <div className="px-2 pb-2 pt-0.5 space-y-1 bg-white/60">
                {teamSublinks.map((sub) => {
                  const isCurrent = pathname === sub.href;
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between px-2.5 py-2 rounded-md text-xs transition-colors",
                        isCurrent
                          ? "text-[#002550] font-bold bg-[#d6e3ff]"
                          : "text-[#43474f] hover:text-[#002550] hover:bg-[#f8f9ff]"
                      )}
                    >
                      <div>
                        <div className="font-medium">{sub.label}</div>
                        <div className="text-[10px] text-[#737780] font-hindi">{sub.role}</div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[#a9c7ff]" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Photo Gallery */}
          <Link
            href="/photo-gallery"
            onClick={closeMenu}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === "/photo-gallery"
                ? "bg-[#123b70] text-white font-semibold shadow-sm"
                : "text-[#121c2a] hover:bg-[#f8f9ff]"
            )}
          >
            <ImageIcon className={cn("w-4 h-4", pathname === "/photo-gallery" ? "text-[#d5ad55]" : "text-[#737780]")} />
            <span>Photo Gallery (छायाचित्र)</span>
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact-us"
            onClick={closeMenu}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === "/contact-us"
                ? "bg-[#123b70] text-white font-semibold shadow-sm"
                : "text-[#121c2a] hover:bg-[#f8f9ff]"
            )}
          >
            <Mail className={cn("w-4 h-4", pathname === "/contact-us" ? "text-[#d5ad55]" : "text-[#737780]")} />
            <span>Contact Us (संपर्क करें)</span>
          </Link>

          {/* Enquire Now CTA Button in Drawer */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                openEnquiryModal();
              }}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-[#d5ad55] to-[#ebc167] text-[#0a1c32] font-bold text-xs rounded-lg shadow-md uppercase tracking-wider hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#002550]" />
              <span>Enquire Now (प्रवेश परामर्श फॉर्म)</span>
            </button>
          </div>

          {/* University Affiliation Badge */}
          <div className="pt-2">
            <div className="bg-[#eff4ff] p-2.5 rounded-lg border border-[#c3c6d1]/40 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#123b70] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#002550]">
                  Affiliated & Approved
                </p>
                <p className="text-[11px] text-[#53637d] leading-tight">
                  {COLLEGE_INFO.recognition.affiliationHindi}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-3 border-t border-[#e6eeff] bg-[#f8f9ff] shrink-0 space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] text-[#43474f]">
            <MapPin className="w-3.5 h-3.5 text-[#d5ad55] shrink-0" />
            <span className="truncate">{COLLEGE_INFO.location.english}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={COLLEGE_INFO.contact.phoneTel}
              onClick={closeMenu}
              className="flex items-center justify-center gap-1.5 py-2 bg-[#002550] hover:bg-[#123b70] text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffdf9e]" />
              <span>Call Helpline</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
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
