import DownloadAppBanner from "../HomePage/DownloadAppBanner"
import Footer from "../homePage/Footer"
import DubizzleNav from "../HomePage/Navbar"
import PopularInEquipment from "../HomePage/PopularInEquipment"
import VerifiedBadgeBanner from "../HomePage/VerifiedBadgeBanner"
import ClassifiedCategoryStats from "./ClassifiedCategoryStats"
import ClassifiedHero from "./ClassifiedHero"

const ClassifiedPage = () => {
  return (
    <>
          <DubizzleNav />
      <ClassifiedHero />
      <ClassifiedCategoryStats />
      <VerifiedBadgeBanner/>
      <PopularInEquipment />
      <DownloadAppBanner/>
          <Footer/>
    </>
  )
}

export default ClassifiedPage
