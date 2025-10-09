import DownloadAppBanner from "../HomePage/DownloadAppBanner"
import Footer from "../homePage/Footer"
import DubizzleNav from "../HomePage/Navbar"
import PopularInFurniture from "../HomePage/PopularInFurniture"
import VerifiedBadgeBanner from "../HomePage/VerifiedBadgeBanner"
import ClassifiedCategoryStats from "./CommunityCategoryStats"
import ClassifiedHero from "./CommunityHero"

const CommunityPage = () => {
  return (
    <>
          <DubizzleNav />
      <ClassifiedHero />
      <ClassifiedCategoryStats />
      <VerifiedBadgeBanner/>
      <PopularInFurniture />
      <DownloadAppBanner/>
          <Footer/>
    </>
  )
}

export default CommunityPage
