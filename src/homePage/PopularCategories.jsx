
import MotorsIcon from "../assets/icons/motors.svg";
import RentIcon from "../assets/icons/property-rent.svg";
import SaleIcon from "../assets/icons/property-sale.svg";
import ClassifiedsIcon from "../assets/icons/classifieds.svg";
import JobsIcon from "../assets/icons/jobs.svg";
import CommunityIcon from "../assets/icons/community.svg";
import BusinessIcon from "../assets/icons/business.svg";
import AppliancesIcon from "../assets/icons/appliances.svg";
import FurnitureIcon from "../assets/icons/furniture.svg";
import MobileIcon from "../assets/icons/mobile.svg";

const Arrow = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
  </svg>
);

function Category({ iconSrc, title, items, allHref, allLabel }) {
  return (
    <div className="space-y-2">
      <h3 className="flex items-center gap-2 text-[15px] font-semibold text-black">
        <img
          src={iconSrc}
          alt=""
          className="h-4 w-4"
          loading="lazy"
          decoding="async"
        />
        {title}
      </h3>

      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <a
              href={it.href || "#"}
              className="text-[13px] text-neutral-800 hover:underline"
            >
              {it.label}
            </a>
            {it.isNew && (
              <span className="rounded-full bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                NEW
              </span>
            )}
          </li>
        ))}
      </ul>

      <a
        href={allHref || "#"}
        className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-red-700 hover:underline"
      >
        {allLabel} <Arrow className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

export default function PopularCategories() {
  const cats = [
    {
      iconSrc: MotorsIcon,
      title: "Motors",
      items: [
        { label: "Cars" },
        { label: "Rental Cars", isNew: true },
        { label: "New Cars" },
        { label: "Export Cars" },
      ],
      allLabel: "All in Motors",
    },
    {
      iconSrc: RentIcon,
      title: "Property for Rent",
      items: [
        { label: "Residential" },
        { label: "Commercial" },
        { label: "Rooms For Rent" },
        { label: "Monthly Short Term" },
      ],
      allLabel: "All in Property for Rent",
    },
    {
      iconSrc: SaleIcon,
      title: "Property for Sale",
      items: [
        { label: "Residential" },
        { label: "Commercial" },
        { label: "New Projects" },
        { label: "Off-Plan" },
      ],
      allLabel: "All in Property for Sale",
    },
    {
      iconSrc: ClassifiedsIcon,
      title: "Classifieds",
      items: [
        { label: "Electronics" },
        { label: "Computers & Networking" },
        { label: "Clothing & Accessories" },
        { label: "Jewelry & Watches" },
      ],
      allLabel: "All in Classifieds",
    },
    {
      iconSrc: JobsIcon,
      title: "Jobs",
      items: [
        { label: "Accounting / Finance" },
        { label: "Engineering" },
        { label: "Sales / Business Development" },
        { label: "Secretarial / Front Office" },
      ],
      allLabel: "All in Jobs",
    },
    {
      iconSrc: CommunityIcon,
      title: "Community",
      items: [
        { label: "Freelancers" },
        { label: "Home Maintenance" },
        { label: "Other Services" },
        { label: "Tutors & Classes" },
      ],
      allLabel: "All in Community",
    },
    {
      iconSrc: BusinessIcon,
      title: "Business & Industrial",
      items: [
        { label: "Businesses for Sale" },
        { label: "Construction" },
        { label: "Food & Beverage" },
        { label: "Industrial Supplies" },
      ],
      allLabel: "All in Business & Industrial",
    },
    {
      iconSrc: AppliancesIcon,
      title: "Home Appliances",
      items: [
        { label: "Large Appliances / White Goods" },
        { label: "Small Kitchen Appliances" },
        { label: "Outdoor Appliances" },
        { label: "Small Bathroom Appliances" },
      ],
      allLabel: "All in Home Appliances",
    },
    {
      iconSrc: FurnitureIcon,
      title: "Furniture, Home & Garden",
      items: [
        { label: "Furniture" },
        { label: "Home Accessories" },
        { label: "Garden & Outdoor" },
        { label: "Lighting & Fans" },
      ],
      allLabel: "All in Furniture, Home & Garden",
    },
    {
      iconSrc: MobileIcon,
      title: "Mobile Phones & Tablets",
      items: [
        { label: "Mobile Phones" },
        { label: "Mobile Phone & Tablet Accessories" },
        { label: "Tablets" },
        { label: "Other Mobile Phones & Tablets" },
      ],
      allLabel: "All in Mobile Phones & Tablets",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <h2 className="text-[22px] font-semibold text-neutral-900">
        Popular Categories
      </h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-8">
        {cats.map((c) => (
          <Category key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
