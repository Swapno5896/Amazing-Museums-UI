import React from 'react';
import MyNavBar from './components/Home/myNavBar/MyNavBar';
import SmallGllery from './components/Home/SmallGllery/SmallGllery';
import Events from './components/Home/Events/Events';
const App = () => {
  return (
    <div>
      <MyNavBar />
      <SmallGllery />
      <Events />
    </div>
  );
};

export default App;