import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Heart,
  Sparkles,
  Award,
  ArrowRight,
  Compass,
  Users,
  Target,
  Eye,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FacilityCard from "@/components/home/FacilityCard";
import ManagementProfileCard from "@/components/team/ManagementProfileCard";
import { COLLEGE_INFO } from "@/data/college";
import { FACILITIES_DATA } from "@/data/facilities";
import { MANAGEMENT_LIST } from "@/data/management";

export const metadata: Metadata = {
  title: "About Us | परिचय एवं उद्देश्य",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय, मानिकपुर, सादाबाद (हाथरस) का परिचय, विजन, मिशन, शैक्षणिक दर्शन एवं सुविधाएं। राजा महेंद्र प्रताप सिंह राज्य विश्वविद्यालय से संबद्ध।",
};

export default function AboutUsPage() {
  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Page Hero */}
      <PageHero
        badge="ABOUT OUR INSTITUTION"
        hindiTitle="संस्थान परिचय, दृष्टिकोण एवं शैक्षणिक मूल्य"
        englishTitle="An Institution with a Purpose"
        description="Empowering the youth of Sadabad and Hathras with disciplined higher education, ethical foundations, and practical learning resources."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 1. Who We Are Section */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#123b70] bg-[#e6eeff] px-3.5 py-1 rounded inline-block mb-3 border border-[#c3c6d1]/40">
                WHO WE ARE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002550] leading-tight mb-2">
                Rooted in Values, Aiming for Excellence
              </h2>
              <p className="font-hindi text-lg sm:text-xl text-[#4f5f78] mb-4">
                संस्कार, अनुशासन और आधुनिक ज्ञान की त्रिवेणी
              </p>
              <div className="w-20 h-1 bg-[#d5ad55] rounded-full mb-6" />
            </div>

            <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
              <strong>चौधरी गुलाब सिंह महाविद्यालय</strong> मानिकपुर (सादाबाद, हाथरस) में
              स्थित एक अग्रणी उच्च शिक्षण संस्थान है। यह संस्थान <strong>राजा महेंद्र प्रताप सिंह
              राज्य विश्वविद्यालय, अलीगढ़</strong> से संबद्ध है तथा उत्तर प्रदेश शासन के उच्च
              शिक्षा नियमों के अंतर्गत मान्यता प्राप्त है।
            </p>

            <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
              हमारा मानना है कि ग्रामीण एवं उपनगरीय अंचल में प्रतिभाओं की कोई कमी नहीं है; आवश्यकता
              केवल सही मार्गदर्शन, अनुशासित वातावरण और आधुनिक शैक्षणिक संसाधनों की है। महाविद्यालय
              विद्यार्थियों को कला, विज्ञान और कंप्यूटर शिक्षा के क्षेत्र में सुदृढ़ आधार प्रदान
              करता है।
            </p>

            {/* Verification and Accreditation badge */}
            <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#d5ad55]/40 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#002550]">
                  Statutory & University Standing
                </h4>
                <p className="text-xs text-[#53637d] mt-0.5 leading-snug">
                  {COLLEGE_INFO.recognition.affiliationHindi}। पाठ्यक्रम, परीक्षा एवं उपाधि
                  प्रदान की प्रक्रिया विश्वविद्यालय के आधिकारिक नियमों के अनुसार निष्पादित होती है।
                </p>
              </div>
            </div>
          </div>

          {/* Mosaic Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/images/hero/hero2.jpg"
                alt="CGS Mahavidyalaya Campus Atmosphere"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c32]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-[#d5ad55] font-bold block">
                  CGS Mahavidyalaya
                </span>
                <p className="font-hindi text-sm font-medium">
                  मानिकपुर, सादाबाद (हाथरस)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision, Mission & Goals Deep Dive */}
      <section className="w-full py-16 sm:py-24 bg-[#eff4ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="INSTITUTIONAL CORE"
            title="Our Vision & Mission"
            hindiTitle="हमारा दृष्टिकोण एवं ध्येय"
            description="हम किन सिद्धांतों और लक्ष्यों को लेकर अग्रसर हैं, इसका विस्तृत विवरण।"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vision Box */}
            <div className="bg-white p-8 rounded-2xl border border-[#c3c6d1]/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-[#d5ad55]" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#002550] mb-2">
                  Our Vision (हमारा दृष्टिकोण)
                </h3>
                <p className="font-hindi text-sm text-[#123b70] font-semibold mb-4">
                  उज्ज्वल भविष्य, अनुशासित व्यक्तित्व
                </p>
                <p className="text-sm text-[#43474f] leading-relaxed mb-6">
                  एक ऐसा समावेशी और गुणवत्तापूर्ण शैक्षणिक केंद्र बनना जो ग्रामीण एवं उपनगरीय क्षेत्र
                  के प्रत्येक विद्यार्थी को सशक्त, आत्मविश्वासी और नैतिक रूप से परिपक्व नागरिक बना
                  सके।
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#121c2a] border-t border-gray-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d5ad55]" />
                  <span>सुलभ एवं समान उच्च शिक्षा के अवसर</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d5ad55]" />
                  <span>21वीं सदी की तकनीकी व डिजिटल साक्षरता</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d5ad55]" />
                  <span>चरित्र निर्माण एवं राष्ट्रीय एकता की भावना</span>
                </li>
              </ul>
            </div>

            {/* Mission Box */}
            <div className="bg-white p-8 rounded-2xl border border-[#c3c6d1]/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-[#d5ad55]" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#002550] mb-2">
                  Our Mission (हमारा ध्येय)
                </h3>
                <p className="font-hindi text-sm text-[#123b70] font-semibold mb-4">
                  लक्ष्य-उन्मुख शैक्षणिक समर्पण
                </p>
                <p className="text-sm text-[#43474f] leading-relaxed mb-6">
                  विद्यार्थियों को समर्पित संकाय, आधुनिक लैब्स, समृद्ध वाचनालय और सुव्यवस्थित
                  कक्षाओं के माध्यम से एक ऐसा प्रेरक वातावरण प्रदान करना जहाँ सीखना आनंददायक और
                  करियर-उन्मुख हो।
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#121c2a] border-t border-gray-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d5ad55]" />
                  <span>नियमित व अनुशासनबद्ध अध्यापन एवं मूल्यांकन</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d5ad55]" />
                  <span>छात्राओं की उच्च शिक्षा एवं सुरक्षा को सर्वोच्च प्राथमिकता</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d5ad55]" />
                  <span>प्रतियोगी परीक्षाओं एवं भविष्य के लिए करियर परामर्श</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4 Pillars of Institutional Goals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#c3c6d1]/40 text-center">
              <BookOpen className="w-8 h-8 text-[#d5ad55] mx-auto mb-3" />
              <h4 className="font-serif font-bold text-base text-[#002550] mb-1">
                Meaningful Learning
              </h4>
              <p className="font-hindi text-xs text-[#123b70] font-medium mb-2">
                सार्थक एवं व्यावहारिक अध्ययन
              </p>
              <p className="text-xs text-[#43474f]">
                किताबी सिद्धांतों को वास्तविक जीवन के उदाहरणों और व्यावहारिक प्रयोगों से जोड़ना।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#c3c6d1]/40 text-center">
              <Users className="w-8 h-8 text-[#d5ad55] mx-auto mb-3" />
              <h4 className="font-serif font-bold text-base text-[#002550] mb-1">
                Personal Development
              </h4>
              <p className="font-hindi text-xs text-[#123b70] font-medium mb-2">
                व्यक्तित्व का सर्वांगीण विकास
              </p>
              <p className="text-xs text-[#43474f]">
                संवाद कौशल, मंच प्रस्तुति और खेलकूद के माध्यम से आत्मविश्वास का संचार।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#c3c6d1]/40 text-center">
              <Sparkles className="w-8 h-8 text-[#d5ad55] mx-auto mb-3" />
              <h4 className="font-serif font-bold text-base text-[#002550] mb-1">
                Practical Understanding
              </h4>
              <p className="font-hindi text-xs text-[#123b70] font-medium mb-2">
                प्रायोगिक समझ व दक्षता
              </p>
              <p className="text-xs text-[#43474f]">
                कंप्यूटर एवं प्रयोगशाला कार्य के माध्यम से तकनीकी कौशल सुदृढ़ करना।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#c3c6d1]/40 text-center">
              <Compass className="w-8 h-8 text-[#d5ad55] mx-auto mb-3" />
              <h4 className="font-serif font-bold text-base text-[#002550] mb-1">
                Future Readiness
              </h4>
              <p className="font-hindi text-xs text-[#123b70] font-medium mb-2">
                भविष्य की तैयारी
              </p>
              <p className="text-xs text-[#43474f]">
                स्नातक के पश्चात विभिन्न प्रतियोगी परीक्षाओं और आजीविका हेतु मार्गदर्शन।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Educational Philosophy: "Education Beyond the Classroom" */}
      <section className="w-full py-16 sm:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="PEDAGOGY"
            title="Education Beyond the Classroom"
            hindiTitle="कक्षा की दीवारों से परे — जीवन का सच्चा पाठ"
            description="हमारा शैक्षणिक दर्शन तीन प्रमुख स्तंभों पर आधारित है: ज्ञान, संस्कार और अवसर।"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-t-4 border-[#002550] border-x border-b border-[#c3c6d1]/50 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl font-serif font-bold text-[#d5ad55] block mb-2">01</span>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-1">
                ज्ञान / Knowledge
              </h3>
              <p className="font-hindi text-xs text-[#737780] mb-4 uppercase tracking-wider">
                Bilingual Academic Depth
              </p>
              <p className="text-sm text-[#43474f] leading-relaxed">
                विषय के मूल सिद्धांतों की गहरी समझ, नियमित कक्षाएँ और विश्लेषणात्मक चिंतन। छात्रों
                को रटने के स्थान पर समझने के लिए प्रेरित किया जाता है।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-t-4 border-[#d5ad55] border-x border-b border-[#c3c6d1]/50 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl font-serif font-bold text-[#d5ad55] block mb-2">02</span>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-1">
                संस्कार / Values
              </h3>
              <p className="font-hindi text-xs text-[#737780] mb-4 uppercase tracking-wider">
                Ethical Grounding & Discipline
              </p>
              <p className="text-sm text-[#43474f] leading-relaxed">
                बड़ों के प्रति सम्मान, सत्यवादिता, अनुशासन और सामाजिक उत्तरदायित्व। चरित्रवान
                विद्यार्थी ही आगे चलकर परिवार और राष्ट्र का गौरव बनते हैं।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-t-4 border-[#123b70] border-x border-b border-[#c3c6d1]/50 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl font-serif font-bold text-[#d5ad55] block mb-2">03</span>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-1">
                अवसर / Opportunity
              </h3>
              <p className="font-hindi text-xs text-[#737780] mb-4 uppercase tracking-wider">
                Equal Platform to Excel
              </p>
              <p className="text-sm text-[#43474f] leading-relaxed">
                खेलकूद, सांस्कृतिक संध्या, वाद-विवाद और संगोष्ठियों में प्रतिभाग करने का खुला मंच,
                ताकि हर छात्र अपनी सुप्त प्रतिभा को पहचान कर निखार सके।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Campus Facilities Section Anchor */}
      <section id="facilities" className="w-full py-16 sm:py-24 bg-[#eff4ff] scroll-mt-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="CAMPUS INFRASTRUCTURE"
            title="Campus Facilities & Learning Spaces"
            hindiTitle="अध्ययन एवं विकास के लिए समर्पित सुविधाएं"
            description="हमारे संस्थान में उपलब्ध प्रमुख शैक्षणिक एवं भौतिक संसाधन।"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES_DATA.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Management Leadership Profiles */}
      <section className="w-full py-16 sm:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="GOVERNANCE"
            title="Our Leadership"
            hindiTitle="हमारा प्रशासनिक एवं शैक्षणिक प्रबंधन"
            description="संस्थान के कुशल संचालन और विद्यार्थियों के मार्गदर्शन हेतु समर्पित नेतृत्व।"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MANAGEMENT_LIST.map((member) => (
              <ManagementProfileCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Banner */}
      <section className="w-full bg-[#0a1c32] text-white py-16 sm:py-20 border-t-4 border-[#d5ad55]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d5ad55] bg-[#123b70] px-4 py-1.5 rounded-full inline-block">
            BUILDING A BETTER TOMORROW
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Ready to Begin Your Educational Journey?
          </h2>
          <p className="font-hindi text-lg sm:text-xl text-[#ffdf9e]">
            चौधरी गुलाब सिंह महाविद्यालय परिवार में आपका हार्दिक स्वागत है।
          </p>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            प्रवेश प्रक्रिया, शुल्क संरचना और उपलब्ध पाठ्यक्रमों के संबंध में प्रत्यक्ष जानकारी
            के लिए हमारे कार्यालय में पधारें या संपर्क करें।
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-sm px-7 py-3.5 rounded-lg shadow-lg transition-colors"
            >
              <span>Contact Admissions Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COLLEGE_INFO.contact.phoneTel}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium text-sm px-6 py-3.5 rounded-lg transition-colors"
            >
              <span>Call Helpline: {COLLEGE_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
