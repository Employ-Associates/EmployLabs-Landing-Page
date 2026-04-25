"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/employ-lab/Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Always render EmployLabs footer - removed product page exclusion
  return <Footer />;
}
