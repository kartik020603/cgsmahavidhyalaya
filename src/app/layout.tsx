import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import BackToTop from "@/components/layout/BackToTop";
import PageTransition from "@/components/layout/PageTransition";
import EnquiryModal from "@/components/contact/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import { COLLEGE_INFO } from "@/data/college";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cgsmahavidyalaya.com"),
  title: {
    default: "चौधरी गुलाब सिंह महाविद्यालय | CGS Mahavidyalaya — Sadabad, Hathras",
    template: "%s | CGS Mahavidyalaya",
  },
  description:
    "चौधरी गुलाब सिंह महाविद्यालय, मानिकपुर, सादाबाद (हाथरस) — राजा महेंद्र प्रताप सिंह राज्य विश्वविद्यालय, अलीगढ़ से संबद्ध उच्च शिक्षण संस्थान। गुणवत्तापूर्ण शिक्षा, आधुनिक सुविधाएं एवं मूल्यपरक मार्गदर्शन।",
  keywords: [
    "CGS Mahavidyalaya",
    "चौधरी गुलाब सिंह महाविद्यालय",
    "Sadabad College",
    "Hathras College",
    "Manikpur Sadabad",
    "Raja Mahendra Pratap Singh State University Aligarh",
    "Hariom Chaudhary",
    "Ranjni Chaudhary",
    "Virat Chaudhary",
    "Higher Education UP",
  ],
  authors: [{ name: "CGS Mahavidyalaya Administration" }],
  openGraph: {
    title: "CGS Mahavidyalaya | चौधरी गुलाब सिंह महाविद्यालय",
    description:
      "शिक्षा से संस्कार, ज्ञान से उज्ज्वल भविष्य। मानिकपुर, सादाबाद, हाथरस (उत्तर प्रदेश)।",
    url: "https://cgsmahavidyalaya.com",
    siteName: "CGS Mahavidyalaya",
    locale: "hi_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "CGS Mahavidyalaya Campus",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/cgs-logo.svg",
    apple: "/images/cgs-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi"
      className={`${playfair.variable} ${jakarta.variable} ${devanagari.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#121c2a] font-sans antialiased selection:bg-[#d5ad55]/30 selection:text-[#002550]">
        <EnquiryModalProvider>
          <Header />
          <main className="flex-1 flex flex-col">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <FloatingContactButtons />
          <BackToTop />
          <EnquiryModal />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
