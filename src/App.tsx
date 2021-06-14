import React from 'react';
import MyNavBar from './components/Home/myNavBar/MyNavBar';
import SmallGllery from './components/Home/SmallGllery/SmallGllery';
import Events from './components/Home/Events/Events';
import Footer from './components/Home/Footer/Footer';
const App = () => {
  return (
    <div>
      <MyNavBar />
      <SmallGllery />
      <Events />
      <Footer />
    </div>
  );
};

export default App;