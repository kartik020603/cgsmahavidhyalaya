import CollegeLogo from "@/components/ui/CollegeLogo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a1c32]/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
      {/* Top Animated Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#123b70] overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#d5ad55] via-[#ffdf9e] to-[#d5ad55] animate-pulse w-full" />
      </div>

      <div className="flex flex-col items-center space-y-4 text-center">
        {/* Emblem with glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#d5ad55]/20 rounded-full blur-xl animate-ping opacity-40" />
          <CollegeLogo size={72} className="relative z-10 animate-bounce duration-1000" />
        </div>

        {/* Golden Spinner Ring */}
        <div className="w-8 h-8 rounded-full border-2 border-[#123b70] border-t-[#d5ad55] animate-spin" />

        {/* Text */}
        <div className="space-y-1">
          <p className="font-serif font-bold text-lg text-white tracking-wide">
            CGS Mahavidyalaya
          </p>
          <p className="font-hindi text-sm text-[#ffdf9e]">
            ज्ञान • संस्कार • सफलता
          </p>
        </div>
      </div>
    </div>
  );
}
