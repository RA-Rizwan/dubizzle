import React, { useState } from "react";

import AgentAvatar from "../assets/agent-avatar.webp";
import bed from "../assets/bed_space.svg";
import bath from "../assets/bath.svg";
import size from "../assets/size.svg";
import locationPin from "../assets/location_pin.svg";
import share from "../assets/share.svg";
import heart from "../assets/heart-new.svg";
import Breadcrumb from "./Breadcrumb";
import ProductImageGallery from "./ProductImageGallery";
import Footer from "../homePage/Footer";
import ProductGridSection from "../HomePage/ProductSection";
import DubizzleNav from "../HomePage/Navbar";
import { Info } from "./Info";
import { AgentCard } from "./AgentCard";
import { MortgageCard } from "./MortgageCard";

export default function ProductPage() {
  const photos = [
    { src: "../src/assets/product-img1.webp", alt: "Front view" },
    { src: "../src/assets/product-img2.webp" },
    { src: "../src/assets/product-img3.webp" },
    { src: "../src/assets/product-img4.webp" },
  ];

  const listing = {
    price: 4000000,
    priceText: "AED 4,000,000",
    beds: 5,
    baths: 6,
    area: "10,000 sqft",
    location: "Hoshi, Sharjah, UAE",
    title: "Brand New Villa | First Occupancy",
    updated: "30th September 2025",
    avgRent: "AED 300,000 Yearly",
    completion: "Ready",
    furnishing: "Unfurnished",
    purpose: "Sale",
    type: "Villa",
    postedOn: "11th March 2025",
    description:
      "فيلا حديثة مُشَطَّبة بالكامل بأجود المواد. تصميم عصري، حديقة خاصة، وشرفة واسعة. السعر قابل للتفاوض... \n\nA fully finished modern villa with premium materials, private garden, and large balcony. Price negotiable.",
    amenities: [
      {
        title: "Maid Room",
        img: "../src/assets/maids_rooms.svg",
      },
      {
        title: "Central A/C & Heating",
        img: "../src/assets/central_ac_and_heating.svg",
      },
      {
        title: "Balcony",
        img: "../src/assets/balcony.svg",
      },
      {
        title: "Private Garden",
        img: "../src/assets/private_garden.svg",
      },
    ],
    ids: { rera: "4575", ref: "6989-UEGla", brn: "88778" },
  };

  const similar = [
    {
      href: "#",
      image: "../src/assets/populer/1.webp",
      price: 101000,
      meta: "2 Beds · 3 Baths",
      title: "Royal Breeze 4, Royal Breeze Apartment, Al Hamra Village",
    },
    {
      href: "#",
      image: "../src/assets/populer/2.webp",
      price: 120000,
      meta: "4 Beds · 3 Baths",
      title: "Al Hamra Village Town Houses, Al Hamra Village",
    },
    {
      href: "#",
      image: "../src/assets/populer/3.webp",
      price: 48000,
      meta: "Studio · 1 Bath",
      title: "Royal Breeze 2, Royal Breeze Apartment, Al Hamra Village",
    },
    {
      href: "#",
      image: "../src/assets/populer/4.webp",
      price: 43000,
      meta: "1 Bed · 2 Baths",
      title: "The Lagoons, Mina Al Arab",
    },
  ];

  const [showAllDesc, setShowAllDesc] = useState(false);

  return (
    <>
      <DubizzleNav />
      <Breadcrumb
        backHref="/search"
        items={[
          { label: "Real Estate for Sale", href: "/real-estate-for-sale" },
          { label: "Sharjah", href: "/real-estate-for-sale/sharjah" },
          { label: "Hoshi", href: "/real-estate-for-sale/sharjah/hoshi" },
          { label: listing.ids.ref },
        ]}
      />

      <main className="mx-auto max-w-7xl px-4 pb-12">
        <ProductImageGallery images={photos} />

        <div className="grid gap-6 md:grid-cols-3 mt-6 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="mt-3 flex flex-wrap items-center justify-between text-[13px]">
              <div className="text-[25px] px-5 pb-3 font-bold tracking-tight text-neutral-900">
                {listing.priceText}
              </div>
              <div className="flex gap-3 mx-5 font-semibold text-[13px] text-neutral-900">
                <button className="border border-neutral-400 rounded px-3 py-1 flex items-center justify-center">
                  <img src={heart} alt="" />
                  <p>Favorite</p>
                </button>
                <button className="border border-neutral-400 rounded px-3 py-1 flex items-center justify-center">
                  <img src={share} alt="" /> <p>Share</p>
                </button>
              </div>
            </div>
            <span className="text-neutral-500">Est. Payment AED</span>
            <span className="font-semibold text-neutral-800 ps-2">
              16.4K/mo
            </span>
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1dt1kv inline"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="KeyboardArrowDownRoundedIcon"
              height={20}
            >
              <path d="M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"></path>
            </svg>

            <span className="ms-4 text-[15px] font-semibold text-blue-800 bg-blue-200 rounded-2xl px-3 py-1">
              Get Pre-Approved &gt;
            </span>

            <div className=" flex gap-4 mt-4">
              <span className="font-semibold text-neutral-800">
                <img className="inline pe-1" src={bed} alt="" />
                {listing.beds} Beds
              </span>
              <span className="font-semibold text-neutral-800">
                <img className="inline pe-1" src={bath} alt="" />{" "}
                {listing.baths} Baths
              </span>
              <span className="font-semibold text-neutral-800">
                <img className="inline pe-1" src={size} alt="" /> {listing.area}
              </span>
            </div>
            <span className="text-neutral-600 block">
              <img className="inline pe-2" src={locationPin} alt="" />
              {listing.location}
            </span>

            <h1 className="mt-5 text-[26px] font-semibold text-neutral-900 border-t-2 border-neutral-200 pt-6">
              {listing.title}
            </h1>

            <section
              className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3
     border-neutral-200 p-4 text-[17px]
    before:content-[''] before:absolute before:top-0 before:bottom-0
    before:left-1/2 before:w-px before:bg-neutral-200
    max-md:before:hidden"
            >
              <Info label="Type" value={listing.type} />
              <Info label="Purpose" value={listing.purpose} />
              <Info label="Furnishing" value={listing.furnishing} />
              <Info label="Updated" value={listing.updated} />
              <Info label="Average Rent" value={listing.avgRent} />
              <Info label="Completion Status" value={listing.completion} />
            </section>

            {/* Description */}
            <section className="mt-6">
              <p
                className="whitespace-pre-line text-[15px] font-semibold leading-relaxed text-neutral-700"
                style={
                  showAllDesc
                    ? undefined
                    : {
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }
                }
              >
                {listing.description}
              </p>
              <button
                className="mt-1 text-sm font-bold text-blue-700 hover:underline"
                onClick={() => setShowAllDesc((v) => !v)}
              >
                {showAllDesc ? "Show Less" : "Read More"}
              </button>
              <p className="mt-3 text-sm text-neutral-500">
                Posted on: {listing.postedOn}
              </p>
            </section>

            <section className="mt-6">
              <h3 className="mb-3  text-[26px] font-semibold text-neutral-900">
                Amenities
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {listing.amenities.map((a) => (
                  <div
                    key={a}
                    className="flex  flex-col items-center gap-2 rounded-xl bg-neutral-200 px-3 py-2 text-sm h-[100px]"
                  >
                    <img src={a.img} alt="" />
                    <h2 className="text-center font-semibold"> {a.title}</h2>
                  </div>
                ))}
                <button className=" inline rounded-xl   bg-neutral-200 px-3 py-2 text-sm font-bold text-blue-700 hover:underline min-h-[100px]">
                  +8 More
                </button>
              </div>
            </section>

            {/* Mortgage (basic) */}
            <section className="mt-6">
              <h3 className="mb-3 mt-5 text-[26px] font-semibold text-neutral-900">
                Mortgage Calculator
              </h3>
              <MortgageCard price={listing.price} />
            </section>

            {/* Map */}
            <section className="mt-6 border-b-2 border-neutral-200 pb-10">
              <h3 className=" text-[26px] font-semibold text-neutral-900">
                Map View
              </h3>
              <div className=" text-lg font-semibold text-neutral-900 mb-3">
                {listing.location}
              </div>
              <div className="overflow-hidden rounded-xl ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230817.59022870747!2d55.38146178804678!3d25.32016343756128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fede7964b%3A0x2a830aa19c1f6d89!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1759748143111!5m2!1sen!2s"
                  height={300}
                  width={800}
                  frameborder="0"
                ></iframe>
              </div>
            </section>

            <section className="mt-6 border-b-2 border-neutral-200 pb-10">
              <h3 className="mb-3 text-[26px] font-semibold text-neutral-900">
                More Info
              </h3>
              <div className="grid grid-cols-1 text-sm sm:grid-cols-1">
                <Info label="RERA" value={listing.ids.rera} />
                <Info label="Reference ID" value={listing.ids.ref} />
                <Info label="BRN (DLD)" value={listing.ids.brn} />
              </div>
            </section>
            <section className="py-6 flex items-center justify-center">
              <svg
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 -960 960 960"
                stroke="currentColor"
                aria-hidden="true"
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium flip-for-rtl mui-style-1dpmwu1"
                focusable="false"
              >
                <path d="M280-400v240q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-600q0-17 11.5-28.5T240-800h287q14 0 25 9t14 23l10 48h184q17 0 28.5 11.5T800-680v320q0 17-11.5 28.5T760-320H553q-14 0-25-9t-14-23l-10-48H280Zm306 0h134v-240H543q-14 0-25-9t-14-23l-10-48H280v240h257q14 0 25 9t14 23l10 48Zm-86-160Z"></path>
              </svg>
              <h1 className="text-center font-semibold">Report This Ad</h1>
            </section>
            {/* Similar properties */}
            <section className="mt-8">
              <ProductGridSection
                title="Similar Properties"
                items={similar}
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
              />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-4 ">
            <AgentCard
              name="Karin Nassar"
              company="5 Stars Real Estate"
              avatar={AgentAvatar}
              phone="+971 55 000 0000"
              email="email@example.com"
            />

            <div className="overflow-hidden rounded-xl border border-neutral-300 p-4 mt-3">
              <h1 className="text-xl font-bold mb-2">Villas by DAMAC</h1>
              <p className="border-b pb-8 border-neutral-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                ullam molestiae vitae?
              </p>
              <div className="flex items-center justify-between">
                <img
                  className="w-18"
                  src="https://tpc.googlesyndication.com/simgad/11580873980612746594?"
                  alt=""
                />
                <button className="rounded bg-red-500 text-white py-3 px-6">
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="ps-8 pt-5">
              <img
                src="https://tpc.googlesyndication.com/simgad/9044788195507978501"
                alt=""
              />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}









