import ClassifiedsFilterBar from "../components/ClassifiedsFilterBar"
import ClassifiedsResults from "../components/ClassifiedsResults"
import ListingsHeader from "../components/ListingsHeader"
import DownloadAppBanner from "../HomePage/DownloadAppBanner"
import Footer from "../homePage/Footer"
import DubizzleNav from "../HomePage/Navbar"
import Breadcrumb from "../productPage/Breadcrumb"

const MobilePhones = () => {
  return (
    <>
          <DubizzleNav /> 
          <ClassifiedsFilterBar />
          <Breadcrumb   backHref="/search"
        items={[
          { label: "All Cities(UAE)", href: "/real-estate-for-sale" },
          { label: "Classified", href: "/real-estate-for-sale/sharjah" },
          { label: "Mobile Phones & Tablets", href: "/real-estate-for-sale/sharjah/hoshi" },
              ]} />
<ListingsHeader
  titlePrefix="New and Used"
  category="Mobile Phones & Tablets"
  region="UAE"
  totalAds={25062}
  subcats={[
    { label: "Mobile Phones", count: 91787, href: "#" },
    { label: "Mobile Phone & Tablet Accessories", count: 10645, href: "#" },
    { label: "Tablet", count: 5340, href: "#" },
    { label: "Other Mobile Phone & Tablets", count: 2624, href: "#" },
  ]}
  onViewMore={() => {}}
  seller="all"
  onSellerChange={() => {}}
  sort="Default"
  sortOptions={["Default", "Newest", "Price: Low to High", "Price: High to Low"]}
  onSortClick={() => {}}
  onSaveSearch={() => {}}
/>
          <ClassifiedsResults />
          <DownloadAppBanner />
          <Footer/>
    </>
  )
}

export default MobilePhones
