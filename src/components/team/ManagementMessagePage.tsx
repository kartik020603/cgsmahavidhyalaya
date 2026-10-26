import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Building,
  GraduationCap,
  Calendar,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { ManagementMember, MANAGEMENT_LIST } from "@/data/management";
import { COLLEGE_INFO } from "@/data/college";

interface ManagementMessagePageProps {
  member: ManagementMember;
}

export default function ManagementMessagePage({ member }: ManagementMessagePageProps) {
  // Find other members for switcher/recommendations
  const otherMembers = MANAGEMENT_LIST.filter((m) => m.id !== member.id);

  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Page Hero */}
      <PageHero
        badge={member.designation.tag}
        hindiTitle={`${member.name.hindi} (${member.designation.hindi}) का संदेश`}
        englishTitle={`${member.name.english} — ${member.designation.english}`}
        description={member.subtitle.english}
        breadcrumbs={[
          { label: "Our Team", href: "/our-team" },
          { label: member.name.english },
        ]}
      />

      {/* Main Content Section */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Profile Dossier (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#c3c6d1]/60 shadow-lg p-6 text-center">
              <div className="relative w-48 sm:w-56 aspect-square mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-[#d5ad55]/40 mb-5">
                <Image
                  src={member.image}
                  alt={`${member.name.english} - ${member.designation.english}`}
                  fill
                  sizes="224px"
                  priority
                  className="object-cover object-top"
                />
              </div>

              <h2 className="font-serif font-bold text-2xl text-[#002550] mb-1">
                {member.name.english}
              </h2>
              <p className="font-hindi text-base text-[#4f5f78] mb-2 font-medium">
                {member.name.hindi}
              </p>

              <div className="inline-block bg-[#002550] text-[#ffdf9e] px-4 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
                {member.designation.english} ({member.designation.hindi})
              </div>

              <p className="text-xs text-[#737780] border-t border-gray-100 pt-3">
                {member.boardRole}
              </p>
              <p className="text-xs text-[#123b70] font-semibold mt-1">
                {COLLEGE_INFO.name.english}
              </p>

              {/* Verified Institutional Statement Note */}
              <div className="mt-4 p-3 bg-[#eff4ff] rounded-lg border border-[#c3c6d1]/40 text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#002550] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#d5ad55]" />
                  <span>Institutional Message Note</span>
                </div>
                <p className="text-[11px] text-[#43474f] leading-snug">
                  यह संदेश संस्थान के नीतिगत मूल्यों एवं मार्गदर्शन हेतु आधिकारिक रूप से संकलित
                  है।
                </p>
              </div>
            </div>

            {/* Quick Navigation to Other Leaders */}
            <div className="bg-white rounded-2xl p-6 border border-[#c3c6d1]/60 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-base text-[#002550] border-b border-gray-100 pb-2">
                Other Leadership Messages
              </h3>
              <div className="space-y-3">
                {otherMembers.map((other) => (
                  <Link
                    key={other.id}
                    href={other.route}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#f8f9ff] border border-transparent hover:border-[#d5ad55]/40 transition-all group"
                  >
                    <div className="w-10 h-10 relative rounded-full overflow-hidden border border-[#d5ad55]/40 shrink-0">
                      <Image
                        src={other.image}
                        alt={other.name.english}
                        fill
                        sizes="40px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#002550] group-hover:text-[#123b70]">
                        {other.name.english}
                      </p>
                      <p className="text-[11px] text-[#737780] font-hindi">
                        {other.designation.hindi} का संदेश
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Message (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Featured Quote Banner */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border-l-8 border-[#d5ad55] border-t border-r border-b border-[#c3c6d1]/50 shadow-md relative">
              <Quote className="w-12 h-12 text-[#d5ad55] opacity-50 mb-3" />
              <blockquote className="font-hindi text-lg sm:text-2xl text-[#002550] font-normal leading-relaxed mb-4">
                {member.quote}
              </blockquote>
              <div className="flex items-center justify-between text-xs sm:text-sm text-[#737780] pt-4 border-t border-gray-100">
                <span className="font-semibold text-[#123b70]">
                  — {member.name.hindi} ({member.designation.hindi})
                </span>
                <span className="font-hindi text-xs">{COLLEGE_INFO.location.hindi}</span>
              </div>
            </div>

            {/* Full Message Paragraphs */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#c3c6d1]/50 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#002550]">
                  मार्गदर्शन एवं विचार
                </h3>
                <p className="font-hindi text-sm text-[#4f5f78] mt-1">
                  विद्यार्थियों, अभिभावकों एवं समाज के नाम संबोधन
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#121c2a] leading-relaxed font-normal">
                {member.fullMessage.map((paragraph, index) => (
                  <p key={index} className="font-hindi text-base sm:text-lg text-[#121c2a] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature / Authority endorsement */}
              <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif font-bold text-lg text-[#002550]">
                    {member.name.english}
                  </p>
                  <p className="font-hindi text-xs text-[#737780]">
                    {member.name.hindi} • {member.designation.hindi}
                  </p>
                  <p className="text-[11px] text-[#737780]">{COLLEGE_INFO.name.english}</p>
                </div>

                <div className="px-4 py-2 rounded-lg bg-[#f8f9ff] border border-[#d5ad55]/40 text-center">
                  <span className="text-[11px] font-mono text-[#002550] block font-bold">
                    [Approved Institutional Statement]
                  </span>
                  <span className="text-[10px] text-[#737780]">CGS Management Office</span>
                </div>
              </div>
            </div>

            {/* Key Focus Pillars */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#002550]">
                Key Academic & Leadership Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {member.keyPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-[#c3c6d1]/50 shadow-sm hover:border-[#d5ad55] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-3">
                      <CheckCircle className="w-4 h-4 text-[#d5ad55]" />
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#002550] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="font-hindi text-xs text-[#123b70] font-medium mb-1">
                      {pillar.hindiTitle}
                    </p>
                    <p className="text-xs text-[#43474f] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Back to Team Link */}
            <div className="flex items-center justify-between pt-4">
              <Link
                href="/our-team"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#123b70] hover:text-[#002550] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Leadership (वापस नेतृत्व सूची पर)</span>
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded shadow transition-colors"
              >
                <span>Admissions Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
