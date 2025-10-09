import ExploreLeft from "../assets/new_project_banner_images.webp";
import ExploreRight from "../assets/agent_search_banner.webp";

const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
  </svg>
);

function ExploreCard({
  title,
  subtitle,
  ctaText = "Explore Now",
  href = "#",
  artSrc, 
  showNew = false,
  reverse = false, 
}) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-5 sm:px-6 sm:py-6 ">
      <div
        className={`flex items-center gap-4 sm:gap-6 md:gap-8 flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="shrink-0">
          <img
            src={artSrc}
            alt=""
            className="h-24 sm:h-28 w-auto rounded-xl object-contain shadow-md ring-1 ring-black/5"
          />
        </div>

        <div className="w-full">
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
              {title}
            </h3>
            {showNew && (
              <span className="rounded-full bg-red-600 px-2 py-0.5 text-[11px] font-bold text-white">
                NEW
              </span>
            )}
          </div>
          <p className="mt-1 text-sm sm:text-base text-neutral-600">
            {subtitle}
          </p>

          <a
            href={href}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:shadow-md"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ExploreCards() {
  const cards = [
    {
      title: "Introducing New Projects",
      subtitle: "Get access to the latest property developments",
      ctaText: "Explore Now",
      href: "#",
      artSrc: ExploreLeft, 
      showNew: false,
    },
    {
      title: "Discover Agents and Agencies!",
      subtitle: "Connect with our partners to find your ideal home!",
      ctaText: "Browse Now",
      href: "#",
      artSrc: ExploreRight, 
      showNew: true,
      reverse: true,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-4 py-4 flex justify-around items-center md:grid-cols-2">
      {cards.map((c) => (
        <ExploreCard key={c.title} {...c} />
      ))}
    </section>
  );
}
