// Somewhere in your page
import ProductGridSection from "./ProductSection";

export default function PopularInCar() {
  const items = [
    {
      href: "#",
      image: "../src/assets/populer/car1.webp",
      price: 19900,
      meta: "Ford • Mustang • Ecoboost",
      title: "2015 • 149,000 km",
    },
    {
      href: "#",
      image: "../src/assets/populer/car2.webp",
      price: 17500,
      meta: "Chevrolet • Impala • LT",
      title: "2017 • 210,800 km",
    },
    {
      href: "#",
      image: "../src/assets/populer/car3.webp",
      price: 61000,
      meta: "Mitsubishi • Pickup • Other",
      title: "2012 • 300,000 km",
    },
    {
      href: "#",
      image: "../src/assets/populer/car4.webp",
      price: 24500,
      meta: "Nissan • Maxima • Other",
      title: "2018 • 190,000 km",
    },
    {
      href: "#",
      image: "../src/assets/populer/car5.webp",
      price: 43500,
      meta: "Toyota • Land Cruiser • GXR",
      title: "2006 • 390,000 km",
    },
  ];

  return (
    <ProductGridSection
      title="Popular in Cars"
      items={items}
      columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    />
  );
}
