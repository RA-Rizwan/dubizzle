import React, { useMemo, useState, useEffect } from "react";

const Camera = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M4 7h4l2-2h4l2 2h4v12H4z" strokeWidth="1.8" />
    <circle cx="12" cy="13" r="4" strokeWidth="1.8" />
  </svg>
);

export default function ProductImageGallery({
  images = [], // [{src, alt?}]
}) {
  const [main, setMain] = useState(0);

  useEffect(() => {
    if (main > images.length - 1) setMain(0);
  }, [images.length, main]);

  const thumbs = useMemo(() => {
    if (images.length <= 1) return [];
    const idxs = [];
    for (let i = 1; i < images.length && idxs.length < 2; i++) {
      idxs.push((main + i) % images.length);
    }
    return idxs;
  }, [images, main]);

  if (!images.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-3 sm:px-4">
      <div className="grid gap-3 md:grid-cols-3">
        {/* Main image */}
        <div className="md:col-span-2">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
            <div className="aspect-[16/10] w-full">
              <img
                src={images[main].src}
                alt={images[main].alt || "Listing photo"}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right thumbs (stacked) */}
        <div className="hidden md:grid grid-rows-2 gap-3">
          {thumbs.map((ti, i) => (
            <button
              key={ti}
              type="button"
              onClick={() => setMain(ti)}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100"
            >
              <div className="aspect-[16/10] w-full">
                <img
                  src={images[ti].src}
                  alt={images[ti].alt || `Photo ${ti + 1}`}
                  className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>

              {/* photo count badge on bottom tile */}
              {i === thumbs.length - 1 && images.length > 0 && (
                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                  <Camera className="h-3.5 w-3.5" />
                  {images.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile thumb strip */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto md:hidden">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMain(idx)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border ${
                idx === main ? "border-red-600" : "border-transparent"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt || `Photo ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
