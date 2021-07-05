import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainHome from '../src/components/Home/MainHome/MainHome'
import MainEventa from './components/Events/MainEventa/MainEventa';
import MainGallary from '../src/components/Gallary/MainGallary/MainGallary'
import MyNavBar from './components/Home/myNavBar/MyNavBar';
const App = () => {
  return (
    <div>
      <Router>
        <MyNavBar />
        <Switch>
          <Route exact path='/'>
            <MainHome />
          </Route>
          <Route exact path='/home'>
            <MainHome />
          </Route>
          <Route exact path='/events'>
            <MainEventa />
          </Route>
          <Route exact path='/gallary'>
            <MainGallary />
          </Route>
        </Switch>
      </Router>
   

    </div>
  );
};

export default App;