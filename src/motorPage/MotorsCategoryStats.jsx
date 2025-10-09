// MotorsCategoryStats.jsx
import React from "react";

const DEFAULT_ITEMS = [
  { label: "Cars", count: 28077, href: "#" },
  { label: "Number Plates", count: 5078, href: "#" },
  { label: "Rental Cars", count: 1779, href: "#" },
  { label: "Auto Accessories", count: 630, href: "#" },
  { label: "Motorcycles", count: 520, href: "#" },
  { label: "Boats", count: 174, href: "#" },
  { label: "Heavy Vehicles", count: 158, href: "#" },
];

const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

export default function MotorsCategoryStats({ items = DEFAULT_ITEMS }) {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 mt-6">
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
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
