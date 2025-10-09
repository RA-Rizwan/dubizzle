// AgentPropertyAds.jsx
import AgentAvatar from "../assets/agent-avatar.webp";
import Img1 from "../assets/populer/1.webp";
import Img2 from "../assets/populer/2.webp";
import Img3 from "../assets/populer/3.webp";
import Img4 from "../assets/populer/4.webp";
import sortIcon from "../assets/sortIcon.svg";

import bed from "../assets/bed_space.svg";
import bath from "../assets/bath.svg";
import size from "../assets/size.svg";
import LocPin from "../assets/location_pin.svg";
import DubizzleNav from "../HomePage/Navbar";
import Footer from "../homePage/Footer";
//import BadgeFeatured from "../assets/featured-badge.svg"; // optional
/* ------------------------------------------- */

const ArrowLeft = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M15 6l-6 6 6 6" strokeWidth="2" />
  </svg>
);

const FilterChevron = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="m6 9 6 6 6-6" strokeWidth="2" />
  </svg>
);

export default function AgentPropertyAds() {
  // static items (use your API data)
  const items = [
    {
      img: Img1,
      price: "AED 4,000,000",
      type: "Villa",
      beds: 5,
      baths: 6,
      area: "10,000 sqft",
      title: "Brand New Villa | First Occupancy",
      loc: "Hoshi, Sharjah",
      premium: true,
    },
    {
      img: Img2,
      price: "AED 3,000,000",
      type: "Villa",
      beds: 7,
      baths: 8,
      area: "10,000 sqft",
      title: "Huge Villa | Well Maintained | Spacious",
      loc: "Al Yash, Sharjah",
      premium: true,
    },
    {
      img: Img3,
      price: "AED 4,200,000",
      type: "Villa",
      beds: 5,
      baths: 6,
      area: "10,000 sqft",
      title: "Modern Villa | Brand New | For Sale",
      loc: "Hoshi, Sharjah",
      premium: true,
    },
    {
      img: Img4,
      price: "AED 14,500,000",
      type: "Residential Building",
      beds: 11,
      baths: 11,
      area: "5,300 sqft",
      title: "For Sale – Brand New Building in Muaskar Al Falah, …",
      loc: "Muwaileh, Sharjah",
      featured: true,
    },
    {
      img: Img2,
      price: "AED 2,700,000",
      type: "Villa",
      beds: 4,
      baths: 5,
      area: "11,923 sqft",
      title: "Huge Villa For Sale in Al Rahmaniya",
      loc: "Al Rahmaniya, Sharjah",
      featured: true,
    },
    {
      img: Img3,
      price: "AED 4,000,000",
      type: "Villa",
      beds: 5,
      baths: 7,
      area: "10,000 sqft",
      title: "Brand New Villa For Sale | Modern Finishing",
      loc: "Hoshi, Sharjah",
      featured: true,
    },
    {
      img: Img4,
      price: "AED 14,500,000",
      type: "Residential Building",
      beds: 11,
      baths: 11,
      area: "5,300 sqft",
      title: "For Sale | New Building | Al Falah Camp Area",
      loc: "Muwaileh Commercial, Sharjah",
      featured: true,
    },
    {
      img: Img1,
      price: "AED 4,100,000",
      type: "Villa",
      beds: 5,
      baths: 7,
      area: "17,500 sqft",
      title: "Spacious | Well Maintained | Luxury Villa",
      loc: "Al Noaf, Sharjah",
      featured: true,
    },
    {
      img: Img2,
      price: "AED 9,000,000",
      type: "Villa",
      beds: 5,
      baths: 7,
      area: "17,300 sqft",
      title: "For Sale | Luxury Villa in Al Noaf – Prime Location",
      loc: "Al Noaf, Sharjah",
      featured: true,
    },
    {
      img: Img3,
      price: "AED 4,000,000",
      type: "Villa",
      beds: 5,
      baths: 7,
      area: "10,000 sqft",
      title: "For Sale – Villa in Al Hoshi Area | Plot Size 10,000 …",
      loc: "Hoshi, Sharjah",
      featured: true,
    },
  ];

  return (
    <div className="bg-white text-[13px]">
      <DubizzleNav />
      {/* Top bar breadcrumbs (single line, same spacing) */}
      <div className="mx-auto max-w-[1120px] px-3 pt-2">
        <nav className="flex items-center gap-2 text-xs text-neutral-600 my-4">
          <ArrowLeft className="h-4 w-4" />
          <a className="text-blue-700 hover:underline" href="#">
            Real Estate Agencies in UAE
          </a>
          <span>›</span>
          <a className="text-blue-700 hover:underline" href="#">
            5 Stars Real Estate
          </a>
          <span>›</span>
          <span className="text-neutral-800">Karim Nassar</span>
        </nav>
      </div>

      {/* Main container */}
      <div className="mx-auto max-w-[1120px] px-3 pb-12">
        {/* Header row: title + sort */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[300px_1fr]">
          {/* LEFT SIDEBAR */}
          <aside className="rounded-xl border border-neutral-200 w-full h-fit">
            {/* agent header */}
            <div className="p-5 w-full flex flex-col justify-center items-center">
              <div className="overflow-hidden ">
                <img
                  src={AgentAvatar}
                  alt="Karim Nassar"
                  className="h-[230px]  rounded-2xl object-cover mt-3"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="text-[15px] font-semibold text-neutral-900">
                  Karim Nassar
                </div>
                <div className="text-[12px] text-neutral-500">
                  5 Stars Real Estate
                </div>
              </div>

              <button className="mt-3 w-full rounded-md bg-blue-50 text-blue-500 px-3 py-2 text-center font-semibold">
                Call
              </button>
              <button className="mt-3 w-full rounded-md bg-red-50 text-red-500 px-3 py-2 text-center font-semibold">
                Email
              </button>
              <button className="mt-3 w-full rounded-md border border-neutral-200 text-neutral-700 px-3 py-2 text-center font-semibold">
                Share Profile
              </button>
            </div>

            {/* small info cards */}
            <div className="border-t border-neutral-200 px-6 py-3">
              <div className="mb-2 text-[15px] font-semibold tracking-wide text-neutral-700">
                Properties
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col justify-between items-center">
                  <span>Total</span>
                  <span className="font-semibold">104</span>
                </div>
                <div className="border-l-2 border-neutral-300"></div>
                <div className="flex flex-col justify-between items-center">
                  <span>Verified</span>
                  <span className="font-semibold">24</span>
                </div>
              </div>
            </div>

            <div className="border-t mx-4 border-neutral-300 px-3 py-3">
              <div className="mb-2  text-[15px] font-semibold tracking-wide text-neutral-700">
                Languages
              </div>
              <div>English, Arabic</div>
            </div>

            <div className="border-t mx-4 border-neutral-300 px-3 py-3">
              <div className="mb-2 text-[15px] font-semibold tracking-wide text-neutral-700">
                Service Areas
              </div>
              <div>Sharjah, Dubai</div>
            </div>

            <div className="border-t mx-4 border-neutral-300 px-3 py-3">
              <div className="mb-2 text-[15px] font-semibold tracking-wide text-neutral-700">
                Specialities
              </div>
              <div className="space-y-1">
                <div>Commercial Leasing, Residential Sales</div>
                <div>Residential Leasing, Commercial Sales</div>
              </div>
            </div>

            <div className="border-t mx-4 border-neutral-300 px-3 py-3">
              <div className="mb-2 text-[15px] font-semibold tracking-wide text-neutral-700">
                Agent Bio
              </div>
              <p className="line-clamp-3 text-neutral-700">
                Karim full time property consultant with experience ready to
                assist you with your next real estate …
              </p>
              <a
                href="#"
                className="mt-1 inline-block text-blue-700 hover:underline"
              >
                Read More
              </a>
            </div>

            <div className="border-t mx-4 border-neutral-300 px-3 py-3">
              <div className="mb-2 text-[15px] font-semibold tracking-wide text-neutral-700">
                BRN
              </div>
              <div>88778</div>
            </div>

            <div className="border-t  border-neutral-300 px-3 py-3">
              <div className="mx-auto h-25 w-25 ">
                <img
                  src="https://dbz-images.dubizzle.com/profiles/property_agency/2025/03/10/cc5cb5856648404aa2b63a8818f89f06-.jpg?impolicy=agency"
                  alt=""
                />
              </div>
            </div>
          </aside>

          {/* RIGHT: content */}
          <section>
            {/* filters row (height + paddings match) */}
            <div className="rounded-2xl shadow-sm border border-neutral-200 px-4 py-2 mt-2">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                <FilterBox label="Purpose" value="Buy" />
                <FilterBox
                  label="Location"
                  value="Enter location"
                  placeholder
                />
                <FilterBox label="Property Type" value="All in Residential" />
                <FilterBox label="Price Range" value="Any" />
              </div>
            </div>

            {/* tabs */}
            <div className="mt-4 flex items-center justify-between">
              <strong className="text-neutral-900 text-xl">
                Karim Nassar’s Property Ads
              </strong>
              <div className="flex gap-3">
                <button className="text-red-600 font-semibold px-2 rounded hover:bg-red-100">
                  Clear Filters
                </button>
                <div className="flex items-center justify-end rounded-md border border-neutral-200 px-3 py-2 gap-2">
                  <img src={sortIcon} alt="" />
                  <span className="text-neutral-500">Sort:</span>
                  <button className="font-semibold">Popular</button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Tab active>All</Tab>
              <Tab>Ready</Tab>
              <Tab>Off-Plan</Tab>
            </div>

            {/* LIST */}
            <div className="mt-7 space-y-3">
              {items.map((it, idx) => (
                <ListingRow key={idx} {...it} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <button className="h-8 w-8 rounded border">{"<"}</button>
              <button className="h-8 w-8 rounded bg-neutral-900 text-white">
                1
              </button>
              <button className="h-8 w-8 rounded border">2</button>
              <button className="h-8 w-8 rounded border">3</button>
              <button className="h-8 w-8 rounded border">{">"}</button>
            </div>
          </section>
        </div>
          </div>
          <Footer/>
    </div>
  );
}

/* ----------------- small pieces ----------------- */

function FilterBox({ label, value, placeholder = false }) {
  return (
    <label className="block border-r border-neutral-200 nth-last-[1]:border-none">
      <div className="text-[13px] font-semibold text-neutral-900">{label}</div>
      <div className="mt-1 flex h-6 items-center justify-between rounded-md  px-1">
        <span className={placeholder ? "text-neutral-400" : ""}>{value}</span>
        <FilterChevron className="h-4 w-4 text-neutral-900" />
      </div>
    </label>
  );
}

function Tab({ children, active = false }) {
  return (
    <button
      className={[
        "h-8 rounded-md px-3 text-sm font-semibold w-25",
        active ? "text-blue-400 border" : "border border-neutral-300",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function ListingRow({
  img,
  price,
  type,
  beds,
  baths,
  area,
  title,
  loc,
  premium,
  featured,
}) {
  return (
    <div className="grid grid-cols-[320px_1fr] gap-3 rounded-2xl shadow-md mt-7">
      {/* image block (fixed size like screenshot) */}
      <div className="relative h-[100%] w-[320px] overflow-hidden rounded-l-xl bg-neutral-100">
        <img src={img} alt="" className="h-full w-full object-cover" />
        <div className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[11px] text-white">
          1/10
        </div>

        <button className="absolute right-2 top-2 h-8 w-8 rounded-full hover:bg-black/20 cursor-pointer">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="favorite-empty"
          >
            <path
              opacity="var(--heartOpacity)"
              d="M28.172 12.8791C27.112 11.8163 25.7068 11.1676 24.2103 11.0502C22.7139 10.9329 21.2248 11.3545 20.012 12.2391C18.7397 11.2927 17.156 10.8636 15.5799 11.0381C14.0038 11.2126 12.5524 11.9778 11.518 13.1797C10.4835 14.3815 9.94282 15.9306 10.0048 17.5151C10.0668 19.0996 10.7268 20.6017 11.852 21.7191L18.062 27.9391C18.582 28.4509 19.2824 28.7377 20.012 28.7377C20.7416 28.7377 21.442 28.4509 21.962 27.9391L28.172 21.7191C29.3396 20.5443 29.9949 18.9553 29.9949 17.2991C29.9949 15.6428 29.3396 14.0538 28.172 12.8791Z"
              fill="var(--heartColor)"
            ></path>
            <rect
              x="6"
              y="6"
              width="28"
              height="28"
              rx="6"
              fill="var(--hoverBgColor)"
              fill-opacity="0.6"
            ></rect>
            <g filter="url(#filter0_d_5259_73254)">
              <path
                d="M28.172 12.8791C27.112 11.8163 25.7068 11.1676 24.2103 11.0502C22.7139 10.9329 21.2248 11.3545 20.012 12.2391C18.7397 11.2927 17.156 10.8636 15.5799 11.0381C14.0038 11.2126 12.5524 11.9778 11.518 13.1797C10.4835 14.3815 9.94282 15.9306 10.0048 17.5151C10.0668 19.0996 10.7268 20.6017 11.852 21.7191L18.062 27.9391C18.582 28.4509 19.2824 28.7377 20.012 28.7377C20.7416 28.7377 21.442 28.4509 21.962 27.9391L28.172 21.7191C29.3396 20.5443 29.9949 18.9553 29.9949 17.2991C29.9949 15.6428 29.3396 14.0538 28.172 12.8791V12.8791ZM26.762 20.3391L20.552 26.5491C20.4813 26.6204 20.3972 26.6771 20.3045 26.7157C20.2118 26.7544 20.1124 26.7743 20.012 26.7743C19.9116 26.7743 19.8121 26.7544 19.7195 26.7157C19.6268 26.6771 19.5427 26.6204 19.472 26.5491L13.262 20.3091C12.4778 19.5074 12.0386 18.4305 12.0386 17.3091C12.0386 16.1876 12.4778 15.1107 13.262 14.3091C14.0611 13.5201 15.139 13.0776 16.262 13.0776C17.385 13.0776 18.4628 13.5201 19.262 14.3091C19.355 14.4028 19.4656 14.4772 19.5874 14.528C19.7093 14.5787 19.84 14.6049 19.972 14.6049C20.104 14.6049 20.2347 14.5787 20.3566 14.528C20.4784 14.4772 20.589 14.4028 20.682 14.3091C21.4812 13.5201 22.559 13.0776 23.682 13.0776C24.805 13.0776 25.8828 13.5201 26.682 14.3091C27.477 15.1002 27.9306 16.1713 27.9455 17.2928C27.9605 18.4143 27.5356 19.497 26.762 20.3091V20.3391Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_d_5259_73254"
                x="6"
                y="7"
                width="27.9951"
                height="25.7378"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_5259_73254"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_5259_73254"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-6 rounded-full bg-white" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </div>
        </div>
      </div>

      {/* details */}
      <div className="relative p-4">
        {premium && (
          <span className="absolute right-4 top-4 rounded bg-orange-100 text-orange-500 px-2 py-0.5 text-[10px] font-semibold">
            PREMIUM
          </span>
        )}
        {featured && (
          <span className="absolute right-4 top-4 rounded bg-blue-100 text-blue-500 px-2 py-0.5 text-[10px] font-semibold">
            FEATURED
          </span>
        )}

        <div className="text-[18px] font-semibold tracking-tight text-neutral-900">
          {price}
        </div>

        <div className="mt-2  ">
          <h2 className="font-semibold  block  text-neutral-900">{type}</h2>
          <div className="mt-5 flex gap-3 ">
            <img className="inline" src={bed} alt="" /> <span>{beds} beds</span>
            <img className="inline" src={bath} alt="" />{" "}
            <span>{baths} baths</span>
            <img className="inline" src={size} alt="" /> <span>{area}</span>
          </div>
        </div>

        <div className="mt-2 text-neutral-900 text-[14px] font-semibold">
          {title}
        </div>

        <div className="mt-2 flex items-center gap-2 text-neutral-600">
          <img src={LocPin} alt="" /> <span>{loc}</span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <a
            href="#"
            className="rounded-md bg-blue-50 text-blue-500 px-3 py-1.5 font-semibold"
          >
            Email
          </a>
          <a
            href="#"
            className="rounded-md bg-red-50 text-red-500 px-3 py-1.5 font-semibold"
          >
            Call
          </a>
          <a
            href="#"
            className="rounded-md bg-green-50 text-green-500 px-3 py-1.5 font-semibold"
          >
            WhatsApp
          </a>
        </div>
          </div>
          
    </div>
  );
}
