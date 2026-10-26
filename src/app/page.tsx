import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Compass,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Building2,
  Clock,
  MapPin,
} from "lucide-react";
import HeroCarousel from "@/components/home/HeroCarousel";
import VisionGoalsSwitcher from "@/components/home/VisionGoalsSwitcher";
import ManagementMessageSwitcher from "@/components/home/ManagementMessageSwitcher";
import FacilityCard from "@/components/home/FacilityCard";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { COLLEGE_INFO, getWhatsAppUrl } from "@/data/college";
import { FACILITIES_DATA } from "@/data/facilities";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Notice Ticker / Quick statutory banner */}
      <section className="w-full bg-[#e6eeff] text-[#002550] py-3.5 px-4 sm:px-6 border-b border-[#c3c6d1]/50 shadow-sm">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-[#123b70] text-[#ffdf9e] px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider shrink-0">
              सूचना पट्ट (Notice)
            </span>
            <span className="font-hindi font-medium text-[#121c2a]">
              सत्र 2025-26 प्रवेश मार्गदर्शन एवं परामर्श उपलब्ध • संपर्क: +91 9219707070
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#002550]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#d5ad55]" />
              <span>मानिकपुर, सादाबाद</span>
            </span>
            <span className="text-[#c3c6d1]">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d5ad55]" />
              <span>राजा महेंद्र प्रताप सिंह विवि से संबद्ध</span>
            </span>
          </div>
        </div>
      </section>

      {/* 3. College Introduction Section */}
      <section id="college-intro" className="w-full py-16 sm:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/images/hero/hero1.jpg"
                  alt="CGS Mahavidyalaya Main Campus Gate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c32]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#d5ad55] font-bold block">
                    Campus Grounds
                  </span>
                  <p className="font-hindi text-sm font-medium">
                    चौधरी गुलाब सिंह महाविद्यालय, सादाबाद
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#002550] text-white p-5 rounded-2xl shadow-2xl border-2 border-[#d5ad55] max-w-[240px]">
                <GraduationCap className="w-8 h-8 text-[#d5ad55] mb-2" />
                <p className="font-serif font-bold text-xl text-[#ffdf9e]">Higher Education</p>
                <p className="font-hindi text-xs text-gray-300 mt-1">
                  अनुशासित वातावरण एवं मूल्यपरक शिक्षण
                </p>
              </div>
            </div>

            {/* Intro Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#123b70] bg-[#e6eeff] px-3.5 py-1 rounded inline-block mb-3 border border-[#c3c6d1]/40">
                  MANIKPUR, SADABAD (HATHRAS)
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#002550] leading-tight mb-3">
                  चौधरी गुलाब सिंह महाविद्यालय
                </h2>
                <p className="font-hindi text-xl sm:text-2xl font-medium text-[#4f5f78] mb-4">
                  ज्ञान का संवर्धन, समाज का उत्थान।
                </p>
                <div className="w-20 h-1 bg-[#d5ad55] rounded-full mb-6" />
              </div>

              <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                चौधरी गुलाब सिंह महाविद्यालय, मानिकपुर (सादाबाद, हाथरस) ग्रामीण एवं उपनगरीय
                अंचल के युवाओं को उच्च कोटि की शिक्षा प्रदान करने के पावन उद्देश्य से स्थापित एक
                अग्रणी संस्थान है। हमारा उद्देश्य विद्यार्थियों को केवल उपाधियाँ प्रदान करना नहीं,
                अपितु उनके व्यक्तित्व में नैतिक सत्यनिष्ठा, तार्किक सोच और सामाजिक उत्तरदायित्व
                का संचार करना है।
              </p>

              <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                संस्थान <strong>राजा महेंद्र प्रताप सिंह राज्य विश्वविद्यालय, अलीगढ़</strong> से
                संबद्ध है तथा उत्तर प्रदेश शासन के उच्च शिक्षा मानकों के पूर्णतः अनुरूप संचालित
                होता है। आधुनिक कंप्यूटर प्रयोगशाला, समृद्ध पुस्तकालय, विशाल खेल मैदान एवं अनुभवी
                शिक्षकों की देखरेख में छात्र-छात्राएँ अपने सपनों को साकार कर रहे हैं।
              </p>

              {/* Highlights 4-box grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#c3c6d1]/40 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-[#002550]">
                      University Affiliation
                    </h4>
                    <p className="text-xs text-[#53637d]">
                      राजा महेंद्र प्रताप सिंह राज्य विवि, अलीगढ़
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#c3c6d1]/40 shadow-sm">
                  <Award className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-[#002550]">
                      UP Govt. Approved
                    </h4>
                    <p className="text-xs text-[#53637d]">उच्च शिक्षा विभाग द्वारा मान्यता</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#c3c6d1]/40 shadow-sm">
                  <BookOpen className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-[#002550]">
                      Dedicated Faculty
                    </h4>
                    <p className="text-xs text-[#53637d]">अनुभवी एवं समर्पित प्राध्यापक</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#c3c6d1]/40 shadow-sm">
                  <Users className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-[#002550]">
                      Holistic Mentorship
                    </h4>
                    <p className="text-xs text-[#53637d]">व्यक्तित्व विकास एवं मार्गदर्शन</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 bg-[#002550] hover:bg-[#123b70] text-[#ffdf9e] font-semibold text-sm px-6 py-3 rounded-lg shadow-md transition-all group"
                >
                  <span>Know More About Us (विस्तार से जानें)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={COLLEGE_INFO.contact.phoneTel}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#123b70] hover:text-[#002550] px-4 py-3"
                >
                  <Phone className="w-4 h-4 text-[#d5ad55]" />
                  <span>{COLLEGE_INFO.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Vision & Goals Section */}
      <section id="vision-goals" className="w-full py-16 sm:py-24 bg-[#eff4ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="OUR COMMITMENT"
            title="Our Vision & Goals"
            hindiTitle="हमारी सोच, हमारा संकल्प।"
            description="हमारा प्रयास विद्यार्थियों में बौद्धिक जिज्ञासा, अनुशासन और 21वीं सदी की क्षमताओं को विकसित करना है।"
          />

          <VisionGoalsSwitcher />
        </div>
      </section>

      {/* 5. Campus Facilities Section */}
      <section id="college-facilities" className="w-full py-16 sm:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="CAMPUS INFRASTRUCTURE"
            title="Facilities That Support Your Growth"
            hindiTitle="बेहतर सीखने के लिए, बेहतर सुविधाएँ।"
            description="आधुनिक प्रयोगशालाएं, समृद्ध वाचनालय और खुला खेल परिसर — विद्यार्थियों के चौमुखी विकास के लिए अनुकूल वातावरण।"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES_DATA.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about-us#facilities"
              className="inline-flex items-center gap-2 bg-[#123b70] hover:bg-[#002550] text-[#ffdf9e] font-semibold text-sm px-7 py-3.5 rounded-lg shadow-md transition-all duration-200 group"
            >
              <span>Explore All College Facilities (सभी सुविधाएँ देखें)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Management Messages Interactive Switcher */}
      <ManagementMessageSwitcher />

      {/* 7. Why Choose Us Section */}
      <section id="why-choose-us" className="w-full py-16 sm:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="DISTINCT ADVANTAGES"
            title="More Than Education. A Foundation for Life."
            hindiTitle="किताबी ज्ञान के साथ जीवन को समझने की प्रेरणा।"
            description="चौधरी गुलाब सिंह महाविद्यालय क्यों है सादाबाद एवं हाथरस क्षेत्र के विद्यार्थियों की पहली पसंद?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#c3c6d1]/50 shadow-sm hover:shadow-lg hover:border-[#d5ad55] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-2">
                Accessible Location & Peace
              </h3>
              <p className="font-hindi text-sm text-[#4f5f78] mb-3 font-medium">
                सुलभ पहुंच एवं शांत शैक्षणिक वातावरण
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                मानिकपुर, सादाबाद में शोर-शराबे से दूर, अध्ययन के सर्वथा अनुकूल विशाल एवं सुरक्षित
                हरित परिसर।
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#c3c6d1]/50 shadow-sm hover:shadow-lg hover:border-[#d5ad55] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-2">
                Empowerment & Discipline
              </h3>
              <p className="font-hindi text-sm text-[#4f5f78] mb-3 font-medium">
                छात्राओं की सुरक्षा एवं अनुशासित परिसर
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                महिला सशक्तीकरण को प्राथमिकता, सुरक्षा व्यवस्था एवं अनुशासन के कड़े मानकों का
                पालन।
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#c3c6d1]/50 shadow-sm hover:shadow-lg hover:border-[#d5ad55] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-2">
                Practical Computer Education
              </h3>
              <p className="font-hindi text-sm text-[#4f5f78] mb-3 font-medium">
                व्यावहारिक कंप्यूटर एवं डिजिटल शिक्षा
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                प्रत्येक विद्यार्थी को बुनियादी से लेकर आधुनिक तकनीकी ज्ञान प्रदान करने के लिए
                सुसज्जित कंप्यूटर लैब।
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#c3c6d1]/50 shadow-sm hover:shadow-lg hover:border-[#d5ad55] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-2">
                Approachable Mentors
              </h3>
              <p className="font-hindi text-sm text-[#4f5f78] mb-3 font-medium">
                सुयोग्य एवं सहयोगात्मक शिक्षक
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                कक्षा में प्रत्येक विद्यार्थी पर व्यक्तिगत ध्यान, नियमित संशय निवारण और निरंतर
                प्रोत्साहन।
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#c3c6d1]/50 shadow-sm hover:shadow-lg hover:border-[#d5ad55] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-2">
                State University Curriculum
              </h3>
              <p className="font-hindi text-sm text-[#4f5f78] mb-3 font-medium">
                विश्वविद्यालयी मानक एवं समयबद्ध सत्र
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                राजा महेंद्र प्रताप सिंह राज्य विश्वविद्यालय के शैक्षणिक कैलेंडर के अनुरूप समय पर
                परीक्षा एवं परिणाम।
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#c3c6d1]/50 shadow-sm hover:shadow-lg hover:border-[#d5ad55] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-2">
                Career Guidance Cell
              </h3>
              <p className="font-hindi text-sm text-[#4f5f78] mb-3 font-medium">
                करियर परामर्श एवं भविष्य निर्माण
              </p>
              <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                स्नातक के पश्चात विभिन्न प्रतियोगी परीक्षाओं और स्वरोजगार के अवसरों के लिए
                विशेष मार्गदर्शन।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Photo Gallery Preview */}
      <section id="photo-gallery" className="w-full py-16 sm:py-24 bg-[#eff4ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#123b70] bg-[#e6eeff] px-3.5 py-1 rounded inline-block mb-3 border border-[#c3c6d1]/40">
                CAMPUS CHRONICLES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#002550] mb-2">
                Life at CGS Mahavidyalaya
              </h2>
              <p className="font-hindi text-lg sm:text-xl text-[#4f5f78]">
                यादें, गतिविधियाँ और हमारे संस्थान की झलकियाँ।
              </p>
            </div>

            <Link
              href="/photo-gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#002550] hover:text-[#123b70] transition-colors group"
            >
              <span>View All Photos (पूरी गैलरी देखें)</span>
              <ArrowRight className="w-4 h-4 text-[#d5ad55] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <GalleryGrid limit={6} showFilters={false} />
        </div>
      </section>

      {/* 9. Student Inspiration Banner */}
      <section className="w-full bg-[#0a1c32] text-white py-20 relative overflow-hidden border-y-4 border-[#d5ad55]">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#d5ad55 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d5ad55] bg-[#123b70] px-4 py-1.5 rounded-full inline-block">
            INSPIRING TOMORROW
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Your Future Begins With What You Learn Today.
          </h2>

          <p className="font-hindi text-xl sm:text-2xl text-[#ffdf9e]">
            अपने सपनों को दिशा दें, अपने भविष्य को नई उड़ान दें।
          </p>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            चौधरी गुलाब सिंह महाविद्यालय में हम एक ऐसा वातावरण तैयार करते हैं जहाँ हर
            विद्यार्थी आत्मविश्वास से आगे बढ़ सके। आइए और हमारे प्रेरणादायी शैक्षणिक परिवार का
            हिस्सा बनें।
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 group"
            >
              <span>Apply for Admission (प्रवेश परामर्श लें)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. Quick Contact & Campus Visit CTA */}
      <section id="quick-contact" className="w-full py-16 sm:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-[#c3c6d1]/60 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#123b70] bg-[#e6eeff] px-3.5 py-1 rounded inline-block">
                WE ARE HERE FOR YOU
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002550]">
                Have Questions? We&apos;re Here to Help.
              </h2>
              <p className="font-hindi text-base sm:text-lg text-[#4f5f78]">
                प्रवेश, पाठ्यक्रम एवं संस्थान संबंधी किसी भी जानकारी के लिए संपर्क करें।
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#002550]">College Campus Address</h4>
                    <p className="text-xs sm:text-sm text-[#43474f]">
                      {COLLEGE_INFO.location.hindi} ({COLLEGE_INFO.location.english})
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#002550]">Official Helpline Number</h4>
                    <a
                      href={COLLEGE_INFO.contact.phoneTel}
                      className="text-xs sm:text-sm font-semibold text-[#123b70] hover:underline"
                    >
                      {COLLEGE_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#002550]">Office Timings</h4>
                    <p className="text-xs sm:text-sm text-[#43474f]">
                      {COLLEGE_INFO.contact.workingHoursHindi}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#002550] hover:bg-[#123b70] text-[#ffdf9e] font-semibold text-sm px-6 py-3 rounded-lg shadow transition-colors"
                >
                  <span>Go to Contact Page (पूछताछ प्रपत्र)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={COLLEGE_INFO.contact.phoneTel}
                  className="inline-flex items-center gap-2 bg-[#e6eeff] text-[#002550] hover:bg-[#d0e1ff] font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d5ad55]" />
                  <span>Call +91 9219707070</span>
                </a>
              </div>
            </div>

            {/* Right Map Image / Directions */}
            <div className="lg:col-span-5 bg-[#0a1c32] p-8 sm:p-12 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d5ad55]">
                  LOCATION MAP
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Visit Our Campus
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  चौधरी गुलाब सिंह महाविद्यालय सादाबाद एवं हाथरस क्षेत्र से आसानी से जुड़ा हुआ
                  है। आप किसी भी कार्यदिवस में परिसर का भ्रमण कर सकते हैं।
                </p>
              </div>

              <div className="my-6 p-4 rounded-xl bg-white/10 border border-white/20">
                <p className="text-xs font-bold text-[#ffdf9e] mb-1">
                  How to Reach Manikpur, Sadabad:
                </p>
                <p className="text-xs text-gray-300">
                  सादाबाद-हाथरस मुख्य मार्ग से मानिकपुर के लिए सुगम ऑटो व बस सेवा उपलब्ध है।
                </p>
              </div>

              <a
                href={COLLEGE_INFO.location.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-sm py-3 px-6 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
