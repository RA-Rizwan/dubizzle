// Testimonials.jsx
import React from "react";

// replace these with your own avatar image imports if you have them
const AV1 = "https://i.pravatar.cc/80?img=12";
const AV2 = "https://i.pravatar.cc/80?img=22";
const AV3 = "https://i.pravatar.cc/80?img=32";

const Quote = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M10 7c0-2.2-1.8-4-4-4S2 4.8 2 7s1.8 4 4 4v6h4V7Zm12 0c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4v6h4V7Z" />
  </svg>
);

function Card({ text, name, avatar }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm flex flex-col justify-between">
      <div className="text-neutral-500">
        <Quote className="h-5 w-5 inline align-top mr-2" />
        <p className="inline max-w-[95%] align-top italic leading-relaxed text-neutral-700">
          {text}
        </p>
        <Quote className="h-5 w-5 inline-block align-top ml-2 rotate-180" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="font-semibold text-blue-600">{name}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const items = [
    {
      text:
        "I've been using dubizzle now for 10 years, I've literally lost count of the number cars I've bought and sold from it. Its become so addictive, I tend to log-on most days - planning the next car is both fast & fun.",
      name: "Sean Cain",
      avatar: AV1,
    },
    {
      text:
        'CarReport recently saved me a trip to Oman for a car I was seriously looking at where the friendly seller claimed "no accidents". However for 99 dirhams and 2 minutes online, CarReport revealed 4 accidents on the car’s history.',
      name: "Ed Surgeon",
      avatar: AV2,
    },
    {
      text:
        "Put my Hyundai Coupe up for sale on @dubizzle. Got a call within an hour and sold within the same day",
      name: "Hitesh Uchil",
      avatar: AV3,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Testimonials</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((t) => (
          <Card key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
