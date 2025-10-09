import ClassifiedsFilterBar from "../components/ClassifiedsFilterBar"
import ClassifiedsResults from "../components/ClassifiedsResults"
import ListingsHeader from "../components/ListingsHeader"
import DownloadAppBanner from "../HomePage/DownloadAppBanner"
import Footer from "../homePage/Footer"
import DubizzleNav from "../HomePage/Navbar"
import Breadcrumb from "../productPage/Breadcrumb"

const FurnitureAndGarden = () => {
const headerProps = {
  titlePrefix: "New and Used",
  category: "Furniture, Home & Garden",
  region: "UAE",
  totalAds: 159149,
  subcats: [
    { label: "Furniture", count: 91787, href: "#" },
    { label: "Home Accessories", count: 10645, href: "#" },
    { label: "Garden & Outdoor", count: 5340, href: "#" },
    { label: "Rugs & Carpets", count: 2624, href: "#" },
    { label: "Lighting & Fans", count: 2608, href: "#" },
  ],
  seller: "all",
  onSellerChange: (v) => console.log("seller:", v),
  sort: "Default",
  sortOptions: ["Default", "Newest", "Price: Low to High", "Price: High to Low"],
  onSortClick: () => console.log("open sort"),
  onSaveSearch: () => console.log("save search"),
  onViewMore: () => console.log("view more"),
};

  return (
    <>
          <DubizzleNav /> 
          <ClassifiedsFilterBar />
          <Breadcrumb   backHref="/search"
        items={[
          { label: "All Cities(UAE)", href: "/real-estate-for-sale" },
          { label: "Classified", href: "/real-estate-for-sale/sharjah" },
          { label: "Furniture, Home and Garden", href: "/real-estate-for-sale/sharjah/hoshi" },
              ]} />
          <ListingsHeader {...headerProps} />
          <ClassifiedsResults />
          <DownloadAppBanner />
          <Footer/>
    </>
  )
}

export default FurnitureAndGarden
