import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAdherent } from "../../../services/user.service";
import { getEmprunt } from "../../../services/emprunts.service";

const AdherentDetails = () => {
  const { id_user } = useParams();
  const utilisateur = getAdherent(id_user);
  const emprunt = getEmprunt(id_user);
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/listadherents">
        Return
      </Link>
      <h1 className="display-4">Name: {utilisateur[0].name}</h1>
      {emprunt.length ? (
        <div>
          <div className="row">
            {emprunt.map((e, index) => (
              <div className="col-lg-6">
                <hr />
                <ul className="list-group w-50">
                  <li className="list-group-item">
                    name: {utilisateur[0].name}
                  </li>
                  <li className="list-group-item">
                    user name: {utilisateur[0].userName}
                  </li>
                  <li className="list-group-item">
                    email: {utilisateur[0].email}
                  </li>
                  <li className="list-group-item">libellé: {e.libellé}</li>
                  <li className="list-group-item">
                    Date d'emprunt: {e.dateEmprunt}
                  </li>
                  <li className="list-group-item">
                    Date de retour: {e.dateEmprunt}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>User have no Empruns</div>
      )}
    </div>
  );
};

export default AdherentDetails;
