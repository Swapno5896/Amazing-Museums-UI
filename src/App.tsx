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
import Footer from "./components/Home/Footer/Footer";
import MainHistory from "./Pages/MainHistory/MainHistory";
import MainContact from "./Pages/MainContact/MainContact";
const App = () => {
  return (
    <>
      <Router>
        <MyNavBar />
        <Switch>
          <Route exact path='/'>
            <MainHome />
          </Route>
          <Route  path='/home'>
            <MainHome />
          </Route>
          <Route  path='/events'>
            <MainEventa />
          </Route>
          <Route  path='/history'>
            <MainHistory />
          </Route>
          <Route  path='/gallary'>
            <MainGallary />
          </Route>
          <Route  path='/admin'>
            <MainAdmin />
          </Route>
          <Route  path='/contact'>
            <MainContact />
          </Route>
        </Switch>
        <Footer />
      </Router>
   

    </>
  );
};

export default App;