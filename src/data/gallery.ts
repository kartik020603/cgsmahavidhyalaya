export type GalleryCategory =
  | "all"
  | "activities"
  | "events"
  | "facilities"
  | "campus"
  | "classrooms";

export interface GalleryItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: "campus" | "classrooms" | "facilities" | "activities" | "events";
  image: string;
  thumbnail?: string;
  description: string;
  hindiDescription?: string;
  year?: string;
  isRealUpload?: boolean;
}

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string; hindiLabel: string }[] = [
  { id: "all", label: "All Photos", hindiLabel: "सभी छायाचित्र" },
  { id: "activities", label: "Activities & Sports", hindiLabel: "खेल व गतिविधियाँ" },
  { id: "events", label: "Events & Celebrations", hindiLabel: "समारोह व उत्सव" },
  { id: "facilities", label: "Campus Facilities", hindiLabel: "संस्थान की सुविधाएँ" },
  { id: "campus", label: "Campus & Facade", hindiLabel: "परिसर व भवन" },
  { id: "classrooms", label: "Mentorship & Classes", hindiLabel: "संवाद व कक्षाकक्ष" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Table Tennis Tournament
  {
    id: "table-tennis-tournament",
    title: "College Table Tennis Tournament Inauguration",
    hindiTitle: "टेबल टेनिस प्रतियोगिता का शुभारंभ",
    category: "activities",
    image: "/images/gallery/table-tennis-tournament.jpg",
    description: "Inauguration of the intra-college table tennis tournament with Prabandhak Shri Hariom Chaudhary, sports faculty, and student competitors.",
    hindiDescription: "प्रबंधक श्री हरिओम चौधरी, खेल संकाय एवं प्रतिभागी छात्रों की उपस्थिति में टेबल टेनिस प्रतियोगिता का उद्घाटन।",
    year: "2025",
    isRealUpload: true,
  },

  // 2. National Flag Hoisting Ceremony
  {
    id: "national-flag-hoisting-ceremony",
    title: "National Flag Hoisting & Patriotic Celebration",
    hindiTitle: "राष्ट्रीय ध्वजारोहण एवं राष्ट्रीय पर्व समारोह",
    category: "events",
    image: "/images/gallery/national-flag-hoisting.jpg",
    description: "Solemn ceremonial flag hoisting at the college flagpole pedestal surrounded by palm trees and floral tributes.",
    hindiDescription: "महाविद्यालय परिसर में देशभक्ति एवं श्रद्धा के साथ आयोजित राष्ट्रीय ध्वजारोहण समारोह।",
    year: "2025",
    isRealUpload: true,
  },

  // 3. College Gymnasium & Fitness Facility
  {
    id: "college-gymnasium",
    title: "Campus Gymnasium & Fitness Training Center",
    hindiTitle: "महाविद्यालय व्यायामशाला एवं फिटनेस केंद्र",
    category: "facilities",
    image: "/images/gallery/college-gymnasium-facility.jpg",
    description: "Spacious college gymnasium equipped with weight-training stations, treadmills, benches, and fitness gear for student wellness.",
    hindiDescription: "छात्रों के शारीरिक स्वास्थ्य एवं फिटनेस प्रशिक्षण हेतु आधुनिक उपकरणों से सुसज्जित कॉलेज व्यायामशाला।",
    year: "2025",
    isRealUpload: true,
  },

  // 4. Leadership & Faculty Team
  {
    id: "leadership-faculty-portrait",
    title: "Leadership & Senior Faculty Members",
    hindiTitle: "महाविद्यालय प्रबंधन एवं वरिष्ठ प्राध्यापक मंडल",
    category: "campus",
    image: "/images/gallery/leadership-faculty-team.jpg",
    description: "Prabandhak Shri Hariom Chaudhary and esteemed faculty members gathered in the college central courtyard.",
    hindiDescription: "महाविद्यालय के मुख्य प्रांगण में उपस्थित प्रबंधक श्री हरिओम चौधरी एवं वरिष्ठ प्राध्यापकगण।",
    year: "2025",
    isRealUpload: true,
  },

  // 5. Sports Drill & Student Assembly
  {
    id: "sports-assembly-front",
    title: "Annual Sports Drill & Student Assembly",
    hindiTitle: "खेलकूद अभ्यास एवं छात्र सभा",
    category: "activities",
    image: "/images/gallery/college-sports-assembly-1.jpg",
    description: "College students assembled in sports tracksuits on the open lush green grounds in front of the 3-story main academic building.",
    hindiDescription: "महाविद्यालय के मुख्य शैक्षणिक भवन के सामने खेल परिधान में उपस्थित छात्र-छात्राओं की अनुशासित सभा।",
    year: "2025",
    isRealUpload: true,
  },

  // 6. Leadership & Student Interactive Seminar
  {
    id: "leadership-interaction",
    title: "Leadership & Student Interactive Seminar",
    hindiTitle: "प्रबंधन एवं छात्र संवाद सत्र",
    category: "events",
    image: "/images/gallery/leadership-student-interaction.jpg",
    description: "Prabandhak Shri Hariom Chaudhary and faculty members addressing students in an open-air academic guidance symposium.",
    hindiDescription: "महाविद्यालय प्रांगण में प्रबंधक श्री हरिओम चौधरी एवं प्राध्यापकों द्वारा विद्यार्थियों का मार्गदर्शन एवं विचार-विमर्श।",
    year: "2025",
    isRealUpload: true,
  },

  // 7. Courtyard Interactive Lecture
  {
    id: "courtyard-lecture",
    title: "Open Courtyard Interactive Lecture Session",
    hindiTitle: "प्रांगण में संवाद एवं परिचर्चा सत्र",
    category: "classrooms",
    image: "/images/gallery/courtyard-lecture-session.jpg",
    description: "Faculty instructor conducting an interactive discussion session with students seated in the paved college courtyard.",
    hindiDescription: "महाविद्यालय प्रांगण में शिक्षक द्वारा छात्र-छात्राओं के साथ आयोजित विशेष संवाद एवं शंका समाधान सत्र।",
    year: "2025",
    isRealUpload: true,
  },

  // 8. Faculty Mentorship & Guidance
  {
    id: "faculty-mentorship",
    title: "Student Guidance & Faculty Mentorship",
    hindiTitle: "विद्यार्थी मार्गदर्शन एवं परामर्श",
    category: "classrooms",
    image: "/images/gallery/faculty-mentorship-session.jpg",
    description: "Attentive students engaged in focused academic and career mentorship in the campus courtyard.",
    hindiDescription: "परिसर में प्राध्यापक के सानिध्य में करियर परामर्श एवं विषयगत अध्ययन में लीन विद्यार्थी।",
    year: "2025",
    isRealUpload: true,
  },

  // 9. Athletics Line-up
  {
    id: "sports-assembly-wide",
    title: "Athletics & Sports Line-up",
    hindiTitle: "खेलकूद एवं शारीरिक दक्षता पंक्ति",
    category: "activities",
    image: "/images/gallery/college-sports-assembly-2.jpg",
    description: "Wide view of student athletic line-up ready for sports meet and physical fitness training on college grounds.",
    hindiDescription: "खेलकूद प्रतियोगिता एवं शारीरिक दक्षता अभ्यास हेतु मैदान में पंक्तिबद्ध महाविद्यालय के छात्र-छात्राएँ।",
    year: "2025",
    isRealUpload: true,
  },

  // 10. Computer & AI Education Center
  {
    id: "facility-ai-lab",
    title: "Computer & AI Education Center",
    hindiTitle: "कंप्यूटर एवं सूचना प्रौद्योगिकी केंद्र",
    category: "facilities",
    image: "/images/facilities/facility-ai.jpg",
    description: "Modern computer lab setup with dedicated workstations for students to learn digital skills.",
    hindiDescription: "विद्यार्थियों के तकनीकी और व्यावहारिक ज्ञान संवर्धन हेतु स्थापित आधुनिक कंप्यूटर लैब।",
    year: "2025",
    isRealUpload: true,
  },

  // 11. Main Campus Facade
  {
    id: "campus-gate-main",
    title: "Main Campus & Architectural Facade",
    hindiTitle: "मुख्य प्रशासनिक एवं शैक्षणिक भवन",
    category: "campus",
    image: "/images/hero/hero1.jpg",
    description: "Wide angle view of CGS Mahavidyalaya college campus grounds and academic building in Sadabad, Hathras.",
    hindiDescription: "चौधरी गुलाब सिंह महाविद्यालय, सादाबाद का मुख्य शैक्षणिक परिसर एवं प्रांगण।",
    year: "2025",
    isRealUpload: true,
  },

  // 12. College Courtyard Pathways
  {
    id: "campus-view-2",
    title: "College Courtyard & Pathways",
    hindiTitle: "कॉलेज परिसर एवं हरित प्रांगण",
    category: "campus",
    image: "/images/hero/hero2.jpg",
    description: "Serene academic walkways and peaceful open spaces within the college perimeter.",
    hindiDescription: "परिसर के शांत और खुले हरित क्षेत्र जहां विद्यार्थी अध्ययन एवं विचार-विमर्श करते हैं।",
    year: "2025",
    isRealUpload: true,
  },

  // 13. Academic Wings & Lawns
  {
    id: "campus-view-3",
    title: "Academic Wings & Lawns",
    hindiTitle: "शैक्षणिक खंड एवं उद्यान",
    category: "campus",
    image: "/images/hero/hero3.jpg",
    description: "Exterior perspective of the academic departments surrounded by natural vegetation.",
    hindiDescription: "प्राकृतिक वातावरण और खुले प्रांगण के साथ सुसज्जित शैक्षणिक भवन।",
    year: "2025",
    isRealUpload: true,
  },

  // 14. Library & Reading Hall
  {
    id: "facility-library",
    title: "Central Library & Reading Hall",
    hindiTitle: "पुस्तकालय एवं वाचनालय",
    category: "facilities",
    image: "/images/stitch/stitch-3.jpg",
    description: "Curriculum textbooks, reference volumes and silent reading desks for focused study.",
    hindiDescription: "संदर्भ ग्रंथों एवं पत्र-पत्रिकाओं से परिपूर्ण शांत वाचनालय।",
    year: "2025",
  },

  // 15. Smart Classrooms
  {
    id: "classroom-smart",
    title: "Modern Smart Classrooms",
    hindiTitle: "आधुनिक स्मार्ट क्लासरूम",
    category: "classrooms",
    image: "/images/stitch/stitch-8.jpg",
    description: "Spacious lecture hall with interactive presentation display and balanced acoustics.",
    hindiDescription: "दृश्य-श्रव्य शिक्षण उपकरणों से सुसज्जित विशाल व्याख्यान कक्ष।",
    year: "2025",
  },

  // 16. Academic Symposium
  {
    id: "event-seminar",
    title: "Academic Symposium & Guest Lecture",
    hindiTitle: "अकादमिक संगोष्ठी एवं विशेष व्याख्यान",
    category: "events",
    image: "/images/stitch/stitch-7.jpg",
    description: "Faculty and invited scholars addressing student delegates in the college auditorium.",
    hindiDescription: "महाविद्यालय सभागार में आयोजित विचार गोष्ठी एवं प्राध्यापकों का उद्बोधन।",
    year: "2025",
  },

  // 17. Science & Practical Laboratory
  {
    id: "facility-science",
    title: "Science & Practical Laboratory",
    hindiTitle: "विज्ञान एवं प्रायोगिक प्रयोगशाला",
    category: "facilities",
    image: "/images/stitch/stitch-10.jpg",
    description: "Standard science workstations with laboratory apparatus and demonstration equipment.",
    hindiDescription: "वैज्ञानिक सिद्धांतों के व्यावहारिक परीक्षण के लिए सुसज्जित प्रयोगशाला।",
    year: "2025",
  },
];
