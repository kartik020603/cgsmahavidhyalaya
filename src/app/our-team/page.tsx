import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ManagementProfileCard from "@/components/team/ManagementProfileCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { MANAGEMENT_LIST } from "@/data/management";
import { COLLEGE_INFO } from "@/data/college";

export const metadata: Metadata = {
  title: "Our Team & Leadership | प्रबंधन एवं नेतृत्व",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय के सम्मानित प्रबंधन एवं नेतृत्व से मिलें — श्री हरिओम चौधरी (प्रबंधक), श्रीमती रंजनी चौधरी (निदेशक), श्री विराट चौधरी (निदेशक), श्रीमती हिमानी चौधरी (उप-प्राचार्या), श्री नीशू चौधरी (प्रबंध निदेशक)।",
};

export default function OurTeamPage() {
  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Page Hero */}
      <PageHero
        badge="INSTITUTIONAL LEADERSHIP"
        hindiTitle="हमारे मार्गदर्शक एवं प्रबंधन"
        englishTitle="Our Leadership, Our Inspiration"
        description="Meet the dedicated leadership team driving educational transformation, discipline, and community empowerment at CGS Mahavidyalaya, Sadabad."
        breadcrumbs={[{ label: "Our Team" }]}
      />

      {/* Stewardship Intro */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123b70] bg-[#e6eeff] px-3.5 py-1 rounded inline-block border border-[#c3c6d1]/40">
            GOVERNANCE & VALUES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002550]">
            Guided by Integrity, Driven by Excellence
          </h2>
          <p className="font-hindi text-lg sm:text-xl text-[#4f5f78]">
            दूरदर्शी सोच और नैतिक मूल्यों के साथ विद्यार्थियों के उज्ज्वल भविष्य का निर्माण।
          </p>
          <div className="w-20 h-1 bg-[#d5ad55] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#43474f] leading-relaxed pt-2">
            चौधरी गुलाब सिंह महाविद्यालय का नेतृत्व विद्यार्थियों को एक प्रेरक, अनुशासित और
            संसाधन-समृद्ध शैक्षणिक परिवेश प्रदान करने के लिए सदैव तत्पर रहता है। हमारी प्रबंधन
            समिति ग्रामीण प्रतिभाओं को राष्ट्रीय पटल पर पहचान दिलाने हेतु कटिबद्ध है।
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {MANAGEMENT_LIST.map((member) => (
            <ManagementProfileCard key={member.id} member={member} />
          ))}
        </div>

        {/* Core Principles */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white border border-[#c3c6d1]/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#002550] mb-2">
                Visionary Direction
              </h3>
              <p className="font-hindi text-xs text-[#123b70] font-semibold mb-2">
                दूरदर्शी नेतृत्व
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                पारंपरिक ज्ञान और आधुनिक तकनीकों के समन्वय से ग्रामीण युवाओं के लिए उच्च शिक्षा
                के नए द्वार खोलना।
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#c3c6d1]/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#002550] mb-2">
                Value-Driven Pedagogy
              </h3>
              <p className="font-hindi text-xs text-[#123b70] font-semibold mb-2">
                मूल्यपरक शिक्षण
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                शिक्षा में अनुशासन, सत्यनिष्ठा और मानवीय संवेदनाओं को सर्वोपरि स्थान देना।
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#c3c6d1]/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#002550] mb-2">
                Student-Centric Growth
              </h3>
              <p className="font-hindi text-xs text-[#123b70] font-semibold mb-2">
                छात्र-केंद्रित दृष्टिकोण
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                प्रत्येक विद्यार्थी के सर्वांगीण व्यक्तित्व, कला, खेल और बौद्धिक विकास का सतत
                संवर्धन।
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#0a1c32] rounded-2xl p-8 sm:p-12 text-white border-2 border-[#d5ad55] text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
            Have a Question for Our Leadership or Admissions?
          </h3>
          <p className="font-hindi text-base sm:text-lg text-[#ffdf9e] max-w-2xl mx-auto">
            हमारे संस्थान, पाठ्यक्रमों एवं प्रवेश संबंधी किसी भी जानकारी के लिए सीधे संपर्क करें।
          </p>
          <div className="pt-2">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-sm px-7 py-3 rounded-lg shadow transition-colors"
            >
              <span>Contact Admissions Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
