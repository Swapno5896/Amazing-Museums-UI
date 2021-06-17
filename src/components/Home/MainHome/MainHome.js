import React from "react";
import MyNavBar from "./../myNavBar/MyNavBar";
import TopBanner from "../TopBanner/TopBanner";
import Footer from "../Footer/Footer";
import SmallGllery from "./../SmallGllery/SmallGllery";
import SmallHistory from "./../SmallHistory/SmallHistory";
import Events from "../../Events/Events/Events";
const MainHome = () => {
  return (
    <div>
      <MyNavBar />
      <TopBanner />
      <SmallGllery />
      <SmallHistory />
      <Events />
      <Footer />
    </div>
  );
};

export default MainHome;
