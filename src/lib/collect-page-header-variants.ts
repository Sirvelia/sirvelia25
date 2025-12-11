/**
 * This file collects header variants from page exports.
 * 
 * To use page exports:
 * 1. Export `headerVariant` from your page.tsx:
 *    ```tsx
 *    export const headerVariant: HeaderVariant = "white";
 *    ```
 * 
 * 2. Import and register it here:
 *    ```ts
 *    import { headerVariant as aboutUsVariant } from "@/app/about-us/page";
 *    ```
 * 
 * 3. Add to the registry below
 */

import type { HeaderVariant } from "@/components/header/Header";

// Import page header variants here
// Example:
// import { headerVariant as homeVariant } from "@/app/(home)/page";


/**
 * Registry of header variants from page exports.
 * This is populated by importing headerVariant from pages.
 * 
 * For dynamic routes, use route patterns:
 * - "/blog/*" matches all blog posts (e.g., /blog/my-post)
 * - Exact paths still work (e.g., "/about-us")
 */
const pageExportsRegistry: Record<string, HeaderVariant> = {
  // Add mappings here after importing
  // Example:
  // "/": homeVariant || "dark",
  "/blog": "white",
  "/blog/*": "white", // Matches all blog posts
  "/service/*": "primary",
  "/contact": "primary",
};

/**
 * Gets header variant from page exports registry.
 * Supports both exact matches and pattern matches (using * wildcard).
 */
export function getHeaderVariantFromPageExports(
  pathname: string
): HeaderVariant | null {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  
  // 1. Check exact match first
  if (pageExportsRegistry[normalizedPath]) {
    return pageExportsRegistry[normalizedPath];
  }
  
  // 2. Check pattern matches (e.g., "/blog/*" matches "/blog/my-post")
  for (const [pattern, variant] of Object.entries(pageExportsRegistry)) {
    if (pattern.includes("*")) {
      const regexPattern = pattern.replace(/\*/g, "[^/]+").replace(/\//g, "\\/");
      const regex = new RegExp(`^${regexPattern}$`);
      if (regex.test(normalizedPath)) {
        return variant;
      }
    }
  }
  
  return null;
}
