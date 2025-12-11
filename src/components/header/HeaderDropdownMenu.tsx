"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface HeaderDropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function HeaderDropdownMenu({
  trigger,
  children,
  className,
  contentClassName,
}: HeaderDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div ref={dropdownRef} className={cn("", className)}>
      <button
        className="flex items-center gap-1 hover:underline cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {trigger}
      </button>
      {isOpen && (
        <div
          className={cn(
            "absolute top-full left-0 right-0 w-full bg-primary text-primary-foreground z-50 [background-image:linear-gradient(to_bottom,transparent_30%,rgba(18,22,33,0.3)_100%)]",
            contentClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

