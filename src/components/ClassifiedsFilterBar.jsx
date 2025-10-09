const ChevronDown = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="m6 9 6 6 6-6" strokeWidth="2" />
  </svg>
);
const SearchIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <path d="M20 20l-3.5-3.5" strokeWidth="2" />
  </svg>
);
const Pin = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" strokeWidth="2" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export default function ClassifiedsFilterBar() {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 mt-6">
      <div className="rounded-2xl border border-neutral-400 bg-white shadow-lg overflow-hidden">
        {/* segments */}
        <div className="grid grid-cols-5 divide-x-2 divide-neutral-200">
          {/* City */}
          <button className="flex items-center justify-between px-4 py-3 text-left">
            <div>
              <div className="text-[12px] font-bold text-neutral-800">City</div>
              <div className="text-[14px] text-neutral-700">All Cities</div>
            </div>
            <ChevronDown className="ml-3 h-4 w-4 text-neutral-900" />
          </button>

          {/* Keyword */}
          <label className="flex items-center px-4 py-2.5">
            <div className="w-full">
              <div className="text-[12px] font-bold text-neutral-800">Keyword</div>
              <div className="relative mt-0.5">
                <input
                  type="text"
                  placeholder="Search anything in classifieds..."
                  className="w-full bg-transparent pr-7 text-[14px] placeholder:text-neutral-400 focus:outline-none"
                />
                <SearchIcon className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-900" />
              </div>
            </div>
          </label>

          {/* Neighborhood */}
          <label className="flex items-center px-4 py-2.5">
            <div className="w-full">
              <div className="text-[12px] font-bold text-neutral-800">Neighborhood</div>
              <div className="relative mt-0.5">
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full bg-transparent pr-7 text-[14px] placeholder:text-neutral-400 focus:outline-none"
                />
                <Pin className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-900" />
              </div>
            </div>
          </label>

          {/* Price (AED) */}
          <button className="flex items-center justify-between px-4 py-3 text-left">
            <div>
              <div className="text-[12px] font-bold text-neutral-800">Price (AED)</div>
              <div className="text-[14px] text-neutral-500">Select</div>
            </div>
            <ChevronDown className="ml-3 h-4 w-4 text-neutral-900" />
          </button>

          {/* Filters */}
          <button className="flex items-center justify-between px-4 py-3 text-left">
            <div>
              <div className="text-[12px] font-bold text-neutral-800">Filters</div>
              <div className="text-[14px] text-neutral-500">Category, Age, etc</div>
            </div>
            <ChevronDown className="ml-3 h-4 w-4 text-neutral-900" />
          </button>
        </div>
      </div>
    </section>
  );
}
