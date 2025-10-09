import DownloadAppBanner from "../HomePage/DownloadAppBanner"
import Footer from "../homePage/Footer"
import DubizzleNav from "../HomePage/Navbar"
import PopularInCar from "../HomePage/PopularInCar"
import CarInspectionBanner from "./CarInspectionBanner"
import MotorsCategoryStats from "./MotorsCategoryStats"
import MotorsHero from "./MotorsHero"
import Testimonials from "./Testimonials"

const MotorPage = () => {
  return (
    <>
          <DubizzleNav />
      <MotorsHero />
      <MotorsCategoryStats />
      <PopularInCar />
      <CarInspectionBanner />
      <Testimonials />
      <DownloadAppBanner/>
          <Footer/>
    </>
  )
}

export default MotorPage
