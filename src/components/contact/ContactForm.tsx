"use client";

import { useState } from "react";
import { Send, Phone, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";
import { COLLEGE_INFO } from "@/data/college";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  course?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [validatedState, setValidatedState] = useState<"idle" | "validated">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

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
      newErrors.message = "कृपया अपना संदेश या पूछताछ दर्ज करें (कम से कम 5 अक्षर)।";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setValidatedState("validated");
    }
  };

  const getCustomWhatsAppUrl = () => {
    const text = `नमस्ते, मेरा नाम ${formData.fullName} है। मोबाइल: ${formData.phone}। विषय/पाठ्यक्रम: ${formData.course || "सामान्य जानकारी"}। मेरा संदेश: ${formData.message}`;
    return `https://wa.me/${COLLEGE_INFO.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="enquiry-form" className="bg-white rounded-2xl p-6 sm:p-10 border border-[#c3c6d1]/60 shadow-lg scroll-mt-24">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#d5ad55] bg-[#002550] px-3 py-1 rounded inline-block mb-2">
          ENQUIRY FORM
        </span>
        <h3 className="font-serif font-bold text-2xl text-[#002550]">
          Send Us an Enquiry / पूछताछ प्रपत्र
        </h3>
        <p className="text-xs sm:text-sm text-[#43474f] mt-1">
          प्रवेश, पाठ्यक्रम एवं संस्थान संबंधी किसी भी जानकारी के लिए नीचे दिया गया विवरण भरें।
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase text-[#002550] mb-1">
            Full Name (पूरा नाम) <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="उदा. राहुल शर्मा"
            className="w-full px-4 py-2.5 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550]"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase text-[#002550] mb-1">
              Mobile Number (मोबाइल नं.) <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="उदा. 9876543210"
              className="w-full px-4 py-2.5 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550]"
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase text-[#002550] mb-1">
              Email (ईमेल) <span className="text-gray-400 font-normal">(वैकल्पिक)</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550]"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Course Selection */}
        <div>
          <label htmlFor="course" className="block text-xs font-bold uppercase text-[#002550] mb-1">
            Subject / Area of Interest (रुचि का क्षेत्र)
          </label>
          <select
            id="course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550] bg-white"
          >
            <option value="">-- पाठ्यक्रम या विषय चुनें --</option>
            <option value="Undergraduate Arts (B.A.)">Undergraduate Arts (बी.ए.)</option>
            <option value="Undergraduate Science (B.Sc.)">Undergraduate Science (बी.एस.सी.)</option>
            <option value="Computer & AI Education">Computer & IT Education (कंप्यूटर शिक्षा)</option>
            <option value="General Admission Enquiry">General Admission Enquiry (सामान्य प्रवेश पूछताछ)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase text-[#002550] mb-1">
            Your Message / Query (संदेश या प्रश्न) <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="आप जो भी प्रश्न पूछना चाहते हैं यहाँ लिखें..."
            className="w-full px-4 py-2.5 rounded-lg border border-[#c3c6d1] text-sm focus:outline-none focus:ring-2 focus:ring-[#d5ad55] focus:border-[#002550]"
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#002550] hover:bg-[#123b70] text-[#ffdf9e] font-semibold text-sm py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Send className="w-4 h-4 text-[#d5ad55]" />
            <span>Validate & Submit Enquiry (प्रपत्र सत्यापित करें)</span>
          </button>
        </div>
      </form>

      {/* Backend Integration Status Notice & WhatsApp Instant Forward */}
      {validatedState === "validated" && (
        <div className="mt-6 p-5 rounded-xl bg-[#eff4ff] border-2 border-[#d5ad55] animate-in fade-in space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-serif font-bold text-sm text-[#002550]">
                विवरण सफलतापूर्वक सत्यापित हुआ (Form Data Validated)
              </p>
              <p className="text-xs text-[#43474f] mt-1 leading-relaxed">
                <strong>सूचना:</strong> लाइव डेटाबेस/सर्वर बैकएंड एपीआई वर्तमान में सक्रिय नहीं
                है। त्वरित सहायता के लिए कृपया सीधे कॉलेज हेल्पलाइन पर कॉल करें या एक क्लिक में
                यही संदेश व्हाट्सएप पर भेजें:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={getCustomWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white py-2.5 px-4 rounded-lg text-xs font-bold transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp (+91 9219707070)</span>
            </a>

            <a
              href={COLLEGE_INFO.contact.phoneTel}
              className="flex items-center justify-center gap-2 bg-[#002550] hover:bg-[#123b70] text-white py-2.5 px-4 rounded-lg text-xs font-bold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#d5ad55]" />
              <span>Call Helpline Directly</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
