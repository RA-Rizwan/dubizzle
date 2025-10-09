// Somewhere in your page
import ProductGridSection from "./ProductSection";

export default function PopularInMobile() {
  const items = [
    {
      href: "#",
      image: "../src/assets/populer/m1.webp",
      price: 450,
      meta: "Brand new 120x190cm double b...",
      title: "Seih Al Uraibi",
    },
    {
      href: "#",
      image: "../src/assets/populer/m2.webp",
      price: 2399,
      meta: "Stylish Contemporary L-Shaped...",
      title: "Aljazeera Al Hamra",
    },
    {
      href: "#",
      image: "../src/assets/populer/m3.webp",
      price: 1099,
      meta: "Stylish and Cozy Sofa for Your Li...",
      title: "Al Marjan Island",
    },
    {
      href: "#",
      image: "../src/assets/populer/m4.webp",
      price: 1550,
      meta: "Elegant Modern Grey Sofa - Perf...",
      title: "Mina Al Arab",
    },
    {
      href: "#",
      image: "../src/assets/populer/m5.webp",
      price: 3199,
      meta: "Stylish Modern U-shaped Sofa S...",
      title: "Al Hamra Village",
    },
  ];

  return (
    <ProductGridSection
      title="Popular in Mobile Phones & Tablets"
      items={items}
      columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    />
  );
}
