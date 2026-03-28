"use client";

import Image from "next/image";
import { MenuCategory } from "@/data/menu";
import MenuCard from "./MenuCard";

interface Props {
  category: MenuCategory;
}

export default function MenuSection({ category }: Props) {
  return (
    <section id={category.id} className="px-4 py-6 max-w-2xl mx-auto">
      {category.image && (
        <div className="relative w-full max-h-44 h-36 mb-4 rounded-2xl overflow-hidden border border-[rgba(168,103,26,0.2)] shadow-md">
          <Image
            src={category.image}
            alt={category.nameEn}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
          />
        </div>
      )}
      {/* Section header */}
      <div className="ornament mb-6">
        <span />
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <h2 className="arabic text-3xl font-bold" style={{ color: "#3B1F08" }}>
              {category.nameAr}
            </h2>
          </div>
          <p className="font-display text-xs tracking-widest uppercase opacity-50" style={{ color: "#3B1F08" }}>
            {category.nameEn}
          </p>
        </div>
        <span />
      </div>

      {/* Cards grid */}
      <div className="stagger flex flex-col gap-3">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
