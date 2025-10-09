// VerifiedBadgeBanner.jsx
import React from "react";
import VBadge from "../assets/verified-badge-new-blue.svg";

export default function VerifiedBadgeBanner({
  title = "Got a verified badge yet?",
  perks = [
    { label: "Get more visibility", href: "#" },
    { label: "Enhance your credibility", href: "#" },
  ],
  ctaText = "Get Started",
  ctaHref = "#",
  onCtaClick, 
}) {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between rounded-xl  bg-blue-100/80 px-4 py-1 shadow-sm">
        <div className="flex items-center gap-3">
          {VBadge && (
            <img
              src={VBadge}
              alt=""
              className="h-17 w-17"
              loading="lazy"
              decoding="async"
            />
          )}

          <div className="flex flex-wrap items-center text-sm sm:text-base">
            <span className="mr-3 font-semibold text-neutral-900">{title}</span>

          {perks.map((p, i) => (
              <React.Fragment key={p.label}>
                {i > 0 && (
                  <span className="mx-2 hidden h-4 w-px bg-blue-300 sm:inline-block" />
                )}
                <a
                  href={p.href || "#"}
                  className="mt-1 sm:mt-0 text-xs text-gray-600 hover:underline"
                >
                  {p.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* right: CTA */}
        <div className="md:ml-6">
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
            >
              {ctaText}
            </button>
          ) : (
            <a
              href={ctaHref}
              className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-10 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
