import React, { useState } from "react";
import AdminHeader from "../Headeradmin/AdminHeader";
import { Link } from "react-router-dom";

const Emprunts = () => {
  const [emprunts, setEmprunts] = useState(
    JSON.parse(localStorage.getItem("listEmprunts"))
      ? JSON.parse(localStorage.getItem("listEmprunts"))
      : []
  );
  return (
    <div>
      {" "}
      <AdminHeader />
      <div className="container">
        <div className="py-4">
          <h1>Liste des Emprunts</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">id utilisateur</th>
                <th scope="col">Libellé</th>
                <th scope="col">Etat d'emprunt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {emprunts.map((e, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{e.id_user}</td>
                  <td>{e.libellé}</td>
                  <td>
                    {Math.floor(
                      (new Date() - new Date(e.dateEmprunt)) /
                        (1000 * 3600 * 24)
                    ) > 15 ? (
                      "en retard"
                    ) : (
                      <i className="fa fa-circle text-success" id="tlp2"></i>
                    )}
                  </td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/books/${e.id}`}
                    >
                      View details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Emprunts;
