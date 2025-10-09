import  { useState } from "react";
import logo from "../assets/dubizzle-logo.png"
import CitySelect from "./CitySelect";
import { Link } from "react-router-dom";


const ACTIONS = [
  {
    label: "Notifications",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.98835 2.85449C6.91971 1.92313 8.1829 1.3999 9.50004 1.3999C10.8172 1.3999 12.0804 1.92313 13.0117 2.85449C13.9431 3.78585 14.4663 5.04905 14.4663 6.36619V10.6293C14.4663 10.846 14.6108 11.1348 14.9743 11.405C15.3308 11.6699 15.7787 11.821 16.1316 11.821H16.6053C16.9936 11.821 17.3084 12.1358 17.3084 12.5241C17.3084 12.9124 16.9936 13.2272 16.6053 13.2272H12.0979V13.9451C12.0979 14.6341 11.8242 15.2949 11.337 15.7821C10.8498 16.2693 10.189 16.543 9.50004 16.543C8.81104 16.543 8.15027 16.2693 7.66307 15.7821C7.17588 15.2949 6.90218 14.6341 6.90218 13.9451V13.2272H2.39478C2.00645 13.2272 1.69165 12.9124 1.69165 12.5241C1.69165 12.1358 2.00645 11.821 2.39478 11.821H3.34214C3.65818 11.821 3.96127 11.6954 4.18474 11.4719C4.40821 11.2485 4.53376 10.9454 4.53376 10.6293V6.36619C4.53376 5.04905 5.05699 3.78585 5.98835 2.85449ZM5.6506 11.821H13.4426C13.2131 11.4823 13.0601 11.0812 13.0601 10.6293V6.36619C13.0601 5.42201 12.685 4.5165 12.0174 3.84886C11.3497 3.18123 10.4442 2.80615 9.50004 2.80615C8.55586 2.80615 7.65035 3.18123 6.98272 3.84886C6.31508 4.5165 5.94001 5.42201 5.94001 6.36619V10.6293C5.94001 11.0478 5.83904 11.4559 5.6506 11.821ZM8.30843 13.2272V13.9451C8.30843 14.2612 8.43397 14.5643 8.65744 14.7877C8.88091 15.0112 9.184 15.1367 9.50004 15.1367C9.81608 15.1367 10.1192 15.0112 10.3426 14.7877C10.5661 14.5643 10.6917 14.2612 10.6917 13.9451V13.2272H8.30843Z"
          fill="#666B72"
        />
      </svg>
    ),
  },
  {
    label: "My Searches",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <g clipPath="url(#clip0_343_1435)">
          <path
            d="M13.3038 9.35104V14.4459L8.80222 12.1957L4.30059 14.4459V4.00045H6.56641C6.58478 3.73963 6.62475 3.586 6.68367 3.34045C6.74505 3.08462 6.82701 2.83756 6.92654 2.60027H4.30059C3.47529 2.60027 2.80005 3.27535 2.80005 4.10044V14.6016C2.80005 15.4267 2.80005 16.4769 4.30059 16.1018L8.80222 13.8516L13.3038 16.1018C14.8044 16.4769 14.8044 15.4267 14.8044 14.6016V10.8512L13.3038 9.35104ZM14.2792 6.26819C14.6093 5.74313 14.8044 5.13556 14.8044 4.47548C14.8044 2.60777 13.2963 1.1001 11.4282 1.1001C9.55999 1.1001 8.05195 2.60777 8.05195 4.47548C8.05195 6.3432 9.55999 7.85087 11.4207 7.85087C12.0809 7.85087 12.6961 7.65585 13.2138 7.32581L15.0225 9.13407C15.3164 9.42791 15.7929 9.42791 16.0868 9.13407C16.3811 8.8398 16.3808 8.36249 16.0859 8.06869L14.2792 6.26819ZM11.4282 6.3507C10.3928 6.3507 9.55249 5.5106 9.55249 4.47548C9.55249 3.44036 10.3928 2.60027 11.4282 2.60027C12.4635 2.60027 13.3038 3.44036 13.3038 4.47548C13.3038 5.5106 12.4635 6.3507 11.4282 6.3507Z"
            fill="#666B72"
          />
        </g>
        <defs>
          <clipPath id="clip0_343_1435">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Favorites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <g clipPath="url(#clip0_343_1438)">
          <path
            d="M12.92 2.2C11.5976 2.2 10.3284 2.81182 9.50002 3.77866C8.67163 2.81182 7.40242 2.2 6.08002 2.2C3.73922 2.2 1.90002 4.02792 1.90002 6.35436C1.90002 9.20953 4.48402 11.536 8.39803 15.0709L8.74956 15.3866C9.17603 15.7695 9.82291 15.7683 10.2479 15.3838L10.602 15.0634C14.516 11.536 17.1 9.20953 17.1 6.35436C17.1 4.02792 15.2608 2.2 12.92 2.2ZM9.57603 13.9455L9.50002 14.021L9.42402 13.9455C5.80642 10.69 3.42002 8.53728 3.42002 6.35436C3.42002 4.84368 4.56002 3.71067 6.08002 3.71067C7.00274 3.71067 7.90655 4.17545 8.44514 4.87922C8.70463 5.21829 9.07442 5.49327 9.50139 5.49327C9.93078 5.49327 10.302 5.21507 10.5627 4.87386C11.0981 4.17309 11.9997 3.71067 12.92 3.71067C14.44 3.71067 15.58 4.84368 15.58 6.35436C15.58 8.53728 13.1936 10.69 9.57603 13.9455Z"
            fill="#666B72"
          />
        </g>
        <defs>
          <clipPath id="clip0_343_1438">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Chats",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.99212 2.85087C6.54479 1.96198 8.39987 1.62236 10.2046 1.88819C12.0095 2.15404 13.6568 3.01002 14.8226 4.31099C15.9905 5.61421 16.5915 7.27258 16.4887 8.96843C16.3928 10.5515 15.6915 12.0389 14.5297 13.1876L14.7152 15.4699C14.7343 15.7051 14.6318 15.9336 14.4435 16.0757C14.2552 16.2179 14.0073 16.2538 13.7864 16.1709L11.0279 15.1365C9.37309 15.6245 7.8432 15.4885 6.24171 14.915C4.53769 14.3049 3.12526 13.145 2.29303 11.638C1.45909 10.1278 1.27377 8.38622 1.78028 6.75424C2.28597 5.12494 3.43832 3.74041 4.99212 2.85087ZM10.0038 3.25163C8.49571 3.0295 6.9537 3.3159 5.67684 4.04689C4.40111 4.77724 3.4908 5.89233 3.0965 7.16275C2.70304 8.4305 2.8438 9.78445 3.49945 10.9717C4.1568 12.1621 5.29253 13.1114 6.70627 13.6175C8.14676 14.1333 9.42716 14.2156 10.8336 13.7537C10.9825 13.7047 11.1437 13.7081 11.2905 13.7631L13.2536 14.4993L13.1292 12.9691C13.1118 12.7545 13.1957 12.544 13.356 12.4002C14.4168 11.4492 15.0337 10.1953 15.1131 8.88506C15.1924 7.57544 14.7311 6.2739 13.7963 5.23074C12.8595 4.18533 11.5117 3.47374 10.0038 3.25163Z"
          fill="#666B72"
        />
        <path
          d="M5.83394 7.64793C5.83394 7.26737 6.14245 6.95885 6.52302 6.95885H11.4769C11.8575 6.95885 12.166 7.26737 12.166 7.64793C12.166 8.0285 11.8575 8.33701 11.4769 8.33701H6.52302C6.14245 8.33701 5.83394 8.0285 5.83394 7.64793Z"
          fill="#666B72"
        />
        <path
          d="M5.83394 10.2552C5.83394 9.87465 6.14245 9.56614 6.52302 9.56614H9.61456C9.99513 9.56614 10.3036 9.87465 10.3036 10.2552C10.3036 10.6358 9.99513 10.9443 9.61456 10.9443H6.52302C6.14245 10.9443 5.83394 10.6358 5.83394 10.2552Z"
          fill="#666B72"
        />
      </svg>
    ),
  },
  {
    label: "My Ads",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M7.875 5.875C7.875 5.73693 7.98693 5.625 8.125 5.625H12.6875C12.8256 5.625 12.9375 5.73693 12.9375 5.875V6.5C12.9375 6.63807 12.8256 6.75 12.6875 6.75H8.125C7.98693 6.75 7.875 6.63807 7.875 6.5V5.875ZM14.25 2.25H3.75C2.925 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.925 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V3.75C15.75 2.925 15.075 2.25 14.25 2.25ZM14.25 14C14.25 14.1381 14.1381 14.25 14 14.25H4C3.86193 14.25 3.75 14.1381 3.75 14V4C3.75 3.86193 3.86193 3.75 4 3.75H14C14.1381 3.75 14.25 3.86193 14.25 4V14ZM6.75 6.5C6.75 6.63807 6.63807 6.75 6.5 6.75H5.5C5.36193 6.75 5.25 6.63807 5.25 6.5V5.875C5.25 5.73693 5.36193 5.625 5.5 5.625H6.5C6.63807 5.625 6.75 5.73693 6.75 5.875V6.5Z"
          fill="#666B72"
        />
        <path
          d="M12.6562 8.4375H8.15625C8.00092 8.4375 7.875 8.56342 7.875 8.71875V9.28125C7.875 9.43658 8.00092 9.5625 8.15625 9.5625H12.6562C12.8116 9.5625 12.9375 9.43658 12.9375 9.28125V8.71875C12.9375 8.56342 12.8116 8.4375 12.6562 8.4375Z"
          fill="#666B72"
        />
        <path
          d="M5.53125 9.5625H6.46875C6.62408 9.5625 6.75 9.43658 6.75 9.28125V8.71875C6.75 8.56342 6.62408 8.4375 6.46875 8.4375H5.53125C5.37592 8.4375 5.25 8.56342 5.25 8.71875V9.28125C5.25 9.43658 5.37592 9.5625 5.53125 9.5625Z"
          fill="#666B72"
        />
        <path
          d="M12.6555 11.25H8.15552C8.00019 11.25 7.87427 11.3759 7.87427 11.5312V12.0938C7.87427 12.2491 8.00019 12.375 8.15552 12.375H12.6555C12.8108 12.375 12.9368 12.2491 12.9368 12.0938V11.5312C12.9368 11.3759 12.8108 11.25 12.6555 11.25Z"
          fill="#666B72"
        />
        <path
          d="M5.53052 12.375H6.46802C6.62335 12.375 6.74927 12.2491 6.74927 12.0938V11.5312C6.74927 11.3759 6.62335 11.25 6.46802 11.25H5.53052C5.37519 11.25 5.24927 11.3759 5.24927 11.5312V12.0938C5.24927 12.2491 5.37519 12.375 5.53052 12.375Z"
          fill="#666B72"
        />
      </svg>
    ),
  },
];

