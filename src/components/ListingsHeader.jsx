import React from "react";

const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

const Caret = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="m8 10 4 4 4-4" strokeWidth="2" />
  </svg>
);
const Bookmark = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M6 4h12v17l-6-3-6 3z" strokeWidth="1.8" />
  </svg>
);
const GroupIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="8" r="3" />
    <path d="M2 20a6 6 0 0 1 12 0H2zm10 0a6 6 0 0 1 10 0h-10z" />
  </svg>
);
const UserIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <circle cx="12" cy="8" r="3" />
    <path d="M4 20a8 8 0 0 1 16 0H4z" />
  </svg>
);

export default function ListingsHeader({
  titlePrefix,
  category,
  region,
  totalAds,
  subcats = [],
  onSellerChange,
  onSortClick,
    onSaveSearch,
    sort,
    onViewMore,
  seller
}) {
  return (
    <header className="mx-auto max-w-7xl px-4 mt-4">
      {/* top row */}
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <h1 className="text-[18px] font-bold text-neutral-900">
          {titlePrefix} <span className="text-neutral-900">{category}</span>{" "}
          for sale in <span className="font-bold">{region}</span>{" "}
          <span className="text-neutral-900 font-semibold">• {fmt(totalAds)} Ads</span>
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={onSortClick}
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded ">
              <img src="../src/assets/sorticon.svg" alt="" />
            </span>
            <span className="text-neutral-600">Sort:</span>
            <span className="font-semibold text-neutral-900">{sort}</span>
            <Caret className="h-4 w-4 text-neutral-500" />
          </button>

          <button
            onClick={onSaveSearch}
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm"
          >
            <Bookmark className="h-4 w-4 text-neutral-700" />
            Save Search
          </button>
        </div>
      </div>

      {/* subcategory pills */}
      <div className="mt-3 flex flex-wrap items-center justify-between">
              <div className="flex gap-2">
                   {subcats.map((s) => (
          <a
            key={s.label}
            href={s.href || "#"}
            className="rounded-full border border-neutral-300 px-3 py-2 text-sm text-blue-700 hover:bg-blue-50"
          >
            {s.label} <span className="text-neutral-900">({fmt(s.count)})</span>
          </a>
        ))}
       </div>
        <button
          onClick={onViewMore}
          className="ml-1 rounded-full border border-neutral-300 font-bold px-3 py-2 text-sm text-blue-700 hover:bg-neutral-50"
        >
          View More
        </button>
      </div>

      {/* seller filter pills */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          onClick={() => onSellerChange("all")}
          className={
            "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm " +
            (seller === "all"
              ? "border border-blue-600 text-blue-700 font-bold"
              : "border")
          }
        >
          <GroupIcon className="h-4 w-4 text-blue-700" />
          All Sellers
        </button>

        <button
          onClick={() => onSellerChange("individuals")}
          className={
            "inline-flex items-center gap-2 rounded-md border text-neutral-700 border-neutral-400 px-3 py-2 text-sm " +
            (seller === "individuals" ? "border-blue-600 text-blue-700" : "")
          }
              >
          <UserIcon className="h-4 w-4 text-neutral-700" />
          Individuals
        </button>

        <button
          onClick={() => onSellerChange("businesses")}
          className={
            "inline-flex items-center gap-2 rounded-md border text-neutral-700 border-neutral-400 px-3 py-2 text-sm " +
            (seller === "businesses" ? "border-blue-600 text-blue-700" : "")
          }
        >
          <span><img className="h-4" src="../src/assets/verified-business.svg" alt="" /></span> Businesses
        </button>
      </div>
    </header>
  );
}
