import type { HeaderVariant } from "@/components/header/Header";
import { getHeaderVariantFromPageExports } from "./collect-page-header-variants";

/**
 * Route-based header variant configuration.
 * 
 * You can specify header variants for specific routes here.
 * This is the simplest approach - just add your routes here.
 * 
 * Supports both exact matches and pattern matches:
 * - Exact: "/about-us" matches exactly "/about-us"
 * - Pattern: "/blog/*" matches all blog posts (e.g., "/blog/my-post")
 * 
 * Route matching is done by exact pathname match, then pattern match, 
 * with fallback to page exports, then default.
 * 
 * Example:
 * ```ts
 * export const routeHeaderVariants: Record<string, HeaderVariant> = {
 *   "/about-us": "white",
 *   "/contact": "primary",
 *   "/blog/*": "white", // Matches all blog posts
 * };
 * ```
 */
export const routeHeaderVariants: Record<string, HeaderVariant> = {
  // Add route-specific variants here
  // Example:
  // "/about-us": "white",
  // "/contact": "primary",
  // "/blog/*": "white", // Matches all blog posts
};

/**
 * Checks if a pathname matches a route pattern (supports * wildcard).
 */
function matchesRoutePattern(pattern: string, pathname: string): boolean {
  if (!pattern.includes("*")) {
    return pattern === pathname;
  }
  
  const regexPattern = pattern.replace(/\*/g, "[^/]+").replace(/\//g, "\\/");
  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(pathname);
}

/**
 * Gets the header variant for a given pathname.
 * 
 * Priority order:
 * 1. Route configuration exact match (routeHeaderVariants)
 * 2. Route configuration pattern match (e.g., "/blog/*")
 * 3. Page exports (from collect-page-header-variants.ts)
 * 4. Default ("dark")
 * 
 * @param pathname - The current pathname (e.g., "/about-us" or "/blog/my-post")
 * @returns The header variant for the route
 */
export function getHeaderVariantForRoute(pathname: string): HeaderVariant {
  // Normalize pathname (remove trailing slash, except for root)
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  
  // 1. Check route configuration exact match first (highest priority)
  if (routeHeaderVariants[normalizedPath]) {
    return routeHeaderVariants[normalizedPath];
  }
  
  // 2. Check route configuration pattern matches
  for (const [pattern, variant] of Object.entries(routeHeaderVariants)) {
    if (matchesRoutePattern(pattern, normalizedPath)) {
      return variant;
    }
  }
  
  // 3. Check page exports
  const pageExportVariant = getHeaderVariantFromPageExports(normalizedPath);
  if (pageExportVariant) {
    return pageExportVariant;
  }
  
  // 4. Default fallback
  return "dark";
}
