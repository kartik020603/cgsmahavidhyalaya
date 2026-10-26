"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import OurTeamDropdown from "./OurTeamDropdown";

export default function DesktopNavigation() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    // OurTeamDropdown handles /our-team
    { label: "Photo Gallery", href: "/photo-gallery" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-7">
      <Link
        href="/"
        className={cn(
          "font-medium text-sm transition-colors py-2",
          pathname === "/"
            ? "text-[#002550] font-bold border-b-2 border-[#d5ad55]"
            : "text-[#43474f] hover:text-[#002550]"
        )}
      >
        Home
      </Link>

      <Link
        href="/about-us"
        className={cn(
          "font-medium text-sm transition-colors py-2",
          pathname === "/about-us"
            ? "text-[#002550] font-bold border-b-2 border-[#d5ad55]"
            : "text-[#43474f] hover:text-[#002550]"
        )}
      >
        About Us
      </Link>

      <OurTeamDropdown />

      <Link
        href="/photo-gallery"
        className={cn(
          "font-medium text-sm transition-colors py-2",
          pathname === "/photo-gallery"
            ? "text-[#002550] font-bold border-b-2 border-[#d5ad55]"
            : "text-[#43474f] hover:text-[#002550]"
        )}
      >
        Photo Gallery
      </Link>

      <Link
        href="/contact-us"
        className={cn(
          "font-medium text-sm transition-colors py-2",
          pathname === "/contact-us"
            ? "text-[#002550] font-bold border-b-2 border-[#d5ad55]"
            : "text-[#43474f] hover:text-[#002550]"
        )}
      >
        Contact Us
      </Link>
    </nav>
  );
}