const CATEGORIES = [
  { label: "Motors", isNew: true, href: "/motors" },
  { label: "Property", isNew: true, href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Classifieds", href: "/classified" },
  { label: "Furniture & Garden", href: "/furniture-home-garden" },
  { label: "Mobiles & Tablets", href: "/mobile" },
  { label: "Community", href: "/community" },
];

export default function DubizzleNav() {
    const [open, setOpen] = useState(false);
    const [city, setCity] = useState("dubai");

  return (
    <header className=" top-0 z-50 bg-white">
      <div className="border-b border-b-gray-200">
        <div className="mx-auto max-w-7xl px-3 sm:px-4">
          <div className="flex h-16 items-center justify-between gap-3">
            <div className="flex items-center gap-6">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 select-none"
              >
                <img src={logo} alt="" height="36px" width="111px" />
              </a>

              <CitySelect value={city} onChange={setCity} />
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {ACTIONS.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  className="group inline-flex flex-col items-center text-xs font-semibold text-neutral-500 hover:text-neutral-800"
                >
                  <div className="h-5 w-5 mb-1">{icon}</div>

                  <span>{label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hidden sm:inline text-sm font-semibold text-neutral-700 hover:text-neutral-900"
              >
                Log in or sign up
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Place Your Ad
              </a>

              <button
                className="lg:hidden -mr-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200"
                aria-label="Open menu"
                onClick={() => setOpen((v) => !v)}
              >
                <span className="sr-only">Menu</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-t-gray-200">
          <div className="mx-auto max-w-7xl px-3 sm:px-4">
            <nav className="flex h-12 px-5 items-center justify-between overflow-x-auto text-sm">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.label}
                  to={c.href}
                  className="whitespace-nowrap font-semibold text-black hover:text-neutral-900"
                >
                  {c.label}
                  {c.isNew && (
                    <span className="ml-2 align-middle rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                      NEW
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-b border-b-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 py-3">
            <CitySelect value={city} onChange={setCity} />

            <div className="mt-4 grid grid-cols-3 gap-4">
              {ACTIONS.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  className="flex flex-col items-center rounded-md border p-3 text-xs text-neutral-600"
                >
                  <div className="h-5 w-5 mb-1">{icon}</div>
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {CATEGORIES.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="text-sm text-neutral-800"
                >
                  {c.label}{" "}
                  {c.isNew && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                      NEW
                    </span>
                  )}
                </a>
              ))}
              <a href="#" className="mt-2 text-sm text-neutral-700">
                Log in or sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
