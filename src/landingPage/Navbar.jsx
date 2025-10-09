import logo from "../assets/dubizzle-logo.png"
const Navbar = () => {
  return (
    <header className=" top-0 z-50 bg-white/90 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className="grid grid-cols-3 items-center h-14 lg:h-24">
          <div className="justify-self-start inline-block" />

          <a
            to="/"
            className="justify-self-center inline-flex items-center gap-1 select-none pt-2 pb-4"
                  >
                      
                      <span className="h-[24px] w-[155px] bg-no-repeat bg-center lg:h-[48px] lg:w-[155px]" style={{ backgroundImage: `url(${logo})`,  backgroundSize: "contain" }}></span>
                     
           
          </a>

          <div className="justify-self-end">
            <button
              type="button"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition"
              dir="rtl"
              aria-label="Switch to Arabic"
              title="العربية"
              onClick={() => console.log("switch to Arabic")}
            >
              العربية
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
