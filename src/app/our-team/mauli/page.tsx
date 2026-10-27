import type { Metadata } from "next";
import ManagementMessagePage from "@/components/team/ManagementMessagePage";
import { MANAGEMENT_PROFILES } from "@/data/management";

export const metadata: Metadata = {
  title: "Mauli Chaudhary's Message | मौलि चौधरी (नन्ही प्रेरणा का संदेश)",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय परिवार की नन्ही सदस्या मौलि चौधरी का संदेश — सांस्कृतिक संस्कार, पारंपरिक मूल्य एवं उच्च आदर्शों की प्रेरणा।",
};

export default function MauliPage() {
  const member = MANAGEMENT_PROFILES.mauli;
  return <ManagementMessagePage member={member} />;
}
