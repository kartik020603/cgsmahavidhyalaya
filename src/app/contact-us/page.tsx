import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ExternalLink,
  ShieldCheck,
  Building,
  GraduationCap,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import FAQAccordion from "@/components/contact/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { COLLEGE_INFO, getWhatsAppUrl } from "@/data/college";
import { MANAGEMENT_LIST } from "@/data/management";

export const metadata: Metadata = {
  title: "Contact Us | संपर्क करें एवं प्रवेश पूछताछ",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय, मानिकपुर, सादाबाद (हाथरस) से संपर्क करें — हेल्पलाइन: +91 9219707070, व्हाट्सएप पूछताछ, गूगल मैप्स दिशा-निर्देश एवं प्रवेश परामर्श।",
};

export default function ContactUsPage() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Page Hero */}
      <PageHero
        badge="GET IN TOUCH"
        hindiTitle="संपर्क सूत्र, स्थान एवं प्रवेश सहायता केंद्र"
        englishTitle="Let’s Connect."
        description="Whether you have questions about admissions, academic programs, or visiting our campus, our administrative team is here to assist you."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* 1. Quick Contact Cards Row */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone Helpline */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c3c6d1]/60 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d5ad55] bg-[#002550] px-2.5 py-0.5 rounded inline-block mb-2">
                OFFICIAL HELPLINE
              </span>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-1">
                Call Us Directly
              </h3>
              <p className="font-hindi text-xs text-[#737780] mb-4">
                कार्यालय समय में सीधे बात करें
              </p>
              <a
                href={COLLEGE_INFO.contact.phoneTel}
                className="font-serif text-2xl font-bold text-[#123b70] hover:text-[#002550] block mb-2"
              >
                {COLLEGE_INFO.contact.phoneDisplay}
              </a>
              <p className="text-xs text-[#53637d]">
                {COLLEGE_INFO.contact.workingHoursHindi}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <a
                href={COLLEGE_INFO.contact.phoneTel}
                className="text-xs font-bold text-[#002550] hover:text-[#123b70] flex items-center gap-1.5"
              >
                <span>Make a Phone Call Now →</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c3c6d1]/60 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center mb-4 shadow-sm">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#25D366] px-2.5 py-0.5 rounded inline-block mb-2">
                INSTANT MESSAGING
              </span>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-1">
                WhatsApp Enquiry
              </h3>
              <p className="font-hindi text-xs text-[#737780] mb-4">
                व्हाट्सएप पर तुरंत पूछताछ संदेश भेजें
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl font-bold text-[#25D366] hover:text-[#1ebd59] block mb-2"
              >
                {COLLEGE_INFO.contact.phoneDisplay}
              </a>
              <p className="text-xs text-[#53637d]">
                प्रवेश प्रक्रिया व पाठ्यक्रमों की त्वरित जानकारी
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#25D366] hover:text-[#1ebd59] flex items-center gap-1.5"
              >
                <span>Chat on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Card 3: Physical Address */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c3c6d1]/60 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#002550] text-[#ffdf9e] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#d5ad55]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d5ad55] bg-[#002550] px-2.5 py-0.5 rounded inline-block mb-2">
                CAMPUS LOCATION
              </span>
              <h3 className="font-serif font-bold text-xl text-[#002550] mb-1">
                Visit Our Campus
              </h3>
              <p className="font-hindi text-xs text-[#737780] mb-3">
                संस्थान में व्यक्तिगत परामर्श हेतु पधारें
              </p>
              <p className="font-hindi text-sm font-semibold text-[#121c2a] leading-relaxed mb-1">
                {COLLEGE_INFO.location.hindi}
              </p>
              <p className="text-xs text-[#53637d]">
                {COLLEGE_INFO.location.english}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <a
                href={COLLEGE_INFO.location.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#002550] hover:text-[#123b70] flex items-center gap-1.5"
              >
                <span>Get Google Maps Directions →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Form & Location Grid */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Enquiry Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Interactive Map & Logistics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c3c6d1]/60 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-[#123b70] bg-[#e6eeff] px-3 py-1 rounded inline-block mb-2">
                CAMPUS MAP & ACCESS
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#002550] mb-1">
                Find Us / हमारा स्थान
              </h3>
              <p className="text-xs text-[#43474f] mb-4">
                मानिकपुर, सादाबाद (हाथरस, उत्तर प्रदेश)
              </p>

              {/* Map Embed Container */}
              <div className="relative w-full h-72 rounded-xl overflow-hidden border border-[#c3c6d1] shadow-inner mb-4">
                <iframe
                  title="CGS Mahavidyalaya Location Map"
                  src={COLLEGE_INFO.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="space-y-3 text-xs text-[#43474f]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#d5ad55] shrink-0 mt-0.5" />
                  <span>
                    <strong>सड़क मार्ग से सुगम:</strong> सादाबाद बस स्टैंड व मुख्य मार्ग से
                    मानिकपुर की दूरी लगभग 10-15 मिनट है।
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#d5ad55] shrink-0 mt-0.5" />
                  <span>
                    <strong>कार्यालय समय:</strong> {COLLEGE_INFO.contact.workingHoursHindi}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100">
                <a
                  href={COLLEGE_INFO.location.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#002550] hover:text-[#123b70]"
                >
                  <span>Open Full Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#d5ad55]" />
                </a>
              </div>
            </div>

            {/* Management Contacts Box */}
            <div className="bg-[#002550] text-white rounded-2xl p-6 sm:p-8 border-2 border-[#d5ad55] shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d5ad55] block mb-2">
                ADMINISTRATIVE STEWARDSHIP
              </span>
              <h3 className="font-serif font-bold text-xl text-white mb-2">
                प्रबंधन एवं प्रशासनिक नेतृत्व
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                संस्थान के प्रमुख नेतृत्व से विचार एवं मार्गदर्शन प्राप्त करने के लिए:
              </p>

              <div className="space-y-3">
                {MANAGEMENT_LIST.map((m) => (
                  <Link
                    key={m.id}
                    href={m.route}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <div>
                      <p className="text-xs font-bold text-white">{m.name.hindi}</p>
                      <p className="text-[11px] text-[#ffdf9e]">{m.designation.hindi}</p>
                    </div>
                    <span className="text-[11px] text-gray-300 underline">
                      संदेश पढ़ें →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Section */}
      <section className="w-full py-16 sm:py-24 bg-[#eff4ff] border-t border-[#c3c6d1]/40">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="COMMON QUERIES"
            title="Frequently Asked Questions"
            hindiTitle="अक्सर पूछे जाने वाले प्रश्न एवं उत्तर"
            description="प्रवेश, मान्यता, सुविधाओं और संपर्क के संबंध में सामान्य प्रश्नों के समाधान।"
          />

          <FAQAccordion />
        </div>
      </section>

      {/* 4. Bottom Motivational CTA Banner */}
      <section className="w-full bg-[#0a1c32] text-white py-16 border-t-4 border-[#d5ad55]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
            Every Great Journey Begins With a Conversation.
          </h3>
          <p className="font-hindi text-base sm:text-lg text-[#ffdf9e]">
            आइए, अपने उज्ज्वल भविष्य की दिशा में पहला कदम बढ़ाएं।
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={COLLEGE_INFO.contact.phoneTel}
              className="inline-flex items-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-sm px-6 py-3 rounded-lg shadow transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91 9219707070</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
