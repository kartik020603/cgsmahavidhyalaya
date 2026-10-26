import type { Metadata } from "next";
import ManagementMessagePage from "@/components/team/ManagementMessagePage";
import { MANAGEMENT_PROFILES } from "@/data/management";

export const metadata: Metadata = {
  title: "Director's Message | श्रीमती रंजनी चौधरी (निदेशक का संदेश)",
  description:
    "चौधरी गुलाब सिंह महाविद्यालय की निदेशक श्रीमती रंजनी चौधरी का संदेश — जिज्ञासा, महिला सशक्तीकरण एवं सकारात्मक परिवर्तन।",
};

export default function RanjniPage() {
  const member = MANAGEMENT_PROFILES.ranjni;
  return <ManagementMessagePage member={member} />;
}
