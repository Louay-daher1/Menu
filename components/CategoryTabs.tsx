"use client";

import Image from "next/image";
import { MenuCategory } from "@/data/menu";

interface Props {
  categories: MenuCategory[];
  active: string;
  onSelect: (id: string) => void;
}

export default function CategoryTabs({ categories, active, onSelect }: Props) {
  return (
    <nav
      className="sticky top-0 z-30 w-full overflow-x-auto"
      style={{ background: "rgba(245,223,160,0.95)", backdropFilter: "blur(8px)", borderBottom: "2px solid rgba(59,31,8,0.12)" }}
    >
      <div className="flex gap-1 px-4 py-2 min-w-max mx-auto max-w-3xl">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all duration-200 min-w-[70px] border-2 ${
              active === cat.id
                ? "tab-active border-transparent shadow-md"
                : "bg-transparent border-transparent hover:bg-amber-200/60"
            }`}
            style={active !== cat.id ? { color: "var(--brown)" } : {}}
          >
            {cat.image ? (
              <span className="relative block w-8 h-8 rounded-lg overflow-hidden shrink-0">
                <Image src={cat.image} alt={cat.nameEn} fill className="object-cover" sizes="32px" />
              </span>
            ) : (
              <span className="text-xl leading-none">{cat.icon}</span>
            )}
            <span
              className="arabic text-xs font-semibold"
              style={{ color: active === cat.id ? "var(--sand-bg)" : "var(--brown)" }}
            >
              {cat.nameAr}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
