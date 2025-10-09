// CarInspectionBanner.jsx
import React from "react";

const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <path d="M8 12l2.8 2.8L16.5 9" strokeWidth="2" />
  </svg>
);
const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const CalendarCheck = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="1.8" />
    <path d="M16 3v4M8 3v4M3 9h18" strokeWidth="1.8" />
    <path d="M9 14l2 2 4-4" strokeWidth="2" />
  </svg>
);

export default function CarInspectionBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-7">
      <div className="rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-white p-7">
        <div className="flex justify-between">
          {/* Left content */}
          <div>
            <h3 className="text-[20px] font-semibold text-neutral-900">
              Request dubizzle{" "}
              <span className="text-red-600">Car Inspection</span>
            </h3>
            <p className="mt-1 text-[16px] font font-semibold text-neutral-700">
              Trusted by 10K+ car buyers, dubizzle is the UAE&apos;s go-to platform
            </p>

            {/* Feature pills */}
            <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <Feature
                icon={<CheckIcon className="h-5 w-5 text-red-600" />}
                line1="120 - 240"
                line2="Points Covered"
              />
              <Divider />
              <Feature
                icon={<PinIcon className="h-5 w-5 text-red-600" />}
                line1="Inspect"
                line2="Anywhere!"
              />
              <Divider />
              <Feature
                icon={<CalendarCheck className="h-5 w-5 text-red-600" />}
                line1="Same Day"
                line2="Inspection"
              />
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center justify-start md:justify-end">
            <a
              href="#"
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-red-600 px-5 text-[14px] font-semibold text-white hover:bg-red-700 md:w-[350px]"
            >
              Book Inspection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, line1, line2 }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-200/40 ring-1 ring-red-200">
        {icon}
      </span>
      <div className="leading-tight">
        <div className="text-[15px] font-medium text-neutral-700">{line1}</div>
        <div className="text-[14px] text-neutral-700">{line2}</div>
      </div>
    </div>
  );
}

function Divider() {
  return <span className="hidden h-9 w-px bg-red-200 sm:inline-block" />;
}
