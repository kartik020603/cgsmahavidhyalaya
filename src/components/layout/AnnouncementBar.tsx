import Link from "next/link";
import { GraduationCap, Phone, ShieldCheck } from "lucide-react";
import { COLLEGE_INFO } from "@/data/college";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0a1c32] text-[#ffdf9e] px-4 sm:px-6 py-2 text-xs border-b border-[#374860]/40">
      <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-y-1.5">
        {/* Left Announcements */}
        <div className="flex items-center gap-2 font-medium tracking-wide uppercase">
          <GraduationCap className="w-4 h-4 text-[#d5ad55] shrink-0" />
          <span className="hidden sm:inline">Welcome to {COLLEGE_INFO.name.english}</span>
          <span className="text-[#d5ad55]/50 hidden sm:inline">|</span>
          <span className="text-white normal-case font-hindi font-normal text-xs sm:text-sm">
            {COLLEGE_INFO.motto.hindi}
          </span>
        </div>

        {/* Right Contact & Accreditation */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs">
          <a
            href={COLLEGE_INFO.contact.phoneTel}
            className="flex items-center gap-1.5 text-white hover:text-[#ffdf9e] transition-colors focus:outline-none focus:ring-1 focus:ring-[#d5ad55] rounded px-1"
            aria-label={`Call college office at ${COLLEGE_INFO.contact.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#d5ad55]" />
            <span className="font-semibold">{COLLEGE_INFO.contact.phoneDisplay}</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-[#0a1c32] bg-[#ffdf9e] px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#002550]" />
            <span>UP Govt. Approved</span>
          </div>

          <Link
            href="/contact-us"
            className="hidden lg:inline-block text-[#d5ad55] hover:underline text-xs"
          >
            प्रवेश सत्र 2025-26
          </Link>
        </div>
      </div>
    </div>
  );
}
