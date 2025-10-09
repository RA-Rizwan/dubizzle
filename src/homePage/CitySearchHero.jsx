import { useState } from "react";
import heroBG from "../assets/home-heroBg.jpeg"
const DEFAULT_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "motors", label: "Motors" },
  { value: "jobs", label: "Jobs" },
  { value: "classifieds", label: "Classifieds" },
  { value: "property", label: "Property" },
  { value: "new-projects", label: "New Projects" },
  { value: "community", label: "Community" },
];

const SearchIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <path d="M20 20l-3.5-3.5" strokeWidth="2" />
  </svg>
);

export default function CitySearchHero({
  city = "Ras al Khaimah",
  categories = DEFAULT_CATEGORIES,
  onSearch, 
}) {
  const [active, setActive] = useState("all");
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const payload = { q, category: active, city };
    if (onSearch) return onSearch(payload);
    const params = new URLSearchParams(payload).toString();
    window.location.href = `/search?${params}`;
  };

  return (
    <section className="relative px-16 mt-3">
      <div className="relative h-[260px] sm:h-[300px] lg:h-[255px] px-16 overflow-hidden rounded-xl">
        <img
          src={heroBG}
          alt={`${city} skyline`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-6">
          <h1 className="max-w-5xl text-center text-white drop-shadow-sm text-xl sm:text-2xl lg:text-2xl font-semibold">
            The best place to buy your house, sell your car or find a job in{" "}
            {city}
          </h1>

          <div className="mt-4 w-full max-w-5xl rounded-xl border border-white/20 bg-[#21222399] backdrop-blur-md p-3 sm:p-4">
            <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-1 text-white/95 text-sm font-semibold">
              <span className="shrink-0">Searching in</span>
              <div className="flex items-center justify-between w-full px-8">
                {categories.map((c) => {
                  const isActive = active === c.value;
                  return (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => setActive(c.value)}
                      className={
                        "whitespace-nowrap rounded-full px-3 py-1.5 transition " +
                        (isActive
                          ? "bg-red-600 text-white"
                          : "text-white/90 hover:text-white hover:bg-white/10")
                      }
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <form
              onSubmit={submit}
              className="mt-3 flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search for anything"
                  aria-label="Search for anything"
                  className="h-12 w-full rounded bg-white text-neutral-800 placeholder:text-neutral-400 shadow focus:outline-none focus:ring-2 focus:ring-red-500 pl-4 pr-11"
                />
                <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
              </div>

              <button
                type="submit"
                className="h-12 shrink-0 rounded bg-red-600 px-6 font-semibold text-white hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
