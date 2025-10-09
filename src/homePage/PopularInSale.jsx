// Somewhere in your page
import ProductGridSection from "./ProductSection";

export default function PopularInSale() {
  const items = [
    {
      href: "#",
      image: "../src/assets/populer/s1.webp",
      price: 6500300,
      meta: "4 Beds · 4 Baths",
      title: "Marbella Villas, Hayat Island, Mina Al Arab",
    },
    {
      href: "#",
      image: "../src/assets/populer/s2.webp",
      price: 1300000,
      meta: "1 Bed · 2 Baths",
      title: "Polynesia, Pacific, Al Marjan Island",
    },
    {
      href: "#",
      image: "../src/assets/populer/s3.webp",
      price: 800000,
      meta: "1 Bed · 2 Bath",
      title: "Marina Apartment C, Al Hamra Marina Residences, Al Hamra Village",
    },
    {
      href: "#",
      image: "../src/assets/populer/s4.webp",
      price: 470000,
      meta: "Studio · 1 Baths",
      title: "Royal Breeze 3, Royal Breeze Apartment, Al Hamra Village",
    },
    {
      href: "#",
      image: "../src/assets/populer/s5.webp",
      price: 3200000,
      meta: "Studio · 1 Baths",
      title:
        "The Unexpected Al Marjan Island Hotel and Residences, Al Marjan Island",
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
