// Breadcrumb.jsx
import React from "react";

const ArrowLeft = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M15 6l-6 6 6 6" strokeWidth="2" />
  </svg>
);

export default function Breadcrumb({
  backHref = "#",
  onBackClick, 
  items = [], 
}) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-7xl px-4 py-2 mt-3">
      <div className="overflow-x-auto whitespace-nowrap self-start">
        <ol className="flex items-center text-sm">
          <li className="flex ">
            {onBackClick ? (
              <button
                onClick={onBackClick}
                className="inline-flex items-center gap-1 text-blue-500 font-bold hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back To Search
              </button>
            ) : (
              <a
                href={backHref}
                className="inline-flex items-center gap-1 text-blue-500 font-bold hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back To Search
              </a>
            )}
          </li>

          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={it.label} className="flex items-center">
                <span className="mx-2 text-neutral-400">›</span>
                {last || !it.href ? (
                  <span className="text-neutral-800">{it.label}</span>
                ) : (
                  <a
                    href={it.href}
                    className="text-neutral-800 hover:underline"
                  >
                    {it.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
