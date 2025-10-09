import Footer from "./Footer";
import CitySearchHero from "./CitySearchHero";
import DownloadAppBanner from "./DownloadAppBanner";
import ExploreCards from "./ExploreCard";
import DubizzleNav from "./Navbar";
import PopularCategories from "./PopularCategories";
import PopularInCar from "./PopularInCar";
import PopularInComputer from "./PopularInComputer";
import PopularInEquipment from "./PopularInEquipment";
import PopularInFurniture from "./PopularInFurniture";
import PopularInMobile from "./PopularInMobile";
import PopularInRent from "./PopularInRent";
import PopularInRoom from "./PopularInRoom";
import PopularInSale from "./PopularInSale";
import VerifiedBadgeBanner from "./VerifiedBadgeBanner";

export const HomePage = () => {
  return (
      <>
           <DubizzleNav />
                <CitySearchHero
                  city="Ras al Khaimah"
                  backgroundUrl="/images/ras-al-khaimah.jpg"
                  onSearch={({ q, category, city }) => {
                    //search logic todo
                    console.log({ q, category, city });
                  }}
                />
          
                <ExploreCards/>
                <PopularCategories />
                <VerifiedBadgeBanner />
                <PopularInRent />
                <PopularInCar />
                <PopularInFurniture />
                <PopularInSale />
                <PopularInComputer />
                <PopularInMobile />
                <PopularInRoom />
                <PopularInEquipment />
          <DownloadAppBanner />
          <Footer/>
      </>)
}
