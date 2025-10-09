import GroupLogo from "../assets/dubizzle-group.png";
import RightsBadge from "../assets/consumer-rights-badge.png";

export default function Footer() {
  return (
    <footer className=" bg-neutral-50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
          <div>
            <h4 className="text-[15px] font-semibold text-neutral-900">
              Company
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Legal Hub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold text-neutral-900">UAE</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Dubai
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Abu Dhabi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Ras Al Khaimah
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Sharjah
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Fujairah
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Ajman
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Umm Al Quwain
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Al Ain
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold text-neutral-900">
              Other Countries
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Egypt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Bahrain
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Saudi Arabia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Kuwait
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Oman
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Qatar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold text-neutral-900">
              Get Social
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold text-neutral-900">
              Support
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                >
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold text-neutral-900">
              Languages
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-blue-700 hover:underline"
                  dir="rtl"
                >
                  العربية
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center justify-center flex-col gap-4">
            <img src={GroupLogo} alt="dubizzle group" className="h-20 w-auto" />
            <p className="text-xs font-semibold text-neutral-500">
              © dubizzle.com 2025, All Rights Reserved.
            </p>
          </div>

          <img
            src={RightsBadge}
            alt="Consumer Rights"
            className="h-40 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}
