"use client";

import Image from "next/image";
import { MenuItem } from "@/data/menu";

const tagConfig = {
  popular: { label: "الأكثر طلباً", labelEn: "Popular", cls: "badge-popular" },
  new:     { label: "جديد",         labelEn: "New",      cls: "badge-new" },
  chef:    { label: "اختيار الشيف", labelEn: "Chef's Pick", cls: "badge-chef" },
};

interface Props {
  item: MenuItem;
}

export default function MenuCard({ item }: Props) {
  const tag = item.tag ? tagConfig[item.tag] : null;

  return (
    <div
      className="menu-card relative rounded-2xl p-5 flex gap-4 items-start"
      style={{
        background: "linear-gradient(135deg, #FFF8E7 0%, #F5DFA0 100%)",
        border: "1.5px solid rgba(168,103,26,0.18)",
        boxShadow: "0 2px 12px rgba(59,31,8,0.07)",
      }}
    >
      {/* Tag badge */}
      {tag && (
        <span
          className={`${tag.cls} absolute top-1 left-1 text-[10px] font-bold px-2 py-0.5 rounded-full`}
        >
          {tag.label}
        </span>
      )}

      {/* Photo or emoji */}
      <div
        className="relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center text-3xl shadow-inner"
        style={{ background: "rgba(200,134,30,0.15)", border: "1px solid rgba(200,134,30,0.25)" }}
      >
        {item.image ? (
          <Image src={item.image} alt={item.nameEn} fill className="object-cover" sizes="64px" />
        ) : (
          item.emoji
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0" dir="rtl">
        {/* Name Arabic */}
        <h3 className="arabic text-xl font-bold leading-tight" style={{ color: "#3B1F08" }}>
          {item.nameAr}
        </h3>
        {/* Name English */}
        <p className="font-display text-xs tracking-wide opacity-60 mb-1.5" style={{ color: "#3B1F08", direction: "ltr", textAlign: "right" }}>
          {item.nameEn}
        </p>
        {/* Description */}
        <p className="arabic text-sm leading-relaxed opacity-75" style={{ color: "#5C3415" }}>
          {item.descAr}
        </p>
      </div>

      {/* Price */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center text-center mt-2">
        <span className="price text-2xl leading-none">${item.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
