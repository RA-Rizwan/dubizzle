// ClassifiedsResults.jsx
import React, { useState } from "react";

const Chevron = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="m9 6 6 6-6 6" strokeWidth="2" />
  </svg>
);
const Heart = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M20.8 8.6a5 5 0 0 0-8.1-3.7L12 5.5l-.7-.6a5 5 0 0 0-8.1 3.7c0 5.4 8.8 10 8.8 10s8.8-4.6 8.8-10z" strokeWidth="1.8"/>
  </svg>
);
const LocationPin = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const ChatIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="blue" {...p}>
    <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 1 1 18 0Z" strokeWidth="1.8"/>
  </svg>
);

const fmt = (n) =>
  typeof n === "number" ? `AED ${new Intl.NumberFormat("en-AE").format(n)}` : n;

function Chip({ title, value }) {
  return (
    <div className="rounded-md bg-neutral-100 px-3 py-1 text-[11px] ">
      <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">{title}</div>
      <div className="text-[13px] font-bold text-neutral-800">{value}</div>
    </div>
  );
}

function Premium() {
  return (
    <span className="rounded bg-amber-400 px-2 py-0.5 text-[10px] text-white font-bold">PREMIUM</span>
  );
}
function Verified() {
  return (
    <span className="inline-flex items-center gap-1 rounded bg-green-50 px-2 py-0.5 text-[12px] font-bold text-green-500">
       <img className="h-4 w-4" src="../src/assets/verified-business.svg" alt="" /> VERIFIED BUSINESS
    </span>
  );
}

function ImageCarousel({ images = [] }) {
  const [i, setI] = React.useState(0);
  const len = images.length;
  const prev = () => setI((p) => (p - 1 + len) % len);
  const next = () => setI((p) => (p + 1) % len);

  if (!len) return <div className="h-[190px] w-[240px] rounded-lg bg-neutral-100" />;

  return (
    <div className="group relative h-[230px] w-[280px] overflow-hidden rounded-lg bg-neutral-100">
      <img src={images[i]} alt="" className="h-full w-full object-cover" />

      {/* top-left badge etc. */}
      <div className="absolute left-2 top-2 flex items-center gap-2">
      <Verified/>
      </div>

      {/* SAVE */}
      <button className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow">
        <img src="../src/assets/heart-new.svg" alt="" />
      </button>

      {/* arrows — hidden by default, shown on hover/focus */}
      {len > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white
                       opacity-0 pointer-events-none transition-opacity
                       group-hover:opacity-100 group-hover:pointer-events-auto
                       "
          >
            {/* left chevron */}
            <svg className="h-5 w-5 -rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 6 6 6-6 6" strokeWidth="2" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white
                       opacity-0 pointer-events-none transition-opacity
                       group-hover:opacity-100 group-hover:pointer-events-auto
                       "
          >
            {/* right chevron */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 6 6 6-6 6" strokeWidth="2" />
            </svg>
          </button>
        </>
      )}

      {/* pager */}
      {len > 1 && (
        <div className="absolute bottom-2 left-2 rounded bg-black/60 px-1.5 py-0.5 text-[11px] text-white">
          {i + 1}/{len}
        </div>
      )}
    </div>
  );
}


/* ---------- one result row ---------- */
function ResultRow({
  images,
  title,
  breadcrumb, 
  price,
  badges = { premium: false },
  chips = { Age: "Brand New", Condition: "Flawless", Color: "Other", Usage: "Never Used" },
  location = "Jumeirah Village Circle (JVC), Dubai",
  date = "08 October 2025",
}) {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-3 rounded-xl  bg-white p-3 ">
      <ImageCarousel images={images} />
      <div>
        {/* title row */}
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-0.5">
            <a href="#" className="block text-[15px] font-bold text-neutral-900 hover:underline">
              {title}
                      </a>
                                  <div className="text-sm text-neutral-700">{breadcrumb}</div>

          </div>
          {badges.premium && <Premium />}
        </div>

        {/* price */}
        <div className="mt-1 text-[17px] font-bold tracking-tight text-neutral-900">
          {fmt(price)}
        </div>

        {/* chips */}
        <div className="mt-2 grid grid-flow-col auto-cols-max gap-2">
          {Object.entries(chips).map(([k, v]) => (
            <Chip key={k} title={k} value={v} />
          ))}
        </div>

        {/* location + date + chat */}
        <div className="mt-2 text-[15px] text-neutral-800">
         <div className="flex flex-wrap items-center gap-x-3 gap-y-2">  <span className="inline-flex items-center gap-1">
            <LocationPin className="h-4 w-4 text-neutral-700" />
            {location}
          </span>
          <span className="text-neutral-400">•</span>
          <span>{date}</span></div>

          <a
            href="#"
            className="ml-2 inline-flex items-center gap-3 rounded-md bg-blue-50 px-4 py-2 font-semibold text-neutral-800 mt-3"
          >
            <ChatIcon className="h-4 w-4" />
            Chat
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- section (maps results) ---------- */
export default function ClassifiedsResults() {
  const results = [
    {
      images: ["../src/assets/b1.webp", "../src/assets/b2.webp"],
      title: "Brand new Twin Size Double bed storage nd medical",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 450,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Flawless", Color: "Other", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
    },
    {
      images: ["../src/assets/bb2.webp"],
      title: "Queen bed frame for sale 150×190 size",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 550,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Excellent", Color: "Gray", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
    },
    {
      images: ["../src/assets/bbb1.webp","../src/assets/bbbb1.webp"],
      title: "Brand New single size bed frame available for sale",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 180,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Excellent", Color: "Other", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
      },
     {
      images: ["../src/assets/b1.webp", "../src/assets/b2.webp"],
      title: "Brand new Twin Size Double bed storage nd medical",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 450,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Flawless", Color: "Other", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
    },
    {
      images: ["../src/assets/bb2.webp"],
      title: "Queen bed frame for sale 150×190 size",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 550,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Excellent", Color: "Gray", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
    },
    {
      images: ["../src/assets/bbb1.webp","../src/assets/bbbb1.webp"],
      title: "Brand New single size bed frame available for sale",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 180,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Excellent", Color: "Other", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
      },
     {
      images: ["../src/assets/b1.webp", "../src/assets/b2.webp"],
      title: "Brand new Twin Size Double bed storage nd medical",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 450,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Flawless", Color: "Other", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
    },
    {
      images: ["../src/assets/bb2.webp"],
      title: "Queen bed frame for sale 150×190 size",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 550,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Excellent", Color: "Gray", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
    },
    {
      images: ["../src/assets/bbb1.webp","../src/assets/bbbb1.webp"],
      title: "Brand New single size bed frame available for sale",
      breadcrumb: "Furniture • Beds & Bed Sets",
      price: 180,
      badges: { premium: true },
      chips: { Age: "Brand New", Condition: "Excellent", Color: "Other", Usage: "Never Used" },
      location: "Jumeirah Village Circle (JVC), Dubai",
      date: "08 October 2025",
    },
  ];

  return (
    <section className="mx-8 max-w-4xl px-4 py-4 space-y-3">
      {results.map((r, i) => (
         <> <ResultRow key={i} {...r} />
          < hr className="text-neutral-200" /></>
      ))}
    </section>
  );
}
