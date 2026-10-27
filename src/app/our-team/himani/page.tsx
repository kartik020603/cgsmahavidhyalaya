import type { Metadata } from "next";
import ManagementMessagePage from "@/components/team/ManagementMessagePage";
import { MANAGEMENT_PROFILES } from "@/data/management";

export const metadata: Metadata = {
  title: "Vice Principal's Message | श्रीमती हिमानी चौधरी (उप-प्राचार्या का संदेश)",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय की उप-प्राचार्या श्रीमती हिमानी चौधरी का संदेश — शैक्षणिक अनुशासन, छात्र मार्गदर्शन एवं चारित्रिक निर्माण।",
};

export default function HimaniPage() {
  const member = MANAGEMENT_PROFILES.himani;
  return <ManagementMessagePage member={member} />;
}
