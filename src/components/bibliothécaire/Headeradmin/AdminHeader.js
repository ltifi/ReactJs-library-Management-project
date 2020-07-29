import React from "react";
import { Link, NavLink, useHistory, Redirect } from "react-router-dom";
import image from "../../adherent/common/images/bib.jpg";
const AdminHeader = () => {
  const history = useHistory();
  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/adminLayout">
          <img
            src={image}
            className="d-inline-block align-top"
            width="auto"
            height="50"
            alt="log"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/listadherents">
                Liste des adhérents
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/listlivres">
                Liste des livres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/demandes">
                Demandes d'adhésion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/archive">
                Livres archivés
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/emprunts">
                Emprunts
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/books/add">
          Add a book
        </Link>
      </div>
      <button className="btn btn-outline-light" onClick={Logout}>
        logout
      </button>
    </nav>
  );
};

export default AdminHeader;
