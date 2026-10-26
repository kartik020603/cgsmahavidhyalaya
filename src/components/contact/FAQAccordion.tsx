"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  hindiQuestion: string;
  answer: string;
  hindiAnswer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "affiliation",
    question: "Is CGS Mahavidyalaya affiliated with a recognized university?",
    hindiQuestion: "क्या चौधरी गुलाब सिंह महाविद्यालय किसी मान्यता प्राप्त विश्वविद्यालय से संबद्ध है?",
    answer: "Yes, CGS Mahavidyalaya is affiliated to Raja Mahendra Pratap Singh State University, Aligarh, and is duly approved and recognized by the Government of Uttar Pradesh and Higher Education Directorate.",
    hindiAnswer: "हाँ, चौधरी गुलाब सिंह महाविद्यालय राजा महेंद्र प्रताप सिंह राज्य विश्वविद्यालय, अलीगढ़ से संबद्ध है और उत्तर प्रदेश शासन एवं उच्च शिक्षा विभाग द्वारा विधिवत मान्यता प्राप्त है।",
  },
  {
    id: "admissions",
    question: "What is the admission procedure and criteria for session 2025-26?",
    hindiQuestion: "सत्र 2025-26 के लिए प्रवेश प्रक्रिया और योग्यता क्या है?",
    answer: "Admissions follow the academic eligibility criteria laid down by RMPS State University and the UP Higher Education Department. Students may obtain application forms directly from the college administrative office in Manikpur, Sadabad, or enquire via phone/WhatsApp.",
    hindiAnswer: "प्रवेश विश्वविद्यालय के नियमों एवं अर्हतानुसार संपन्न होते हैं। विद्यार्थी मानिकपुर (सादाबाद) स्थित महाविद्यालय प्रशासनिक कार्यालय से सीधे प्रवेश फॉर्म प्राप्त कर सकते हैं अथवा हमारे आधिकारिक नंबर +91 9219707070 पर परामर्श ले सकते हैं।",
  },
  {
    id: "facilities",
    question: "What facilities are available on campus for students?",
    hindiQuestion: "महाविद्यालय परिसर में विद्यार्थियों के लिए क्या-क्या सुविधाएँ उपलब्ध हैं?",
    answer: "The college campus features a modern computer lab, fully stocked central library, spacious lecture halls, science experimental laboratories, athletic sports ground, seminar auditorium, and clean drinking water facilities.",
    hindiAnswer: "परिसर में आधुनिक कंप्यूटर लैब, समृद्ध पुस्तकालय व वाचनालय, विशाल कक्षा कक्ष, विज्ञान प्रायोगिक प्रयोगशाला, खेल मैदान और सभागार की सुव्यवस्थित व्यवस्था है।",
  },
  {
    id: "safety",
    question: "What measures are taken for female student safety and discipline?",
    hindiQuestion: "छात्राओं की सुरक्षा एवं अनुशासित वातावरण के लिए क्या व्यवस्थाएँ हैं?",
    answer: "The college maintains strict campus discipline, CCTV monitoring at key gates, an active Women Empowerment and Grievance Redressal cell, and a welcoming academic environment with zero tolerance for ragging.",
    hindiAnswer: "परिसर में अनुशासित एवं सुरक्षित वातावरण उपलब्ध है। छात्राओं के लिए अलग कॉमन रूम, सीसीटीवी निगरानी और महिला कल्याण परामर्श समिति सक्रिय है। रैगिंग पूर्णतः प्रतिबंधित है।",
  },
  {
    id: "location",
    question: "Where is the college situated and how to reach?",
    hindiQuestion: "महाविद्यालय कहाँ स्थित है और यहाँ कैसे पहुँचा जा सकता है?",
    answer: "The college is situated at Manikpur, Tehsil Sadabad, District Hathras, Uttar Pradesh. It is easily accessible via road transport from Sadabad, Hathras, Agra, Mathura, and Aligarh.",
    hindiAnswer: "महाविद्यालय मानिकपुर, तहसील सादाबाद, जनपद हाथरस (उत्तर प्रदेश) में स्थित है। यह सादाबाद-हाथरस मार्ग से अच्छी तरह जुड़ा हुआ है और स्थानीय परिवहन से सुलभता से पहुंचा जा सकता है।",
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("affiliation");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="bg-white rounded-xl border border-[#c3c6d1]/60 shadow-sm overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#f8f9ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#d5ad55] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#002550] leading-snug">
                    {faq.question}
                  </h3>
                  <p className="font-hindi text-xs sm:text-sm text-[#4f5f78] mt-1 font-medium">
                    {faq.hindiQuestion}
                  </p>
                </div>
              </div>

              <ChevronDown
                className={cn(
                  "w-5 h-5 text-[#737780] shrink-0 transition-transform duration-200",
                  isOpen ? "rotate-180 text-[#d5ad55]" : ""
                )}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#43474f] border-t border-gray-100 bg-[#f8f9ff]/60 leading-relaxed space-y-2 animate-in fade-in duration-150">
                <p className="font-hindi text-sm sm:text-base text-[#121c2a]">
                  {faq.hindiAnswer}
                </p>
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
