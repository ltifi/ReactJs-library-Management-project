import React from "react";
import { getBook } from "../../../services/books.service";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const bookDetail = getBook(id);
  return (
    <div>
      <Link className="btn btn-primary" to="/listlivres">
        Return
      </Link>
      <center>
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-group w-50">
              <li className="list-group-item">
                Libellé: {bookDetail[0].libellé}
              </li>
              <li className="list-group-item">
                Auteur: {bookDetail[0].auteur}
              </li>
              <li className="list-group-item">
                Edition: {bookDetail[0].édition}
              </li>
              <li className="list-group-item">
                Nombre d'exemplaires: {bookDetail[0].nbreExemplaires}
              </li>
            </ul>
          </div>
        </div>
      </center>
    </div>
  );
};
export default BookDetails;
