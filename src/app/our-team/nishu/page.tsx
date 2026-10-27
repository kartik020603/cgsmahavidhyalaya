import type { Metadata } from "next";
import ManagementMessagePage from "@/components/team/ManagementMessagePage";
import { MANAGEMENT_PROFILES } from "@/data/management";

export const metadata: Metadata = {
  title: "Managing Director's Message | श्री नीशू चौधरी (प्रबंध निदेशक का संदेश)",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय के प्रबंध निदेशक श्री नीशू चौधरी का संदेश — रणनीतिक प्रबंधन, छात्र कल्याण एवं संस्थागत विकास।",
};

export default function NishuPage() {
  const member = MANAGEMENT_PROFILES.nishu;
  return <ManagementMessagePage member={member} />;
}
