import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import Footer from "../Footer/Footer";
import SmallGllery from "./../SmallGllery/SmallGllery";
import SmallHistory from "./../SmallHistory/SmallHistory";
import Events from "../../Events/Events/Events";
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
