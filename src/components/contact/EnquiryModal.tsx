"use client";

import { useEffect, useState } from "react";
import { X, Send, Phone, MessageSquare, AlertCircle, CheckCircle, ShieldCheck } from "lucide-react";
import CollegeLogo from "@/components/ui/CollegeLogo";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { COLLEGE_INFO } from "@/data/college";

export default function EnquiryModal() {
  const { isOpen, closeEnquiryModal } = useEnquiryModal();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validatedState, setValidatedState] = useState(false);

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeEnquiryModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeEnquiryModal]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "कृपया अपना पूरा नाम दर्ज करें (कम से कम 2 अक्षर)।";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "कृपया मान्य ईमेल पता दर्ज करें।";
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "कृपया अपनी पूछताछ या संदेश लिखें (कम से कम 5 अक्षर)।";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setValidatedState(true);
    }
  };

  const getCustomWhatsAppUrl = () => {
    const text = `नमस्ते, मेरा नाम ${formData.fullName} है। मोबाइल: ${formData.phone}। विषय/पाठ्यक्रम: ${formData.course || "सामान्य प्रवेश पूछताछ"}। मेरा संदेश: ${formData.message}`;
    return `https://wa.me/${COLLEGE_INFO.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0a1c32]/80 backdrop-blur-sm transition-opacity"
        onClick={closeEnquiryModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Body */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-[#d5ad55] overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-[#002550] text-white p-5 flex items-center justify-between border-b border-[#d5ad55]/30">
          <div className="flex items-center gap-3">
            <CollegeLogo size={42} />
            <div>
              <h3 id="enquiry-modal-title" className="font-serif font-bold text-lg text-[#ffdf9e] leading-snug">
                Enquire for Admission
              </h3>
              <p className="font-hindi text-xs text-gray-200">
                चौधरी गुलाब सिंह महाविद्यालय — प्रवेश परामर्श
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeEnquiryModal}
            className="p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#d5ad55]"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area with scroll */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="modalFullName" className="block text-xs font-bold uppercase text-[#002550] mb-1">
                Full Name (पूरा नाम) <span className="text-red-500">*</span>
              </label>
              <input
                id="modalFullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="उदा. अमित कुमार"
                className="w-full px-3.5 py-2 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550]"
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modalPhone" className="block text-xs font-bold uppercase text-[#002550] mb-1">
                  Mobile (मोबाइल नं.) <span className="text-red-500">*</span>
                </label>
                <input
                  id="modalPhone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="उदा. 9219707070"
                  className="w-full px-3.5 py-2 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550]"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="modalEmail" className="block text-xs font-bold uppercase text-[#002550] mb-1">
                  Email (ईमेल) <span className="text-gray-400 font-normal">(वैकल्पिक)</span>
                </label>
                <input
                  id="modalEmail"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@gmail.com"
                  className="w-full px-3.5 py-2 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550]"
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Course */}
            <div>
              <label htmlFor="modalCourse" className="block text-xs font-bold uppercase text-[#002550] mb-1">
                Program of Interest (रुचि का पाठ्यक्रम)
              </label>
              <select
                id="modalCourse"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550] bg-white"
              >
                <option value="">-- पाठ्यक्रम या विषय चुनें --</option>
                <option value="Undergraduate Arts (B.A.)">Undergraduate Arts (बी.ए.)</option>
                <option value="Undergraduate Science (B.Sc.)">Undergraduate Science (बी.एस.सी.)</option>
                <option value="Computer & AI Education">Computer & IT Education (कंप्यूटर शिक्षा)</option>
                <option value="General Admission Enquiry">General Admission Enquiry (सामान्य प्रवेश)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="modalMessage" className="block text-xs font-bold uppercase text-[#002550] mb-1">
                Your Query / Message (संदेश) <span className="text-red-500">*</span>
              </label>
              <textarea
                id="modalMessage"
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="प्रवेश अथवा पाठ्यक्रम संबंधी अपना प्रश्न यहाँ लिखें..."
                className="w-full px-3.5 py-2 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550]"
              />
              {errors.message && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#002550] hover:bg-[#123b70] text-[#ffdf9e] font-semibold text-sm py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4 text-[#d5ad55]" />
              <span>Validate & Send Enquiry (प्रपत्र सत्यापित करें)</span>
            </button>
          </form>

          {/* Validation Notice & 1-Click WhatsApp Forward */}
          {validatedState && (
            <div className="p-4 rounded-xl bg-[#eff4ff] border-2 border-[#d5ad55] space-y-3 animate-in fade-in">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-xs text-[#002550]">
                    विवरण सत्यापित हुआ (Details Verified)
                  </p>
                  <p className="text-[11px] text-[#43474f] leading-snug mt-0.5">
                    सीधे प्रवेश अधिकारी से बात करने के लिए कॉल करें या नीचे दिए बटन पर क्लिक
                    करके यह विवरण तुरंत व्हाट्सएप पर भेजें:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={getCustomWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebd59] text-white py-2 px-3 rounded-lg text-xs font-bold shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={COLLEGE_INFO.contact.phoneTel}
                  className="flex items-center justify-center gap-1.5 bg-[#002550] hover:bg-[#123b70] text-white py-2 px-3 rounded-lg text-xs font-bold shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d5ad55]" />
                  <span>Call Helpline</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer info strip */}
        <div className="bg-[#f8f9ff] px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#737780]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d5ad55]" />
            <span>Manikpur, Sadabad (Hathras)</span>
          </span>
          <a href={COLLEGE_INFO.contact.phoneTel} className="font-bold text-[#123b70] hover:underline">
            {COLLEGE_INFO.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
