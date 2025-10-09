// MotorsCategoryStats.jsx
import React from "react";

const DEFAULT_ITEMS = [
  { label: "Home Maintenance", count: 2650, href: "#" },
  { label: "Movers & Removals", count: 1426, href: "#" },
  { label: "Tutors & Classes", count: 1390, href: "#" },
  { label: "Consultancy Services", count: 990, href: "#" },
  { label: "Other Services", count: 474, href: "#" },
  { label: "Freelancers", count: 446, href: "#" },
];

const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

export default function CommunityCategoryStats({ items = DEFAULT_ITEMS }) {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 my-10">
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href || "#"}
            className="block rounded border border-neutral-100 bg-white px-6 py-4 text-center shadow-xl hover:shadow-md"
          >
            <div className="text-[12px] font-bold uppercase tracking-wide text-neutral-500">
              {it.label}
            </div>
            <div className="mt-2 font-semibold text-neutral-800 tabular-nums">
              {fmt(it.count)}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
