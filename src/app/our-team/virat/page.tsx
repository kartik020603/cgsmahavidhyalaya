import type { Metadata } from "next";
import ManagementMessagePage from "@/components/team/ManagementMessagePage";
import { MANAGEMENT_PROFILES } from "@/data/management";

export const metadata: Metadata = {
  title: "Director's Message | श्री विराट चौधरी (निदेशक का संदेश)",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय के निदेशक श्री विराट चौधरी का संदेश — 21वीं सदी की तकनीकी दक्षता, डिजिटल साक्षरता एवं भविष्य निर्माण।",
};

export default function ViratPage() {
  const member = MANAGEMENT_PROFILES.virat;
  return <ManagementMessagePage member={member} />;
}
