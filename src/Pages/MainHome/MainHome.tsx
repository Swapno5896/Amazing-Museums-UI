import React from "react";
import TopBanner from "../../components/Home/TopBanner/TopBanner";
import Footer from "../../components/Home/Footer/Footer";
import SmallGllery from "../../components/Home/SmallGllery/SmallGllery";
import SmallHistory from "../../components/Home/SmallHistory/SmallHistory";
import Events from "../../components/Events/Events/Events";
import OppiningHours from "../../components/Home/OppiningHours/OppiningHours";
const MainHome = () => {
  return (
    <div>
      <TopBanner />
      <OppiningHours/>
      <SmallGllery />
      <SmallHistory />
      <Events />
      <Footer />
    </div>
  );
};

export default MainHome;
