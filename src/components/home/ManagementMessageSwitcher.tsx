"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { MANAGEMENT_LIST, ManagementMember } from "@/data/management";
import { cn } from "@/lib/utils";

export default function ManagementMessageSwitcher() {
  const [selectedId, setSelectedId] = useState<ManagementMember["id"]>("prabandhak");

  const current: ManagementMember =
    MANAGEMENT_LIST.find((m) => m.id === selectedId) || MANAGEMENT_LIST[0];

  return (
    <section className="w-full bg-[#0a1c32] text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Background Subtle Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d5ad55 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d5ad55] bg-[#123b70] px-3.5 py-1 rounded inline-block mb-3">
            LEADERSHIP GUIDANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Words That Inspire
          </h2>
          <p className="font-hindi text-lg sm:text-xl text-[#ffdf9e] mb-4">
            हमारे प्रबंधन का संदेश, विद्यार्थियों के नाम।
          </p>
          <div className="w-16 h-1 bg-[#d5ad55] mx-auto rounded-full" />
        </div>

        {/* Member Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {MANAGEMENT_LIST.map((member) => {
            const isSelected = member.id === selectedId;
            return (
              <button
                key={member.id}
                type="button"
                onClick={() => setSelectedId(member.id)}
                className={cn(
                  "flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-[#d5ad55]",
                  isSelected
                    ? "bg-[#123b70] border-[#d5ad55] shadow-lg scale-105"
                    : "bg-[#0a1c32]/80 border-white/20 hover:border-white/50 text-gray-300"
                )}
              >
                <div className="w-10 h-10 relative rounded-full overflow-hidden border border-[#d5ad55]/60 shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name.english}
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      isSelected ? "text-white" : "text-gray-200"
                    )}
                  >
                    {member.name.english}
                  </p>
                  <p className="text-xs text-[#ffdf9e] font-hindi">
                    {member.name.hindi} ({member.designation.hindi})
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Member Display Card */}
        <div className="bg-[#123b70]/40 border border-[#d5ad55]/30 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 backdrop-blur-sm">
          {/* Portrait Column */}
          <div className="lg:col-span-5 bg-[#002550]/60 p-6 sm:p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="relative w-60 sm:w-72 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-2 border-[#d5ad55]/50 group">
              <Image
                src={current.image}
                alt={`${current.name.english} - ${current.designation.english}`}
                fill
                sizes="(max-width: 768px) 240px, 288px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c32] via-transparent to-transparent opacity-60" />
            </div>

            <div className="text-center mt-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                {current.name.english}
              </h3>
              <p className="font-hindi text-base text-[#ffdf9e] mb-1">
                {current.name.hindi}
              </p>
              <div className="inline-block bg-[#d5ad55] text-[#0a1c32] px-3 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">
                {current.designation.tag} ({current.designation.hindi})
              </div>
              <p className="text-xs text-gray-400">{current.boardRole}</p>
            </div>
          </div>

          {/* Message Content Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ffdf9e]">
                  Leadership Perspective
                </span>
                <span className="text-xs text-gray-400">चौधरी गुलाब सिंह महाविद्यालय</span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {current.designation.hindi} का संदेश
              </h4>
              <p className="text-sm sm:text-base text-gray-300 mb-6 italic">
                {current.subtitle.english}
              </p>

              {/* Quotation Box */}
              <div className="relative bg-[#0a1c32]/80 border-l-4 border-[#d5ad55] p-5 sm:p-6 rounded-r-xl shadow-inner mb-6">
                <Quote className="w-8 h-8 text-[#d5ad55] mb-2 opacity-80" />
                <p className="font-hindi text-base sm:text-lg text-[#fafaf7] leading-relaxed font-normal">
                  {current.quote}
                </p>
              </div>

              {/* Overview */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {current.overview}
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.keyPillars.slice(0, 2).map((pillar, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-white/5 p-3 rounded-lg border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d5ad55] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-white">{pillar.title}</p>
                      <p className="text-[11px] text-gray-300">{pillar.hindiTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Read Full Message CTA */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href={current.route}
                className="inline-flex items-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-sm px-6 py-2.5 rounded shadow transition-all duration-200 group"
              >
                <span>Read Full Message (विस्तृत संदेश पढ़ें)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/our-team"
                className="text-xs text-gray-300 hover:text-white underline hidden sm:inline"
              >
                View all leadership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
