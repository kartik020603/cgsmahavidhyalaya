export interface ManagementMember {
  id: "prabandhak" | "ranjni" | "virat" | "himani" | "nishu" | "mauli" | "kashi";
  name: {
    english: string;
    hindi: string;
  };
  designation: {
    english: string;
    hindi: string;
    tag: string;
  };
  slug: string;
  route: string;
  image: string;
  shortMessage: string;
  quote: string;
  subtitle: {
    english: string;
    hindi: string;
  };
  overview: string;
  fullMessage: string[];
  keyPillars: {
    title: string;
    hindiTitle: string;
    description: string;
    icon: string;
  }[];
  signaturePlaceholder?: string;
  boardRole: string;
}

export const MANAGEMENT_PROFILES: Record<
  "prabandhak" | "ranjni" | "virat" | "himani" | "nishu" | "mauli" | "kashi",
  ManagementMember
> = {
  prabandhak: {
    id: "prabandhak",
    name: {
      english: "Hariom Chaudhary",
      hindi: "श्री हरिओम चौधरी",
    },
    designation: {
      english: "Prabandhak (Manager)",
      hindi: "प्रबंधक",
      tag: "PRABANDHAK",
    },
    slug: "prabandhak",
    route: "/our-team/prabandhak",
    image: "/images/management/hariom-chaudhary.jpg",
    boardRole: "CGS Mahavidyalaya Management Board",
    shortMessage: "शिक्षा केवल ज्ञान प्राप्त करने का माध्यम नहीं, बल्कि अपने व्यक्तित्व और भविष्य को बेहतर बनाने की यात्रा भी है।",
    quote: "“प्रिय विद्यार्थियों, शिक्षा केवल ज्ञान प्राप्त करने का माध्यम नहीं, बल्कि अपने व्यक्तित्व और भविष्य को बेहतर बनाने की यात्रा भी है। निरंतर सीखते रहें, अनुशासन बनाए रखें और अपने सपनों को पूरा करने के लिए समर्पित रहें।”",
    subtitle: {
      english: "A Message of Purpose, Discipline and Institutional Vision",
      hindi: "अनुशासन, समर्पण और भविष्य निर्माण की दिशा में एक संदेश",
    },
    overview: "हमारा निरंतर ध्येय यह सुनिश्चित करना है कि ग्रामीण एवं उपनगरीय क्षेत्र के प्रत्येक छात्र को आधुनिक संसाधन, समृद्ध पुस्तकालय, अनुशासित वातावरण और उच्च नैतिक मूल्य सुलभ हों।",
    fullMessage: [
      "चौधरी गुलाब सिंह महाविद्यालय की स्थापना का मूल उद्देश्य ग्रामीण एवं उपनगरीय अंचल में गुणवत्तापूर्ण और मूल्यपरक उच्च शिक्षा की पहुंच को सुगम बनाना रहा है। हमारा विश्वास है कि सच्ची शिक्षा केवल किताबी ज्ञान तक सीमित नहीं होती, अपितु वह विद्यार्थी के चरित्र निर्माण, चिंतन शक्ति और सामाजिक उत्तरदायित्व को परिपक्व करती है।",
      "महाविद्यालय परिसर में हम एक ऐसा वातावरण उपलब्ध कराने के लिए कटिबद्ध हैं जहां अनुशासन, परिश्रम और नवाचार को प्राथमिकता दी जाती है। आधुनिक प्रयोगशालाएँ, समृद्ध पुस्तकालय एवं समर्पित प्राध्यापकों की देखरेख में हमारे विद्यार्थी न केवल शैक्षणिक उत्कृष्टता हासिल कर रहे हैं, बल्कि आत्मनिर्भर नागरिक के रूप में भी उभर रहे हैं।",
      "मैं सभी विद्यार्थियों से आह्वान करता हूँ कि वे अपने अध्ययन के प्रत्येक क्षण का सदुपयोग करें, अपनी सीमाओं का विस्तार करें और राष्ट्र निर्माण में अपना सकारात्मक योगदान दें।",
    ],
    keyPillars: [
      {
        title: "Discipline & Integrity",
        hindiTitle: "अनुशासन एवं नैतिक सत्यनिष्ठा",
        description: "संस्थान में समयबद्धता और उच्च नैतिक आचरण पर विशेष बल दिया जाता है।",
        icon: "ShieldCheck",
      },
      {
        title: "Accessible Excellence",
        hindiTitle: "सुलभ गुणवत्तापूर्ण शिक्षा",
        description: "हर पृष्ठभूमि के मेधावी छात्र के लिए आधुनिक शैक्षणिक अवसर सुलभ कराना।",
        icon: "GraduationCap",
      },
      {
        title: "Community Growth",
        hindiTitle: "सामाजिक उत्थान",
        description: "क्षेत्र के युवाओं को जागरूक, स्वावलंबी और सक्षम नागरिक बनाना।",
        icon: "Users",
      },
    ],
    signaturePlaceholder: "Hariom Chaudhary",
  },

  ranjni: {
    id: "ranjni",
    name: {
      english: "Ranjni Chaudhary",
      hindi: "श्रीमती रंजनी चौधरी",
    },
    designation: {
      english: "Director",
      hindi: "निदेशक",
      tag: "DIRECTOR",
    },
    slug: "ranjni",
    route: "/our-team/ranjni",
    image: "/images/management/ranjni-chaudhary.jpg",
    boardRole: "Academic Excellence & Cultural Development",
    shortMessage: "हर विद्यार्थी में कुछ नया सीखने और आगे बढ़ने की क्षमता होती है। जिज्ञासा और सकारात्मक सोच के साथ आगे बढ़ें।",
    quote: "“प्रिय विद्यार्थियों, हर विद्यार्थी में कुछ नया सीखने और आगे बढ़ने की क्षमता होती है। जिज्ञासा, निरंतर प्रयास और सकारात्मक सोच के साथ अपने लक्ष्यों की ओर बढ़ें। हमारा उद्देश्य आपके सीखने के सफर को प्रेरणादायक बनाना है।”",
    subtitle: {
      english: "Nurturing Curiosity, Women Empowerment and Cultural Enrichment",
      hindi: "जिज्ञासा, महिला सशक्तीकरण और सांस्कृतिक चेतना का संवर्धन",
    },
    overview: "महिला सशक्तीकरण, सामाजिक चेतना और उच्च मानवीय मूल्यों का संचार हमारे शैक्षणिक सिद्धांतों के मूल केंद्र में है। प्रत्येक विद्यार्थी को अपनी अंतर्निहित प्रतिभा पहचानने का खुला मंच मिलना चाहिए।",
    fullMessage: [
      "शिक्षा एक ऐसी ज्योति है जो अंधकार को मिटाकर सकारात्मक परिवर्तन का मार्ग प्रशस्त करती है। चौधरी गुलाब सिंह महाविद्यालय में हमारी प्राथमिकता है कि छात्राओं और छात्रों दोनों को समान सम्मान, सुरक्षा और सशक्त शैक्षणिक मंच मिले।",
      "हम पाठ्यक्रम के साथ-साथ सह-पाठ्यक्रम गतिविधियों, कला, वाद-विवाद, और सांस्कृतिक कार्यक्रमों को बढ़ावा देते हैं, ताकि विद्यार्थी आत्मविश्वास के साथ मंच पर अपनी बात रख सकें और भावनात्मक रूप से सुदृढ़ बनें।",
      "सकारात्मक सोच और निरंतर अभ्यास से कोई भी लक्ष्य कठिन नहीं रहता। हमारी पूरी फैकल्टी और प्रबंधन आपके शैक्षणिक स्वप्नों को साकार करने के लिए आपके साथ तत्पर है।",
    ],
    keyPillars: [
      {
        title: "Holistic Development",
        hindiTitle: "समग्र व्यक्तित्व विकास",
        description: "कला, संस्कृति और विचार गोष्ठियों के माध्यम से सर्वांगीण विकास।",
        icon: "Sparkles",
      },
      {
        title: "Women Empowerment",
        hindiTitle: "महिला सशक्तीकरण",
        description: "छात्राओं की उच्च शिक्षा, सुरक्षा एवं आत्मनिर्भरता को विशेष प्रोत्साहन।",
        icon: "HeartHandshake",
      },
      {
        title: "Empathetic Mentorship",
        hindiTitle: "स्नेहपूर्ण मार्गदर्शन",
        description: "छात्रों की व्यक्तिगत जिज्ञासाओं और कठिनाइयों का समाधान।",
        icon: "Award",
      },
    ],
    signaturePlaceholder: "Ranjni Chaudhary",
  },

  virat: {
    id: "virat",
    name: {
      english: "Virat Chaudhary",
      hindi: "श्री विराट चौधरी",
    },
    designation: {
      english: "Director",
      hindi: "निदेशक",
      tag: "DIRECTOR",
    },
    slug: "virat",
    route: "/our-team/virat",
    image: "/images/management/virat-chaudhary.jpg",
    boardRole: "CGS Mahavidyalaya Executive Board & Innovation",
    shortMessage: "अपने ज्ञान को बढ़ाना, नई क्षमताएँ विकसित करना और जिम्मेदारी के साथ आगे बढ़ना सफलता की महत्वपूर्ण नींव है।",
    quote: "“प्रिय विद्यार्थियों, अपने ज्ञान को बढ़ाना, नई क्षमताएँ विकसित करना और जिम्मेदारी के साथ आगे बढ़ना सफलता की महत्वपूर्ण नींव है। सीखने के हर अवसर का उपयोग करें और अपने भविष्य के लिए निरंतर प्रयास करते रहें।”",
    subtitle: {
      english: "Empowering Minds for 21st-Century Competence, Tech & Career Readiness",
      hindi: "21वीं सदी की तकनीकी दक्षता, नवाचार और करियर तैयारी",
    },
    overview: "आज का युग तकनीकी नवाचार और व्यावहारिक दक्षता का है। हमारा प्रयास है कि हमारे छात्र केवल उपाधियाँ प्राप्त न करें, बल्कि रोजगारोन्मुखी कौशल और आधुनिक सोच से लैस हों।",
    fullMessage: [
      "तीव्र गति से बदलती दुनिया में पारंपरिक शिक्षा के साथ आधुनिक तकनीक और व्यावहारिक कौशल का समन्वय अनिवार्य हो चुका है। चौधरी गुलाब सिंह महाविद्यालय में हम डिजिटल साक्षरता, कंप्यूटर लैब्स और करियर उन्मुखी मार्गदर्शन पर बल दे रहे हैं।",
      "हमारा लक्ष्य है कि सादाबाद और आसपास के क्षेत्रों के विद्यार्थी किसी भी बड़े महानगर के छात्र से पीछे न रहें। उन्हें आधुनिक विश्लेषणात्मक दृष्टिकोण, संचार कौशल और समस्या समाधान की दक्षता से युक्त करना हमारी प्राथमिकता है।",
      "कठिन परिश्रम का कोई विकल्प नहीं होता, लेकिन सही दिशा और आधुनिक तकनीकों के साथ किया गया परिश्रम निश्चित रूप से असाधारण परिणाम देता है।",
    ],
    keyPillars: [
      {
        title: "Technology & Digital Skills",
        hindiTitle: "तकनीकी दक्षता एवं डिजिटल कौशल",
        description: "कंप्यूटर लैब्स और आधुनिक तकनीकी साधनों द्वारा व्यावहारिक प्रशिक्षण।",
        icon: "Laptop",
      },
      {
        title: "Career & Competitive Guidance",
        hindiTitle: "करियर एवं प्रतियोगी मार्गदर्शन",
        description: "उच्च शिक्षा के पश्चात रोजगार और प्रतियोगी परीक्षाओं हेतु परामर्श।",
        icon: "Compass",
      },
      {
        title: "Critical Thinking",
        hindiTitle: "विश्लेषणात्मक चिंतन",
        description: "समस्या समाधान और 21वीं सदी की आवश्यकताओं के अनुरूप तैयारी।",
        icon: "Lightbulb",
      },
    ],
    signaturePlaceholder: "Virat Chaudhary",
  },

  himani: {
    id: "himani",
    name: {
      english: "Himani Chaudhary",
      hindi: "श्रीमती हिमानी चौधरी",
    },
    designation: {
      english: "Vice Principal",
      hindi: "उप-प्राचार्या",
      tag: "VICE PRINCIPAL",
    },
    slug: "himani",
    route: "/our-team/himani",
    image: "/images/management/himani-chaudhary.jpg",
    boardRole: "Academic Administration & Student Affairs",
    shortMessage: "अनुशासन, नियमित अध्ययन और सकारात्मक दृष्टिकोण ही जीवन में वास्तविक सफलता की कुंजी है।",
    quote: "“प्रिय विद्यार्थियों, अनुशासन, नियमित अध्ययन और सकारात्मक दृष्टिकोण ही जीवन में वास्तविक सफलता की कुंजी है। अपने शिक्षकों के मार्गदर्शन में ज्ञान अर्जित करें और अपने लक्ष्यों की प्राप्ति हेतु निरंतर समर्पित रहें।”",
    subtitle: {
      english: "Excellence in Academic Discipline, Student Guidance & Ethical Leadership",
      hindi: "शैक्षणिक अनुशासन, छात्र मार्गदर्शन एवं चारित्रिक निर्माण का संदेश",
    },
    overview: "महाविद्यालय में शैक्षणिक गुणवत्ता, कक्षा अनुशासन एवं विद्यार्थियों के समग्र व्यक्तित्व विकास को सुनिश्चित करना हमारी सर्वोच्च प्राथमिकता है।",
    fullMessage: [
      "चौधरी गुलाब सिंह महाविद्यालय में हम प्रत्येक विद्यार्थी को शैक्षणिक ज्ञान के साथ-साथ नैतिक मूल्यों और अनुशासन से सुसज्जित करने के लिए निरंतर प्रयासरत हैं। एक आदर्श शैक्षणिक संस्थान वह होता है जहाँ विद्यार्थियों को निर्भीक होकर प्रश्न पूछने, अपनी प्रतिभा को निखारने और लक्ष्य प्राप्ति हेतु अनुकूल वातावरण प्राप्त हो।",
      "उप-प्राचार्या के रूप में मेरी यह प्रतिबद्धता है कि हमारे प्राध्यापक और छात्र एक परिवार की तरह मिलकर शैक्षणिक उत्कृष्टता के नए प्रतिमान स्थापित करें। नियमित कक्षाएं, समयबद्ध परीक्षा प्रणाली, और छात्रों की व्यक्तिगत समस्याओं का समाधान हमारी प्राथमिकताओं में शामिल हैं।",
      "मैं सभी विद्यार्थियों से कहना चाहती हूँ कि समय अत्यंत मूल्यवान है। अपने अध्ययन के प्रति निष्ठावान रहें, कॉलेज की समृद्ध सुविधाओं का पूरा लाभ उठाएं और अपने गुरुजनों व माता-पिता का नाम रोशन करें।",
    ],
    keyPillars: [
      {
        title: "Academic Discipline",
        hindiTitle: "शैक्षणिक अनुशासन",
        description: "नियमित उपस्थिति, समयबद्ध अध्ययन एवं परीक्षा में उत्कृष्ट प्रदर्शन।",
        icon: "BookOpen",
      },
      {
        title: "Student Mentorship",
        hindiTitle: "छात्र मार्गदर्शन",
        description: "विद्यार्थियों के व्यक्तिगत व शैक्षणिक विकास हेतु सतत परामर्श।",
        icon: "HeartHandshake",
      },
      {
        title: "Value-Based Education",
        hindiTitle: "संस्कारयुक्त शिक्षा",
        description: "ज्ञान के साथ-साथ उच्च मानवीय एवं नैतिक मूल्यों का बीजारोपण।",
        icon: "Award",
      },
    ],
    signaturePlaceholder: "Himani Chaudhary",
  },

  nishu: {
    id: "nishu",
    name: {
      english: "Nishu Chaudhary",
      hindi: "श्री नीशू चौधरी",
    },
    designation: {
      english: "Managing Director",
      hindi: "प्रबंध निदेशक",
      tag: "MANAGING DIRECTOR",
    },
    slug: "nishu",
    route: "/our-team/nishu",
    image: "/images/management/nishu-chaudhary.jpg",
    boardRole: "Operational Management & Institutional Development",
    shortMessage: "नवाचार, सुदृढ़ प्रबंधन और समर्पण के साथ हम विद्यार्थियों को श्रेष्ठतम अवसर प्रदान करने के लिए प्रतिबद्ध हैं।",
    quote: "“प्रिय विद्यार्थियों, नवाचार, सुदृढ़ प्रबंधन और समर्पण के साथ हम विद्यार्थियों को श्रेष्ठतम अवसर प्रदान करने के लिए प्रतिबद्ध हैं। अपने संकल्प को मजबूत रखें, अवसरों का लाभ उठाएं और भविष्य की चुनौतियों के लिए स्वयं को तैयार करें।”",
    subtitle: {
      english: "Strategic Governance, Student Welfare & Institutional Expansion",
      hindi: "रणनीतिक प्रबंधन, छात्र कल्याण एवं संस्थागत विकास का संदेश",
    },
    overview: "महाविद्यालय के सुचारू संचालन, आधुनिक संसाधनों के विस्तार और विद्यार्थियों के सर्वांगीण विकास हेतु अनुकूल वातावरण तैयार करना हमारा मुख्य लक्ष्य है।",
    fullMessage: [
      "चौधरी गुलाब सिंह महाविद्यालय का उद्देश्य विद्यार्थियों को केवल किताबी शिक्षा देना नहीं, अपितु उन्हें जीवन के हर क्षेत्र में नेतृत्व करने योग्य बनाना है। हमारे संस्थान में बेहतर अधोसंरचना, कुशल प्रशासनिक व्यवस्था और छात्रों की सुविधाओं का निरंतर उन्नयन किया जा रहा है।",
      "प्रबंध निदेशक के रूप में मेरा प्रयास है कि परिसर में शिक्षा, खेल, तकनीकी प्रशिक्षण और सांस्कृतिक गतिविधियों का ऐसा संगम हो, जिससे छात्र आत्मनिर्भर और आत्मविश्वासी बन सकें। हम क्षेत्र के युवाओं को उच्च स्तरीय मार्गदर्शन उपलब्ध कराने के लिए सदैव प्रयासरत हैं।",
      "मैं सभी विद्यार्थियों को उज्ज्वल भविष्य की शुभकामनाएं देता हूँ और उनसे आग्रह करता हूँ कि वे लगन और ईमानदारी के साथ अपने लक्ष्यों को प्राप्त करें।",
    ],
    keyPillars: [
      {
        title: "Strategic Governance",
        hindiTitle: "रणनीतिक प्रबंधन",
        description: "संस्थान के समग्र संचालन में पारदर्शिता, गतिशीलता और उत्कृष्टता।",
        icon: "Briefcase",
      },
      {
        title: "Modern Infrastructure",
        hindiTitle: "आधुनिक अधोसंरचना",
        description: "विद्यार्थियों के अध्ययन एवं खेलकूद हेतु विश्वस्तरीय सुविधाओं का विस्तार।",
        icon: "Building2",
      },
      {
        title: "Youth Empowerment",
        hindiTitle: "युवा सशक्तीकरण",
        description: "आत्मविश्वास, कौशल विकास और स्वावलंबन को सर्वोच्च प्राथमिकता।",
        icon: "TrendingUp",
      },
    ],
    signaturePlaceholder: "Nishu Chaudhary",
  },

  mauli: {
    id: "mauli",
    name: {
      english: "Mauli Chaudhary",
      hindi: "मौलि चौधरी",
    },
    designation: {
      english: "Young Inspiration",
      hindi: "नन्ही प्रेरणा (Young Star)",
      tag: "CHILDREN'S MESSAGE",
    },
    slug: "mauli",
    route: "/our-team/mauli",
    image: "/images/management/mauli-chaudhary.jpg",
    boardRole: "CGS Family — Future Generation & Blessings",
    shortMessage: "हंसते-मुस्कुराते मन से पढ़ाई करें, खूब खेलें और हमेशा सच बोलें!",
    quote: "“प्रिय भैया-दीदी, हंसते-मुस्कुराते मन से पढ़ाई करें, खूब खेलें और हमेशा सच बोलें। हमारे कॉलेज में सभी खूब आगे बढ़ें और अपने माता-पिता का नाम रोशन करें!”",
    subtitle: {
      english: "A Heartfelt Message of Joy, Curiosity and Pure Smiles from the Future Generation",
      hindi: "निर्मल मुस्कान, खुशहाल बचपन और उज्ज्वल भविष्य का नन्हा संदेश",
    },
    overview: "मौलि चौधरी का संदेश हमें याद दिलाता है कि शिक्षा का मूल उद्देश्य बचपन की निष्कपटता, जिज्ञासा और खुशियों को संजोते हुए ज्ञान का प्रकाश फैलाना है।",
    fullMessage: [
      "बचपन जीवन की सबसे सुंदर अवस्था है, जहाँ हर दिन कुछ नया सीखने और जानने का कौतूहल होता है। चौधरी गुलाब सिंह महाविद्यालय के प्रांगण में जब बड़े भैया और दीदी निष्ठा से अध्ययन करते हैं, तो वह दृश्य हम सभी को अत्यंत प्रेरणा देता है।",
      "मौलि की यह प्यारी सी कामना है कि कॉलेज का हर विद्यार्थी हमेशा खुश रहे, कभी निराश न हो, और अपनी प्रतिभा के दम पर आसमान छू ले। खेलकूद, कला और पढ़ाई—तीनों में संतुलन ही सच्चे विकास की पहचान है।",
      "सभी छात्र-छात्राओं को उज्ज्वल भविष्य और खुशियों भरा जीवन प्राप्त हो, यही हमारे परिवार की हार्दिक शुभकामना है।",
    ],
    keyPillars: [
      {
        title: "Innocence & Curiosity",
        hindiTitle: "जिज्ञासा एवं निर्मल मन",
        description: "सीखने की स्वाभाविक उमंग और कभी न समाप्त होने वाला कौतूहल।",
        icon: "Sparkles",
      },
      {
        title: "Joyful Learning",
        hindiTitle: "आनंददायी शिक्षा",
        description: "हंसी, खेल और सकारात्मक ऊर्जा के साथ ज्ञानार्जन।",
        icon: "HeartHandshake",
      },
      {
        title: "Bright Horizons",
        hindiTitle: "उज्ज्वल कल की आशा",
        description: "संस्कारों के साथ नए युग में सफलता के नए आयाम गढ़ना।",
        icon: "Award",
      },
    ],
    signaturePlaceholder: "Mauli Chaudhary",
  },

  kashi: {
    id: "kashi",
    name: {
      english: "Kashi Chaudhary",
      hindi: "काशी चौधरी",
    },
    designation: {
      english: "Young Inspiration & Cultural Star",
      hindi: "नन्ही प्रेरणा एवं सांस्कृतिक मुस्कान",
      tag: "CHILDREN'S MESSAGE",
    },
    slug: "kashi",
    route: "/our-team/kashi",
    image: "/images/management/kashi-chaudhary.jpg",
    boardRole: "CGS Family — Future Generation & Cultural Heritage",
    shortMessage: "अपनी संस्कृति और संस्कारों से जुड़े रहें, हमेशा मुस्कुराएं और ऊंचे सपने देखें!",
    quote: "“अपनी भारतीय संस्कृति और संस्कारों से जुड़े रहें, हमेशा मुस्कुराएं और ऊंचे सपने देखें। सच्ची लगन और अच्छे आचरण से हर सपना सच होता है!”",
    subtitle: {
      english: "Embracing Cultural Roots, Traditional Values and High Aspirations",
      hindi: "सांस्कृतिक संस्कार, पारंपरिक मूल्य एवं उच्च आदर्शों की नन्ही किरण",
    },
    overview: "काशी चौधरी का संदेश हमें अपनी सांस्कृतिक जड़ों, विनम्रता और उच्च आदर्शों के साथ आगे बढ़ने की निरंतर प्रेरणा देता है।",
    fullMessage: [
      "संस्कार ही व्यक्ति को महान बनाते हैं। चौधरी गुलाब सिंह महाविद्यालय में आधुनिक ज्ञान के साथ-साथ नैतिक मूल्यों, भारतीय संस्कृति और परंपराओं का जो सम्मान किया जाता है, वह अद्वितीय है।",
      "काशी की ओर से महाविद्यालय के सभी भैया-बहनों को यह प्यार भरा संदेश है कि वे अपनी जड़ों को कभी न भूलें, गुरुजनों का आदर करें और पूरे समर्पण से अपने लक्ष्यों को हासिल करें।",
      "जीवन में सदा सच्चाई की राह पर चलें और अपने परिवार, समाज व राष्ट्र को गौरवान्वित करें।",
    ],
    keyPillars: [
      {
        title: "Cultural Values",
        hindiTitle: "सांस्कृतिक संस्कार",
        description: "भारतीय संस्कृति, कला और परंपराओं के प्रति आदर भाव।",
        icon: "Award",
      },
      {
        title: "Respect & Humility",
        hindiTitle: "विनम्रता एवं आदर",
        description: "बड़ों का सम्मान और गुरुजनों के प्रति कृतज्ञता।",
        icon: "HeartHandshake",
      },
      {
        title: "Dedicated Focus",
        hindiTitle: "समर्पित लक्ष्य",
        description: "दृढ़ संकल्प के साथ अध्ययन और चरित्र निर्माण।",
        icon: "BookOpen",
      },
    ],
    signaturePlaceholder: "Kashi Chaudhary",
  },
};

export const MANAGEMENT_LIST = Object.values(MANAGEMENT_PROFILES);

export const EXECUTIVE_MANAGEMENT_LIST = MANAGEMENT_LIST.filter(
  (m) => m.id !== "mauli" && m.id !== "kashi"
);

export const CHILDREN_LIST = MANAGEMENT_LIST.filter(
  (m) => m.id === "mauli" || m.id === "kashi"
);
