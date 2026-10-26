"use client";

import { useState } from "react";
import { Eye, Target, Compass, Sparkles, BookOpen, Heart, Award, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type TabKey = "vision" | "goals" | "values";

interface TabContent {
  id: TabKey;
  label: string;
  hindiLabel: string;
  icon: any;
  title: string;
  hindiTitle: string;
  statement: string;
  points: {
    title: string;
    description: string;
    icon: any;
  }[];
}

const TABS: TabContent[] = [
  {
    id: "vision",
    label: "Our Vision",
    hindiLabel: "हमारा दृष्टिकोण",
    icon: Eye,
    title: "Nurturing Stately Excellence & Integrity",
    hindiTitle: "ज्ञान का विस्तार, चरित्र का निर्माण और समाज का उत्थान",
    statement:
      "चौधरी गुलाब सिंह महाविद्यालय का दृष्टिकोण ग्रामीण एवं उपनगरीय अंचल में एक ऐसा ज्ञान केंद्र स्थापित करना है जहां प्रत्येक विद्यार्थी को उच्च गुणवत्ता की शिक्षा, आधुनिक तकनीकी प्रशिक्षण और जीवन मूल्यों का संतुलित समन्वय प्राप्त हो।",
    points: [
      {
        title: "Inclusive Higher Education",
        description: "ग्रामीण पृष्ठभूमि के प्रत्येक छात्र-छात्रा को बिना किसी भेदभाव के उच्च शिक्षा के समान अवसर।",
        icon: BookOpen,
      },
      {
        title: "Character & Ethical Foundation",
        description: "किताबी ज्ञान के साथ-साथ संस्कार, विनम्रता और राष्ट्रीय चेतना का विकास।",
        icon: Heart,
      },
      {
        title: "Future-Ready Knowledge",
        description: "पारंपरिक पाठ्यक्रमों के साथ कंप्यूटर साक्षरता और व्यावहारिक दक्षताओं का समावेश।",
        icon: Sparkles,
      },
    ],
  },
  {
    id: "goals",
    label: "Institutional Goals",
    hindiLabel: "मुख्य उद्देश्य",
    icon: Target,
    title: "Action-Oriented Academic Objectives",
    hindiTitle: "विद्यार्थियों के उज्ज्वल भविष्य हेतु निर्धारित लक्ष्य",
    statement:
      "हमारा संकल्प विद्यार्थियों को केवल परीक्षा उत्तीर्ण कराना नहीं, बल्कि उन्हें आत्मनिर्भर, विचारशील और अपने करियर में सफल होने हेतु सक्षम बनाना है।",
    points: [
      {
        title: "Academic Rigor & Mentorship",
        description: "नियमित कक्षाएं, सुयोग्य प्राध्यापकों द्वारा व्यक्तिगत मार्गदर्शन और शंका समाधान।",
        icon: Award,
      },
      {
        title: "Practical & Laboratory Skills",
        description: "कंप्यूटर लैब्स और विज्ञान प्रयोगशालाओं में वास्तविक प्रयोगों द्वारा अनुभव।",
        icon: CheckCircle2,
      },
      {
        title: "Career & Competitive Guidance",
        description: "उच्च शिक्षा एवं प्रतियोगी परीक्षाओं हेतु सूचना, मार्गदर्शन और करियर परामर्श।",
        icon: Compass,
      },
    ],
  },
  {
    id: "values",
    label: "Core Values",
    hindiLabel: "शैक्षणिक मूल्य",
    icon: Compass,
    title: "Foundations of Our Institutional Culture",
    hindiTitle: "ज्ञान, संस्कार और निरंतर कर्मठता",
    statement:
      "हमारे परिसर की आधारशिला अनुशासन, निष्ठा और मानवीय संवेदनाओं पर टिकी है, जो छात्र-छात्राओं को एक आदर्श नागरिक बनने की प्रेरणा देती है।",
    points: [
      {
        title: "ज्ञान (Knowledge)",
        description: "गहन अध्ययन, सत्य की खोज और बौद्धिक जिज्ञासा को निरंतर जीवित रखना।",
        icon: BookOpen,
      },
      {
        title: "संस्कार (Values)",
        description: "माता-पिता, गुरुजनों और समाज के प्रति सम्मान एवं सेवा भावना का पोषण।",
        icon: Heart,
      },
      {
        title: "अवसर (Opportunity)",
        description: "खेल, सांस्कृतिक मंच और अकादमिक प्रतियोगिताओं में अपनी प्रतिभा दिखाने का खुला अवसर।",
        icon: Sparkles,
      },
    ],
  },
];

export default function VisionGoalsSwitcher() {
  const [activeTab, setActiveTab] = useState<TabKey>("vision");

  const current = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div
        role="tablist"
        aria-label="Vision, Goals and Values switcher"
        className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#e6eeff] rounded-xl max-w-xl mx-auto mb-10 border border-[#c3c6d1]/40 shadow-inner"
      >
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d5ad55]",
                isActive
                  ? "bg-[#002550] text-[#ffdf9e] shadow-md font-semibold"
                  : "text-[#121c2a] hover:bg-white/60 hover:text-[#002550]"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-[#d5ad55]" : "text-[#737780]")} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="bg-white rounded-2xl p-6 sm:p-10 border border-[#c3c6d1]/50 shadow-sm transition-all duration-300 animate-in fade-in"
      >
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#d5ad55] bg-[#0a1c32] px-3 py-1 rounded inline-block mb-3">
            {current.hindiLabel}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002550] mb-2">
            {current.title}
          </h3>
          <p className="font-hindi text-base sm:text-lg text-[#4f5f78] mb-4">
            {current.hindiTitle}
          </p>
          <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
            {current.statement}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
          {current.points.map((pt, idx) => {
            const PointIcon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8f9ff] p-5 rounded-xl border border-[#e6eeff] hover:border-[#d5ad55]/60 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#123b70] text-[#ffdf9e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PointIcon className="w-5 h-5 text-[#d5ad55]" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#002550] mb-2">
                  {pt.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
