
const EMIRATES = [
  { name: "Dubai", host: "dubai.dubizzle.com" },
  { name: "Abu Dhabi", host: "abudhabi.dubizzle.com" },
  { name: "Sharjah", host: "sharjah.dubizzle.com" },
  { name: "Ajman", host: "ajman.dubizzle.com" },
  { name: "Al Ain", host: "alain.dubizzle.com" },
  { name: "Ras Al Khaimah", host: "rak.dubizzle.com" },
  { name: "Fujairah", host: "fujairah.dubizzle.com" },
  { name: "Umm Al Quwain", host: "uaq.dubizzle.com" },
];

function itemsFor(name, host) {
  const base = `https://${host}`;
  return [
    { label: `Apartments for Sale in ${name}`, href: `${base}/` },
    { label: `Villa/House for Sale in ${name}`, href: `${base}/` },
    { label: `Apartments for Rent in ${name}`, href: `${base}/` },
    { label: `Villa/House for Rent in ${name}`, href: `${base}/` },
    { label: `Cars in ${name}`, href: `${base}/motors/` },
    { label: `Classifieds in ${name}`, href: `${base}/classifieds/` },
    { label: `Jobs in ${name}`, href: `${base}/jobs/` },
  ];
}

export default function ExploreUAE() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-7">
      <h2 className="text-center text-xl sm:text-2xl font-medium text-neutral-800 pb-6">
        Join millions of users to buy and sell anything in the UAE
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10 px-4">
        {EMIRATES.map((e) => {
          const links = itemsFor(e.name, e.host);
          return (
            <div key={e.host} className="space-y-2">
              <a href={e.host} className="text-[15px] font-bold text-neutral-800 hover:text-blue-400 hover:underline">
                dubizzle <span>{e.name}</span>
              </a>
              <ul className="space-y-1">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-blue-400 hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
