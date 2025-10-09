import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";
import ProductPage from "./productPage/ProductPage";
import { HomePage } from "./HomePage/HomePage";
import AgentPropertyAds from "./agentPage/AgentPropertyAds";
import MotorPage from "./motorPage/MotorPage";
import ClassifiedPage from "./classified/ClassifiedPage";
import CommunityPage from "./community/CommunityPage";
import FurnitureAndGarden from "./furnitureAndGarden/FurnitureAndGarden";
import MobilePhones from "./mobilePhones/MobilePhones";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profile" element={<AgentPropertyAds />} />
        <Route path="/motors" element={<MotorPage />} />
        <Route path="/classified" element={<ClassifiedPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/furniture-home-garden" element={<FurnitureAndGarden />} />
        <Route path="/mobile" element={<MobilePhones/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
