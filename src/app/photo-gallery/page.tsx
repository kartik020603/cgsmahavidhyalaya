import type { Metadata } from "next";
import Link from "next/link";
import { Camera, ArrowRight, ShieldCheck, Info } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { COLLEGE_INFO } from "@/data/college";

export const metadata: Metadata = {
  title: "Photo Gallery | छायाचित्र एवं परिसर दर्शन",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय, मानिकपुर, सादाबाद (हाथरस) का फोटो गैलरी — परिसर, कक्षाकक्ष, कंप्यूटर व विज्ञान लैब्स, सांस्कृतिक समारोह एवं खेलकूद की झलकियाँ।",
};

export default function PhotoGalleryPage() {
  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Page Hero */}
      <PageHero
        badge="CAMPUS CHRONICLES"
        hindiTitle="यादें, गतिविधियाँ और हमारे संस्थान की झलकियाँ"
        englishTitle="Every Picture Tells a Story."
        description="Explore the moments, infrastructure, academic life, and celebratory events that define CGS Mahavidyalaya, Sadabad."
        breadcrumbs={[{ label: "Photo Gallery" }]}
      />

      {/* Main Gallery Section */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123b70] bg-[#e6eeff] px-3.5 py-1 rounded inline-block mb-3 border border-[#c3c6d1]/40">
            VISUAL ARCHIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002550]">
            A Glimpse Into Our Academic World
          </h2>
          <p className="font-hindi text-base sm:text-lg text-[#4f5f78] mt-1">
            परिसर, प्रयोगशालाओं और कार्यक्रमों के छायाचित्र
          </p>
          <div className="w-16 h-1 bg-[#d5ad55] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-xs sm:text-sm text-[#737780] leading-relaxed">
            छायाचित्र को बड़े आकार में देखने एवं विवरण पढ़ने के लिए किसी भी फोटो पर क्लिक करें।
          </p>
        </div>

        {/* The Full Interactive Data-Driven Gallery Grid with Filters and Lightbox */}
        <GalleryGrid showFilters={true} />

        {/* Photographic Verification & Disclosure Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-[#c3c6d1]/60 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#123b70] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#d5ad55]" />
          </div>
          <div className="flex-1">
            <h4 className="font-serif font-bold text-sm text-[#002550]">
              Authentic Institutional Imagery
            </h4>
            <p className="text-xs text-[#53637d] mt-0.5 leading-relaxed">
              गैलरी में महाविद्यालय परिसर, भवन एवं कंप्यूटर लैब के वास्तविक छायाचित्र सम्मिलित हैं।
              विभिन्न शैक्षणिक व प्रयोगशाला संदर्भों के लिए मानक शैक्षणिक दृश्यों को भी प्रयुक्त
              किया गया है ताकि विद्यार्थियों को सुविधाओं की संपूर्ण जानकारी प्राप्त हो सके।
            </p>
          </div>
        </div>

        {/* Campus Visit CTA */}
        <div className="mt-16 bg-[#0a1c32] rounded-2xl p-8 sm:p-12 text-white border-2 border-[#d5ad55] text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d5ad55] bg-[#123b70] px-3.5 py-1 rounded inline-block">
            EXPERIENCE IT IN PERSON
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
            See the Campus with Your Own Eyes
          </h3>
          <p className="font-hindi text-base sm:text-lg text-[#ffdf9e] max-w-2xl mx-auto">
            तस्वीरों से परे, आकर स्वयं अनुभव करें — हमारा शांत एवं अनुशासित परिसर।
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-sm px-7 py-3 rounded-lg shadow transition-colors"
            >
              <span>Schedule a Campus Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COLLEGE_INFO.location.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              <span>Get Directions to Sadabad</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
