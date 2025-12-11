"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import { getHeaderVariantForRoute } from "@/lib/get-header-variant";

/**
 * Client component wrapper for Header that reads the variant from the current route.
 * 
 * Usage:
 * 1. Add routes to `routeHeaderVariants` in `@/lib/get-header-variant.ts`, OR
 * 2. Export `headerVariant` from your page.tsx file (requires additional setup)
 * 
 * Example in page.tsx:
 * ```tsx
 * export const headerVariant: HeaderVariant = "white";
 * 
 * export default function MyPage() {
 *   return <div>...</div>;
 * }
 * ```
 */
export default function HeaderWrapper() {
  const pathname = usePathname();
  const variant = getHeaderVariantForRoute(pathname);
  
  return <Header variant={variant} />;
}
