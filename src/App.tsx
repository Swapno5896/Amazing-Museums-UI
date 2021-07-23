import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainHome from '../src/Pages/MainHome/MainHome'
import MainEventa from './Pages/MainEventa/MainEventa';
import MainGallary from '../src/Pages/MainGallary/MainGallary'
import MyNavBar from './components/Home/myNavBar/MyNavBar';
import MainAdmin from './Pages/MainAdmin/MainAdmin'
const App = () => {
  return (
    <>
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
          <Route exact path='/admin'>
            <MainAdmin />
          </Route>
        </Switch>
      </Router>
   

    </>
  );
};

export default App;