"use client";

import { useState } from "react";
import { menuCategories } from "@/data/menu";
import CategoryTabs from "./CategoryTabs";
import MenuSection from "./MenuSection";

export default function MenuClient() {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);

  const handleSelect = (id: string) => {
    setActiveTab(id);
    // Scroll to section smoothly
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // sticky nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Show only active category
  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <>
      <CategoryTabs
        categories={menuCategories}
        active={activeTab}
        onSelect={handleSelect}
      />

      <main className="relative z-10 pb-4">
        <MenuSection key={activeTab} category={activeCategory} />
      </main>
    </>
  );
}
