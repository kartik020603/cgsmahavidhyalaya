"use client";

import { Phone, MessageCircle } from "lucide-react";
import { COLLEGE_INFO, getWhatsAppUrl } from "@/data/college";

export default function FloatingContactButtons() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <aside
      aria-label="Quick contact links"
      className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-end pointer-events-none"
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Chat with CGS Mahavidyalaya on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href={COLLEGE_INFO.contact.phoneTel}
        className="pointer-events-auto flex items-center gap-2 bg-[#002550] hover:bg-[#123b70] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#d5ad55]/50 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002550]"
        aria-label={`Call college office at ${COLLEGE_INFO.contact.phone}`}
      >
        <Phone className="w-5 h-5 text-[#d5ad55]" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          Call Now
        </span>
      </a>
    </aside>
  );
}
