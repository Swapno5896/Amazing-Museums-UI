import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import img1 from '../../../images/m-1.png'
import img2 from '../../../images/m-2.png'
import img3 from '../../../images/m-m.png'
const MyNavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Musemum</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/events'>Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/gallary'>Gallary</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default MyNavBar;