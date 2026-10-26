import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Shield } from "lucide-react";
import { ManagementMember } from "@/data/management";

interface ManagementProfileCardProps {
  member: ManagementMember;
}

export default function ManagementProfileCard({ member }: ManagementProfileCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#c3c6d1]/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Photo Header */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#002550]">
        <Image
          src={member.image}
          alt={member.name.english}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c32] via-[#0a1c32]/30 to-transparent" />

        <div className="absolute top-3 right-3 bg-[#d5ad55] text-[#0a1c32] text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
          {member.designation.tag}
        </div>

        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="font-serif font-bold text-xl sm:text-2xl leading-tight">
            {member.name.english}
          </h3>
          <p className="font-hindi text-sm text-[#ffdf9e]">
            {member.name.hindi} • {member.designation.hindi}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <p className="text-xs font-semibold text-[#123b70] uppercase tracking-wider mb-2">
            {member.boardRole}
          </p>

          {/* Quote snippet */}
          <div className="bg-[#f8f9ff] p-4 rounded-xl border-l-4 border-[#d5ad55] relative my-3">
            <Quote className="w-5 h-5 text-[#d5ad55] mb-1 opacity-70" />
            <p className="font-hindi text-xs sm:text-sm text-[#121c2a] leading-relaxed line-clamp-3">
              {member.shortMessage}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#43474f] line-clamp-2 mt-2">
            {member.overview}
          </p>
        </div>

        {/* CTA */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <Link
            href={member.route}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#002550] group-hover:text-[#123b70] group-hover:translate-x-1 transition-all"
          >
            <span>Read Message ({member.designation.hindi} का संदेश)</span>
            <ArrowRight className="w-4 h-4 text-[#d5ad55]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
