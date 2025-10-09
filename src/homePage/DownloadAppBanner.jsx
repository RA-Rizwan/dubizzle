import Phone from "../assets/phone-mock.png";
import AppStore from "../assets/appstore-badge.png";
import PlayStore from "../assets/googleplay-badge.png";
import AppGallery from "../assets/appgallery-badge.svg";

export default function DownloadAppBanner() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-4 mt-6 bg-[#f7f7f7]">
      <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-[#f7f7f7] md:flex-row">
        {/* Left: text */}
        <div className="text-center md:text-left">
          <h2 className="text-[22px] font-semibold text-neutral-900">
            Find amazing deals on the go.
          </h2>
          <p className="mt-1 text-[22px] font-semibold text-red-600">
            Download the app now!
          </p>
        </div>

        <img
          src={Phone}
          alt="App preview"
          className="order-3 h-28 w-auto object-contain md:order-none md:h-18"
        />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#" aria-label="Download on the App Store">
            <img
              src={AppStore}
              alt="App Store"
              className="h-10 w-auto md:h-11"
            />
          </a>
          <a href="#" aria-label="Get it on Google Play">
            <img
              src={PlayStore}
              alt="Google Play"
              className="h-10 w-auto md:h-11"
            />
          </a>
          <a href="#" aria-label="Explore it on AppGallery">
            <img
              src={AppGallery}
              alt="AppGallery"
              className="h-10 w-auto md:h-11"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
