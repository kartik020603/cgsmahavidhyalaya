import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Facility } from "@/data/facilities";

interface FacilityCardProps {
  facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#c3c6d1]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Image Container with Zoom */}
      <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-[#e6eeff]">
        <Image
          src={facility.image}
          alt={facility.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Badge */}
        <span className="absolute top-3 right-3 bg-[#d5ad55] text-[#0a1c32] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
          {facility.badge}
        </span>

        {/* Title overlay at bottom of photo */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="font-serif font-bold text-lg sm:text-xl leading-snug drop-shadow-sm">
            {facility.title}
          </h3>
          <p className="font-hindi text-xs sm:text-sm text-[#ffdf9e]">
            {facility.hindiTitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
          {facility.hindiDescription}
        </p>

        {/* Features list */}
        <ul className="space-y-1.5 text-xs text-[#121c2a] pt-2 border-t border-gray-100">
          {facility.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#d5ad55] shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Link */}
        <div className="pt-2">
          <Link
            href="/about-us#facilities"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123b70] hover:text-[#002550] group-hover:translate-x-1 transition-all"
          >
            <span>Learn more details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
