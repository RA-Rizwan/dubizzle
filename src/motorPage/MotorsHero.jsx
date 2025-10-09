// MotorsHero.jsx
import React, { useState } from "react";

const SearchIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <path d="M20 20l-3.5-3.5" strokeWidth="2" />
  </svg>
);

export default function MotorsHero({
  backgroundUrl = "../src/assets/motors-bg.png",                           // e.g. import bg from "../assets/motors-hero.jpg"
  title = "Everyone is on dubizzle! Are you?",
  placeholder = "Search for motors",
  onSearch,                                // optional: ({ q }) => {}
}) {
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (onSearch) return onSearch({ q });
    // fallback
    window.location.href = `/motors/search?q=${encodeURIComponent(q)}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 mt-3">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={backgroundUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* subtle gradient for text legibility (keeps the red vibe) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/10" />

        {/* content */}
        <div className="relative flex min-h-[320px] items-center justify-center px-4">
          <div className="w-full max-w-2xl">
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow">
              {title}
            </h1>

            <form onSubmit={submit} className="mx-auto mt-4 flex items-center">
              <div className="relative w-full">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  className="h-12 w-full rounded-xl bg-white/95 pl-4 pr-12 text-[15px] text-neutral-800 placeholder:text-neutral-400 shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white hover:bg-neutral-50"
                >
                  <SearchIcon className="h-5 w-5 text-neutral-600" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
