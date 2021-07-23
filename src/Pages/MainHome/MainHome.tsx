import React from "react";
import TopBanner from "../../components/Home/TopBanner/TopBanner";
import Footer from "../../components/Home/Footer/Footer";
import SmallGllery from "../../components/Home/SmallGllery/SmallGllery";
import SmallHistory from "../../components/Home/SmallHistory/SmallHistory";
import Events from "../../components/Events/Events/Events";
const MainHome = () => {
  return (
    <div>
      <TopBanner />
      <SmallGllery />
      <SmallHistory />
      <Events />
      <Footer />
    </div>
  );
};

export default MainHome;
