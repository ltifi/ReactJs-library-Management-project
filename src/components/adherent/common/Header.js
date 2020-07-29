import React from "../../../../node_modules/react";
import {
  Link,
  NavLink,
  useHistory,
} from "../../../../node_modules/react-router-dom";
import image from "./images/bib.jpg";
import "./Header.css";

const Header = ({ userId }) => {
  const history = useHistory();
  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  console.log(userId, "HEADER");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to={`/HomePage/${userId}`}>
        <img
          src={image}
          className="d-inline-block align-top"
          width="auto"
          height="50"
          alt="log"
        />
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <div className="nav-link">
              <NavLink to={`/HomePage/${userId}`}>Accueil </NavLink>
            </div>
          </li>
          <li className="nav-item ">
            <div className="nav-link">
              {" "}
              <NavLink to={`/ShowBooks/${userId}`}>Liste de livres </NavLink>
            </div>
          </li>
          <li className="nav-item ">
            <div className="nav-link">
              {" "}
              <NavLink to={`/EmpruntList/${userId}`}>
                Liste des emprunts
              </NavLink>
            </div>
          </li>
        </ul>
      </div>

      <button onClick={Logout}>Logout</button>
    </nav>
  );
};

export default Header;
