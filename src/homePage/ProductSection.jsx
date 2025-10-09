import { Link } from "react-router-dom";

function formatPrice(price, { currency = "AED", locale = "en-AE" } = {}) {
  if (price == null) return "";
  if (typeof price === "string") return price;
  try {
    return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(
      price
    );
  } catch {
    return String(price);
  }
}

export function ProductCard({
  href = "product",
  image,
  title, 
  meta, 
  price, 
  currency = "AED", 
  locale = "en-AE",
  className = "",
}) {
  return (
    <Link
      to={"/product"}
      className={
        "group block rounded-xl transition  hover:shadow-2xl p-2 " +
        className
      }
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100">
        <img
          src={image}
          alt={title || "product"}
          className="h-full w-full object-cover transition group-hover:scale-[1.01]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="mt-3 text-[15px] font-bold tracking-tight text-red-600">
        {currency} {formatPrice(price, { currency, locale })}
      </div>

      {meta && (
        <div className="mt-0.5 text-[14px] font-semibold text-neutral-800">
          {meta}
        </div>
      )}

      {title && (
        <div
          className="mt-0.5 text-[13px] leading-snug text-neutral-600"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          title={title}
        >
          {title}
        </div>
      )}
    </Link>
  );
}

export default function ProductGridSection({
  title = "Popular",
  items = [], 
  viewAllHref, 
  columns = {
   
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  },
  className = "",
}) {
  const gridCls = [
    `grid grid-cols-${columns.base} gap-4 sm:gap-5`,
    columns.sm ? `sm:grid-cols-${columns.sm}` : "",
    columns.md ? `md:grid-cols-${columns.md}` : "",
    columns.lg ? `lg:grid-cols-${columns.lg}` : "",
    columns.xl ? `xl:grid-cols-${columns.xl}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={`mx-auto max-w-7xl px-4 ${className}`}>
      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-[28px] font-semibold text-neutral-900 py-4">{title}</h2>
        {viewAllHref && (
          <a
            href={viewAllHref}
            className="text-sm font-semibold text-red-600 hover:underline"
          >
            View all
          </a>
        )}
      </div>

      <div className={gridCls}>
        {items.map((it, i) => (
          <ProductCard key={it.href ?? i} {...it} />
        ))}
      </div>
    </section>
  );
}
