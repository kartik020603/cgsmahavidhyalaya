import type { Metadata } from "next";
import ManagementMessagePage from "@/components/team/ManagementMessagePage";
import { MANAGEMENT_PROFILES } from "@/data/management";

export const metadata: Metadata = {
  title: "Prabandhak's Message | श्री हरिओम चौधरी (प्रबंधक का संदेश)",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय के प्रबंधक श्री हरिओम चौधरी का संदेश — अनुशासन, उद्देश्य और मूल्यपरक उच्च शिक्षा की दिशा में मार्गदर्शन।",
};

export default function PrabandhakPage() {
  const member = MANAGEMENT_PROFILES.prabandhak;
  return <ManagementMessagePage member={member} />;
}
