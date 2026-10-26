export interface Facility {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  hindiDescription: string;
  image: string;
  badge: string;
  icon: string;
  features: string[];
}

export const FACILITIES_DATA: Facility[] = [
  {
    id: "computer-lab",
    title: "Computer & AI Education Center",
    hindiTitle: "कंप्यूटर एवं सूचना प्रौद्योगिकी केंद्र",
    description: "Equipped with modern desktop computers, high-speed internet connectivity, and digital learning tools to provide practical computing literacy.",
    hindiDescription: "आधुनिक कंप्यूटरों, इंटरनेट कनेक्टिविटी और डिजिटल शिक्षण उपकरणों से सुसज्जित, जिससे विद्यार्थी व्यावहारिक तकनीक में पारंगत हो सकें।",
    image: "/images/facilities/facility-ai.jpg",
    badge: "Modern Tech",
    icon: "Monitor",
    features: [
      "High-speed internet connectivity",
      "Office productivity & coding tools",
      "Dedicated computer instructor support",
      "Air-conditioned environment",
    ],
  },
  {
    id: "library",
    title: "Central Library & Reading Hall",
    hindiTitle: "पुस्तकालय एवं वाचनालय",
    description: "A peaceful repository of curriculum textbooks, reference encyclopedias, national journals, competitive examination guides, and quiet reading desks.",
    hindiDescription: "पाठ्यक्रम की पाठ्यपुस्तकों, संदर्भ ग्रंथों, पत्र-पत्रिकाओं और शांत वाचनालय का समृद्ध संग्रह।",
    image: "/images/stitch/stitch-3.jpg",
    badge: "Knowledge Hub",
    icon: "BookOpen",
    features: [
      "Extensive reference collection",
      "Hindi & English literature & journals",
      "Dedicated silent study desks",
      "Borrowing and cataloging service",
    ],
  },
  {
    id: "science-labs",
    title: "Science & Practical Laboratories",
    hindiTitle: "विज्ञान एवं प्रायोगिक प्रयोगशाला",
    description: "Spacious, well-ventilated science workstations with standard apparatus, safety equipment, and specimen collections for hands-on experiments.",
    hindiDescription: "व्यावहारिक प्रयोगों के लिए प्रामाणिक उपकरणों, सुरक्षा मानकों और पर्याप्त कार्यस्थान से सुसज्जित प्रयोगशालाएँ।",
    image: "/images/stitch/stitch-10.jpg",
    badge: "Practical Learning",
    icon: "FlaskConical",
    features: [
      "Standard laboratory safety protocols",
      "Apparatus & chemical reagents inventory",
      "Dedicated lab assistant assistance",
      "Regular practical demonstration sessions",
    ],
  },
  {
    id: "smart-classrooms",
    title: "Spacious & Smart Classrooms",
    hindiTitle: "विशाल एवं आधुनिक कक्षाकक्ष",
    description: "Well-ventilated lecture halls with comfortable ergonomic seating, natural lighting, audio-visual display setups, and clear acoustics.",
    hindiDescription: "पर्याप्त प्राकृतिक प्रकाश, आरामदायक बैठक व्यवस्था और दृश्य-श्रव्य उपकरणों से सुसज्जित शिक्षण कक्ष।",
    image: "/images/stitch/stitch-8.jpg",
    badge: "Academic Comfort",
    icon: "Presentation",
    features: [
      "Ergonomic student desk benches",
      "Acoustically balanced lecture spaces",
      "Whiteboards and projection facilities",
      "Cross-ventilation and power backup",
    ],
  },
  {
    id: "sports-ground",
    title: "Sports & Physical Fitness Grounds",
    hindiTitle: "खेलकूद एवं शारीरिक विकास मैदान",
    description: "Open athletic track, volleyball courts, cricket pitch facilities, and indoor recreational gear promoting teamwork and active wellness.",
    hindiDescription: "वॉलीबॉल, क्रिकेट, दौड़ और इनडोर खेलों के लिए खुला परिसर जो छात्रों के शारीरिक स्वास्थ्य को संवारता है।",
    image: "/images/facilities/college-gymnasium-facility.jpg",
    badge: "Sports & Fitness",
    icon: "Trophy",
    features: [
      "Multi-sport athletic field",
      "Annual sports meet competitions",
      "Indoor games & yoga sessions",
      "Physical training instructors",
    ],
  },
  {
    id: "seminar-hall",
    title: "Auditorium & Seminar Hall",
    hindiTitle: "सभागार एवं विचार गोष्ठी कक्ष",
    description: "A centralized venue hosting academic symposiums, guest lectures, national festivals, debate competitions, and annual cultural celebrations.",
    hindiDescription: "वार्षिक उत्सवों, विचार गोष्ठियों, राष्ट्रीय पर्वों और वाद-विवाद प्रतियोगिताओं के लिए सुव्यवस्थित सभागार।",
    image: "/images/stitch/stitch-7.jpg",
    badge: "Cultural Center",
    icon: "Mic",
    features: [
      "Integrated audio sound system",
      "Tiered seating capacity",
      "Stage lighting & podium facilities",
      "Host of cultural & academic events",
    ],
  },
];
