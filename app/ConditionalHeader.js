"use client";

import { usePathname } from "next/navigation";
import Header from "./layout/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Define routes that should NOT have a header
  const hideHeaderRoutes = ["/login", "/dashboard"];
  
  // Check if current path matches or starts with these routes
  const shouldHide = hideHeaderRoutes.some(route => pathname?.startsWith(route));

  if (shouldHide) return null;

  return <Header />;
}