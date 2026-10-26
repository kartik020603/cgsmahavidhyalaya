"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play, ShieldCheck, ArrowRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  image: string;
  badge: string;
  hindiHeadline: string;
  englishTitle: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero/hero-slide-1.jpg?v=2",
    badge: "WELCOME TO CGS MAHAVIDYALAYA",
    hindiHeadline: "शिक्षा से संस्कार, ज्ञान से उज्ज्वल भविष्य।",
    englishTitle: "Empowering Minds. Building Futures.",
    description: "चौधरी गुलाब सिंह महाविद्यालय, मानिकपुर, सादाबाद (हाथरस) — राजा महेंद्र प्रताप सिंह राज्य विश्वविद्यालय, अलीगढ़ से संबद्ध उच्च शिक्षण संस्थान।",
    primaryCta: {
      label: "About Our College",
      href: "/about-us",
    },
    secondaryCta: {
      label: "Campus Gallery",
      href: "/photo-gallery",
    },
  },
  {
    id: "slide-2",
    image: "/images/hero/hero-slide-2.jpg?v=2",
    badge: "LEADERSHIP & DIRECT MENTORSHIP",
    hindiHeadline: "प्रबंधन का सानिध्य, विद्यार्थियों को निरंतर प्रेरणा एवं मार्गदर्शन।",
    englishTitle: "Guided by Values. Inspiring Future Generations.",
    description: "माननीय प्रबंधक श्री हरिओम चौधरी जी द्वारा विद्यार्थियों से सीधा संवाद एवं उनके सर्वांगीण व नैतिक विकास हेतु सतत मार्गदर्शन।",
    primaryCta: {
      label: "Leadership Message",
      href: "/our-team/prabandhak",
    },
    secondaryCta: {
      label: "Admission Enquiry",
      href: "/contact-us",
    },
  },
  {
    id: "slide-3",
    image: "/images/hero/hero-slide-3.jpg?v=2",
    badge: "DISCIPLINE & ACADEMIC EXCELLENCE",
    hindiHeadline: "समर्पित संकाय, सुव्यवस्थित प्रांगण एवं आदर्श शैक्षणिक वातावरण।",
    englishTitle: "Fostering Academic Excellence & Character.",
    description: "आधुनिक 3-मंजिला भव्य शैक्षणिक भवन, विशाल खेल मैदान एवं अनुभवी प्राध्यापकों की देखरेख में अनुशासित शिक्षण।",
    primaryCta: {
      label: "Explore Facilities",
      href: "/about-us#facilities",
    },
    secondaryCta: {
      label: "Campus Gallery",
      href: "/photo-gallery",
    },
  },
  {
    id: "slide-4",
    image: "/images/hero/hero-slide-4.jpg?v=2",
    badge: "VIBRANT STUDENT COMMUNITY",
    hindiHeadline: "खेलकूद, शारीरिक दक्षता एवं राष्ट्रीय चेतना।",
    englishTitle: "Shaping Tomorrow's Leaders Today.",
    description: "आधुनिक बहुमंजिला शैक्षणिक भवन, खुले खेल मैदान, समृद्ध पुस्तकालय एवं कंप्यूटर लैब की उत्तम व्यवस्था।",
    primaryCta: {
      label: "Apply for Admission",
      href: "/contact-us",
    },
    secondaryCta: {
      label: "Explore Campus",
      href: "/photo-gallery",
    },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-rotation every 4.5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [isPlaying, totalSlides]);

  // Pause when browser tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      aria-label="CGS Mahavidyalaya Hero Showcase"
      className="relative w-full h-[580px] sm:h-[640px] md:h-[700px] overflow-hidden bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image - 100% visible, unobstructed, 4K quality */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.englishTitle}
                fill
                priority={index === 0}
                unoptimized
                sizes="100vw"
                className="object-cover object-center transform scale-100 transition-transform duration-[6000ms] ease-out motion-reduce:transform-none"
              />
              {/* Subtle natural shadow vignette to make text pop while keeping 100% of the image visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Slide Content - Sits directly on top of the image with NO enclosing box */}
            <div className="relative z-20 h-full max-w-[1360px] mx-auto px-4 sm:px-6 flex flex-col justify-center">
              <div className="max-w-2xl sm:max-w-3xl space-y-4 sm:space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#d5ad55] text-[#0a1c32] px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-[#002550]" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Titles */}
                <div>
                  <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-2.5 drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
                    {slide.englishTitle}
                  </h1>
                  <p className="font-hindi text-xl sm:text-2xl md:text-3xl font-medium text-[#ffdf9e] leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {slide.hindiHeadline}
                  </p>
                </div>

                {/* Subtitle / Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-normal max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={slide.primaryCta.href}
                    className="inline-flex items-center gap-2 bg-[#d5ad55] hover:bg-[#c7a04a] text-[#0a1c32] font-semibold text-xs sm:text-sm px-6 py-3 rounded shadow-xl hover:shadow-2xl transition-all duration-200 group"
                  >
                    <span>{slide.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={slide.secondaryCta.href}
                    className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white border border-white/50 font-medium text-xs sm:text-sm px-6 py-3 rounded backdrop-blur-sm transition-all duration-200 shadow-xl"
                  >
                    <span>{slide.secondaryCta.label}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Controls */}
      <div className="absolute z-30 bottom-6 right-4 sm:right-8 flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
          aria-label={isPlaying ? "Pause carousel rotation" : "Play carousel rotation"}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-[#ffdf9e]" /> : <Play className="w-4 h-4 text-white" />}
        </button>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute z-30 bottom-6 left-4 sm:left-8 flex items-center gap-2">
        {HERO_SLIDES.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            onClick={() => setCurrentSlide(dotIndex)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d5ad55] ${
              dotIndex === currentSlide
                ? "w-8 h-2.5 bg-[#d5ad55]"
                : "w-2.5 h-2.5 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${dotIndex + 1}`}
            aria-current={dotIndex === currentSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
