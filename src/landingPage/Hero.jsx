
import { Link } from "react-router-dom";
import backgroundImage from "../assets/hero-image-mweb.png"

const EMIRATES = [
  { name: "Dubai", slug: "home" },
  { name: "Abu Dhabi", slug: "home" },
  { name: "Sharjah", slug: "home" },
  { name: "Ajman", slug: "home" },
  { name: "Al Ain", slug: "home" },
  { name: "Ras Al Khaimah", slug: "home" },
  { name: "Fujairah", slug: "home" },
  { name: "Umm Al Quwain", slug: "home" },
];

export default function Hero() {
  return (
    <section className="relative">
      <div
        className="relative w-full min-h-[130px] sm:min-h-[150px] lg:min-h-[390px]  bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="UAE scenic background"
      >

        <div className="relative z-10 mx-auto flex h-[100%] max-w-6xl flex-col items-center justify-center  px-4  text-white">
          <h1 className="text-2xl font-light sm:text-3xl lg:text-5xl leading-tight">
            Welcome to the UAE&apos;s #1
            <br className=" sm:block" />
            online classifieds website!
          </h1>
        </div>
      </div>

      <div className="z-50 w-full max-w-4xl  relative lg:bottom-35 right-[-50%] transform translate-x-[-50%] px-4">
        <p className="text text-center my-4 text-base font-semibold md:block md:text-lg text-black lg:text-white/90 pt-4 pb-2">
          Which emirate would you like to explore?
        </p>
        <div className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {EMIRATES.map((e) => (
            <Link
              key={e.slug}
              to={e.slug}
              className="rounded border border-black/5 bg-white py-6 px-0 text-center font-medium  transition hover:shadow-xl hover:ring-1 hover:ring-red-500 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <div className="text-[13px]  tracking-wide ">dubizzle</div>
              <div className="mt-1 text-[13px]  ">{e.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
