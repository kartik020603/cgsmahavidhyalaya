import Link from "next/link";
import CollegeLogo from "@/components/ui/CollegeLogo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { COLLEGE_INFO, getWhatsAppUrl } from "@/data/college";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1c32] text-white border-t-2 border-[#d5ad55]/30 relative overflow-hidden">
      {/* Decorative top illumination line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#002550] via-[#d5ad55] to-[#002550]" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Affiliation (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <CollegeLogo size={58} className="p-0.5" />
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#ffdf9e] leading-snug">
                  {COLLEGE_INFO.name.hindi}
                </h3>
                <p className="text-xs font-semibold text-white/80 tracking-wider uppercase">
                  {COLLEGE_INFO.name.english}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              चौधरी गुलाब सिंह महाविद्यालय, मानिकपुर, सादाबाद (हाथरस) ग्रामीण एवं उपनगरीय
              अंचल के विद्यार्थियों को मूल्यपरक, अनुशासित एवं आधुनिक उच्च शिक्षा उपलब्ध कराने
              हेतु समर्पित है।
            </p>

            {/* Affiliation Callout */}
            <div className="p-3.5 rounded-lg bg-[#123b70]/50 border border-[#d5ad55]/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ffdf9e]">
                <ShieldCheck className="w-4 h-4 text-[#d5ad55] shrink-0" />
                <span>संबद्धता एवं मान्यता (Affiliation)</span>
              </div>
              <p className="text-xs text-gray-300">
                {COLLEGE_INFO.recognition.affiliationHindi}
              </p>
              <p className="text-[11px] text-[#ffdf9e]/80">
                {COLLEGE_INFO.recognition.approvalHindi}
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#ffdf9e] border-b border-[#d5ad55]/30 pb-2">
              त्वरित लिंक / Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#ffdf9e] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#d5ad55] group-hover:translate-x-0.5 transition-transform" />
                  <span>Home (मुख्य पृष्ठ)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-[#ffdf9e] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#d5ad55] group-hover:translate-x-0.5 transition-transform" />
                  <span>About Us (परिचय)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-team"
                  className="hover:text-[#ffdf9e] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#d5ad55] group-hover:translate-x-0.5 transition-transform" />
                  <span>Our Team (प्रबंधन)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-gallery"
                  className="hover:text-[#ffdf9e] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#d5ad55] group-hover:translate-x-0.5 transition-transform" />
                  <span>Photo Gallery (गैलरी)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-[#ffdf9e] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#d5ad55] group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact Us (संपर्क)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Management Messages (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#ffdf9e] border-b border-[#d5ad55]/30 pb-2">
              प्रबंधन / Leadership
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li>
                <Link
                  href="/our-team/prabandhak"
                  className="group block p-2 rounded hover:bg-[#123b70]/40 transition-colors"
                >
                  <div className="font-medium text-white group-hover:text-[#ffdf9e] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#d5ad55]" />
                    <span>श्री हरिओम चौधरी</span>
                  </div>
                  <span className="text-[11px] text-[#ffdf9e]/80 block ml-5">
                    प्रबंधक का संदेश (Prabandhak&apos;s Message)
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-team/ranjni"
                  className="group block p-2 rounded hover:bg-[#123b70]/40 transition-colors"
                >
                  <div className="font-medium text-white group-hover:text-[#ffdf9e] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#d5ad55]" />
                    <span>श्रीमती रंजनी चौधरी</span>
                  </div>
                  <span className="text-[11px] text-[#ffdf9e]/80 block ml-5">
                    निदेशक का संदेश (Director&apos;s Message)
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-team/virat"
                  className="group block p-2 rounded hover:bg-[#123b70]/40 transition-colors"
                >
                  <div className="font-medium text-white group-hover:text-[#ffdf9e] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#d5ad55]" />
                    <span>श्री विराट चौधरी</span>
                  </div>
                  <span className="text-[11px] text-[#ffdf9e]/80 block ml-5">
                    निदेशक का संदेश (Director&apos;s Message)
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#ffdf9e] border-b border-[#d5ad55]/30 pb-2">
              सम्पर्क सूत्र / Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d5ad55] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {COLLEGE_INFO.location.hindi}
                  <br />
                  <span className="text-gray-400 text-xs">
                    {COLLEGE_INFO.location.english}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d5ad55] shrink-0" />
                <a
                  href={COLLEGE_INFO.contact.phoneTel}
                  className="hover:text-[#ffdf9e] font-semibold text-white transition-colors"
                >
                  {COLLEGE_INFO.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d5ad55] shrink-0" />
                <a
                  href={`mailto:${COLLEGE_INFO.contact.email}`}
                  className="hover:text-[#ffdf9e] transition-colors"
                >
                  {COLLEGE_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d5ad55] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">
                  {COLLEGE_INFO.contact.workingHours}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-semibold px-3 py-2 rounded transition-colors shadow-sm"
                >
                  <span>WhatsApp Enquiry</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left">
            © {currentYear} {COLLEGE_INFO.name.english} ({COLLEGE_INFO.name.hindi}). All
            rights reserved.
          </p>

          <p className="text-center md:text-right text-[11px] text-gray-400">
            Affiliated to Raja Mahendra Pratap Singh State University, Aligarh (UP)
          </p>
        </div>
      </div>
    </footer>
  );
}
