// Somewhere in your page
import ProductGridSection from "./ProductSection";

export default function PopularInRent() {
  const items = [
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
    {
      href: "#",
      image: "../src/assets/populer/5.webp",
      price: 88000,
      meta: "2 Beds · 3 Baths",
      title: "Gateway II Residences, Hayat Island, Mina Al Arab",
    },
  ];

  return (
    <ProductGridSection
      title="Popular in Residential for Rent"
      items={items}
      columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    />
  );
}
