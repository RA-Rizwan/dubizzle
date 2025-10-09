import{ useEffect, useMemo, useRef, useState } from "react";

const ChevronDown = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="m6 9 6 6 6-6" strokeWidth="1.8" />
  </svg>
);
const Check = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M4 12l4 4L20 6" strokeWidth="2.2" />
  </svg>
);

export const CITIES = [
  { value: "all", label: "All Cities (UAE)" },
  { value: "dubai", label: "Dubai" },
  { value: "abu-dhabi", label: "Abu Dhabi" },
  { value: "rak", label: "Ras al Khaimah" },
  { value: "sharjah", label: "Sharjah" },
  { value: "fujairah", label: "Fujairah" },
  { value: "ajman", label: "Ajman" },
  { value: "uaq", label: "Umm al Quwain" },
  { value: "al-ain", label: "Al Ain" },
];

export default function CitySelect({
  value = "dubai",
  onChange = () => {},
  labelClassName = "text-red-600",
}) {
  const [open, setOpen] = useState(false);
  const selectedIndex = useMemo(
    () =>
      Math.max(
        0,
        CITIES.findIndex((c) => c.value === value)
      ),
    [value]
  );
  const [highlight, setHighlight] = useState(selectedIndex);

  const wrapRef = useRef(null);
  const openT = useRef(null);
  const closeT = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeT.current);
    openT.current = setTimeout(() => {
      setHighlight(selectedIndex);
      setOpen(true);
    }, 90);
  };
  const handleLeave = () => {
    clearTimeout(openT.current);
    closeT.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onDoc = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDoc);
      clearTimeout(openT.current);
      clearTimeout(closeT.current);
    };
  }, []);

  const selectByIndex = (i) => {
    const next = CITIES[i];
    if (next) {
      onChange(next.value);
      setOpen(false);
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`hidden sm:inline-flex items-center gap-1 text-sm hover:text-neutral-900 ${labelClassName}`}
        onFocus={() => {
          setHighlight(selectedIndex);
          setOpen(true);
        }}
        onBlur={(e) => {
          if (!wrapRef.current?.contains(e.relatedTarget)) setOpen(false);
        }}
      >
        {CITIES[selectedIndex]?.label || "Select City"}
        <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 top-full mt-2 w-40 overflow-hidden rounded-md border bg-white shadow-lg ring-1 ring-black/5 z-50"
        >
          {CITIES.map((c, i) => {
            const isSel = i === selectedIndex;
            const isHi = i === highlight;
            return (
              <li
                key={c.value}
                role="option"
                aria-selected={isSel}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => selectByIndex(i)}
                className={`flex cursor-pointer items-center justify-between px-4 py-2 border border-gray-100 text-sm ${
                  isHi ? "bg-neutral-50" : ""
                } ${isSel ? "font-semibold" : "font-normal"}`}
              >
                <span className="text-neutral-800">{c.label}</span>
                {isSel && <Check className="h-4 w-4 text-red-600" />}
              </li>
            );
          })}
        </ul>
      )}

      <label className="sm:hidden block">
        <span className="sr-only">Select city</span>
        <select
          className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {CITIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
