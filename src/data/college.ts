export interface NavLink {
  label: string;
  hindiLabel?: string;
  href: string;
  children?: {
    label: string;
    hindiLabel?: string;
    href: string;
    description?: string;
  }[];
}

export const COLLEGE_INFO = {
  name: {
    english: "CGS Mahavidyalaya",
    hindi: "चौधरी गुलाब सिंह महाविद्यालय",
    short: "CGS",
  },
  motto: {
    english: "Empowering Minds. Building Futures.",
    hindi: "ज्ञान • संस्कार • सफलता",
  },
  location: {
    village: "Manikpur",
    tehsil: "Sadabad",
    district: "Hathras",
    state: "Uttar Pradesh",
    pincode: "281104",
    hindi: "मानिकपुर, सादाबाद, हाथरस, उत्तर प्रदेश (281104)",
    english: "Manikpur, Sadabad, Hathras, Uttar Pradesh - 281104",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14170.824201700685!2d77.9863412!3d27.4475479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371589d7010f3%3A0xb328017c603a1168!2sSadabad%2C%20Uttar%20Pradesh%20281104!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectionsUrl: "https://maps.google.com/?q=Sadabad+Hathras+Uttar+Pradesh",
  },
  contact: {
    phone: "+91 9219707070",
    phoneDisplay: "+91 9219707070",
    phoneTel: "tel:+919219707070",
    whatsappNumber: "919219707070",
    whatsappDisplay: "+91 9219707070",
    whatsappMessageHindi: "नमस्ते, मुझे चौधरी गुलाब सिंह महाविद्यालय के बारे में जानकारी चाहिए। कृपया मुझे प्रवेश प्रक्रिया और उपलब्ध पाठ्यक्रमों के बारे में बताएं।",
    email: "info@cgsmahavidyalaya.com",
    workingHours: "Monday - Saturday: 09:00 AM - 04:00 PM",
    workingHoursHindi: "सोमवार - शनिवार: प्रातः 09:00 बजे से सायं 04:00 बजे तक",
  },
  recognition: {
    affiliation: "Affiliated to Raja Mahendra Pratap Singh State University, Aligarh",
    affiliationHindi: "राजा महेंद्र प्रताप सिंह राज्य विश्वविद्यालय, अलीगढ़ से संबद्ध",
    approval: "Approved by Govt. of Uttar Pradesh & Higher Education Department",
    approvalHindi: "उत्तर प्रदेश शासन एवं उच्च शिक्षा विभाग द्वारा मान्यता प्राप्त",
    code: "College Code: CGS-306",
  },
  announcements: [
    {
      text: "सत्र 2025-26 प्रवेश मार्गदर्शन एवं परामर्श उपलब्ध • संपर्क: +91 9219707070",
      isNew: true,
      href: "/contact-us",
    },
    {
      text: "विद्यार्थियों के लिए आधुनिक कंप्यूटर प्रयोगशाला एवं समृद्ध पुस्तकालय सुविधा उपलब्ध",
      isNew: false,
      href: "/about-us",
    },
  ],
  navigation: [
    { label: "Home", hindiLabel: "मुख्य पृष्ठ", href: "/" },
    { label: "About Us", hindiLabel: "हमारे बारे में", href: "/about-us" },
    {
      label: "Our Team",
      hindiLabel: "हमारा नेतृत्व",
      href: "/our-team",
      children: [
        {
          label: "Prabandhak's Message",
          hindiLabel: "प्रबंधक का संदेश",
          href: "/our-team/prabandhak",
          description: "श्री हरिओम चौधरी — प्रबंधक",
        },
        {
          label: "Ranjni Chaudhary's Message",
          hindiLabel: "निदेशक का संदेश (रंजनी चौधरी)",
          href: "/our-team/ranjni",
          description: "श्रीमती रंजनी चौधरी — निदेशक",
        },
        {
          label: "Virat Chaudhary's Message",
          hindiLabel: "निदेशक का संदेश (विराट चौधरी)",
          href: "/our-team/virat",
          description: "श्री विराट चौधरी — निदेशक",
        },
        {
          label: "Himani Chaudhary's Message",
          hindiLabel: "उप-प्राचार्या का संदेश (हिमानी चौधरी)",
          href: "/our-team/himani",
          description: "श्रीमती हिमानी चौधरी — उप-प्राचार्या",
        },
      ],
    },
    { label: "Photo Gallery", hindiLabel: "फोटो गैलरी", href: "/photo-gallery" },
    { label: "Contact Us", hindiLabel: "संपर्क करें", href: "/contact-us" },
  ] as NavLink[],
};

export function getWhatsAppUrl(): string {
  const encoded = encodeURIComponent(COLLEGE_INFO.contact.whatsappMessageHindi);
  return `https://wa.me/${COLLEGE_INFO.contact.whatsappNumber}?text=${encoded}`;
}
