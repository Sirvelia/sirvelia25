"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TabItem {
    label: string;
    content: React.ReactNode;
}

interface VerticalTabsProps {
    tabs: TabItem[];
    variant?: "light" | "dark";
    numbered?: boolean;
    defaultTab?: number;
    className?: string;
}

export default function VerticalTabs({
    tabs,
    variant = "light",
    numbered = false,
    defaultTab = 0,
    className,
}: VerticalTabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const getVariantStyles = (variant: "light" | "dark") => {
        switch (variant) {
            case "dark":
                return {
                    container: "bg-website-background-ultra-dark",
                    tabButton: {
                        active: "bg-website-background-ultra-dark text-text-light border-accent-semi-dark before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_left,#05DAFF_0px,rgba(5,218,255,0)_200px)] before:rounded-xl before:opacity-[15%] shadow-[0_0_0_3px_#05DAFF14]",
                        inactive: "bg-website-background-ultra-dark text-text-dark-muted border-[#2B3550] hover:text-text-light hover:border-accent-semi-dark ",
                    },
                    tabContent: "text-white",
                };
            case "light":
            default:
                return {
                    container: "bg-website-background-ultra-light",
                    tabButton: {
                        active: "bg-white text-foreground border-primary before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_left,#05DAFF_0px,rgba(5,218,255,0)_200px)] before:rounded-xl before:opacity-[15%] shadow-[0_0_0_3px_#EBEEF4]",
                        inactive: "bg-white text-text-dark-muted border-transparent hover:text-text-dark hover:border-text-dark-muted",
                    },
                    tabContent: "text-text-dark",
                };
        }
    };

    const styles = getVariantStyles(variant);

    if (!tabs || tabs.length === 0) {
        return null;
    }

    return (
        <div className={cn("flex flex-col md:flex-row gap-4 md:gap-8", className)}>
            {/* Tab Buttons */}
            <div className="flex md:basis-1/3 md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={cn(
                            "cursor-pointer relative px-4 py-3 rounded-lg border transition-all text-left whitespace-nowrap flex items-center gap-2",
                            "focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1",
                            activeTab === index
                                ? styles.tabButton.active
                                : styles.tabButton.inactive
                        )}
                        aria-selected={activeTab === index}
                        role="tab"
                    >
                        {numbered && (
                            <span className="font-medium mr-2 block h-6 w-6 flex items-center justify-center text-white bg-primary rounded-full text-sm">
                                {index + 1}
                            </span>
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div
                className={cn(
                    "flex-1",
                    styles.tabContent
                )}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
            >
                <Card variant={variant} hasGradient gradientPosition="right">
                    <CardContent>
                        {tabs[activeTab]?.content}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}