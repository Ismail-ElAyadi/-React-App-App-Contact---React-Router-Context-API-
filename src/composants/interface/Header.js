import React from "react";
import{Link} from "react-router-dom"

const Header = () => {
    return (
    <div>
        <nav className="navbar navbar-dark bg-dark mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">AppContacts</a>
            <ul className="navbar-nav ">
            <li className="nav-item ml-auto">
                <Link to="/liste" className="nav-link d-inline-block mr-3">
                Liste
                </Link>
                <Link to="/ajout" className="nav-link d-inline-block mr-3">
                Ajouter
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    </div>
    );
};

export default Header;
