import React, { useState } from "react";
import AdminHeader from "../Headeradmin/AdminHeader";
import { Link } from "react-router-dom";

const DemandesAdhésion = () => {
  const [Demande, setDemande] = useState(
    JSON.parse(localStorage.getItem("DemandesAdh"))
      ? JSON.parse(localStorage.getItem("DemandesAdh"))
      : []
  );
  const ListAdh = JSON.parse(localStorage.getItem("ListAdherents"))
    ? JSON.parse(localStorage.getItem("ListAdherents"))
    : [];

  const handleAccept = (user) => {
    const a = Demande.filter((d) => d.id_user !== user.id_user);
    localStorage.setItem("DemandesAdh", JSON.stringify(a));
    setDemande(a);
    localStorage.setItem("ListAdherents", JSON.stringify([...ListAdh, user]));
  };
  const handleRefuse = (user) => {
    const a = Demande.filter((d) => d.id_user !== user.id_user);
    localStorage.setItem("DemandesAdh", JSON.stringify(a));

    setDemande(a);
  };

  return (
    <div>
      {" "}
      <AdminHeader />
      <div className="container">
        <div className="py-4">
          <h1>Liste des demandes d'adhésion</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Demande.map((d, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{d.id_user}</td>
                  <td>{d.name}</td>
                  <td>{d.userName}</td>
                  <td>{d.email}</td>
                  <td>
                    <Link to="/demandes">
                      {" "}
                      <button
                        className="btn btn-outline-primary mr-2"
                        onClick={() => handleAccept(d)}
                      >
                        {" "}
                        Accepter
                      </button>
                    </Link>
                    <Link to="/demandes">
                      {" "}
                      <button
                        className="btn btn-danger mr-2"
                        onClick={() => handleRefuse(d)}
                      >
                        {" "}
                        Refuser
                      </button>
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
export default DemandesAdhésion;
