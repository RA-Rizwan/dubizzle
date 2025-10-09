
const DEFAULT_ITEMS = [
  { label: "Home & Garden", count: 49559, href: "#" },
  { label: "Home Appliances", count: 15129, href: "#" },
  { label: "Mobile Phones", count: 1779, href: "#" },
  { label: "Sports Equipment", count: 630, href: "#" },
  { label: "Electronics", count: 520, href: "#" },
  { label: "Computers", count: 174, href: "#" },
];

const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

export default function ClassifiedCategoryStats({ items = DEFAULT_ITEMS }) {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 my-10">
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href || "#"}
            className="block rounded border border-neutral-100 bg-white px-6 py-4 text-center shadow-xl hover:shadow-md"
          >
            <div className="text-[12px] font-bold uppercase tracking-wide text-neutral-500">
              {it.label}
            </div>
            <div className="mt-2 font-semibold text-neutral-800 tabular-nums">
              {fmt(it.count)}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
