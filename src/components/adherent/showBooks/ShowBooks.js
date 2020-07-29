import React from "react";
import { useParams } from "react-router-dom";
import "./ShowBooks.css";
import "./ShowBooks.css";
import { useEffect, useState, useCallback } from "react";
import { fetchBooks2 } from "../../../services/books.service";
import { empruntBook } from "../../../services/emprunts.service";
import BooksList from "../booksList/BooksList";
import Header from "../../adherent/common/Header";

function ShowBooks() {
  const { userId } = useParams();
  console.log(userId, "showbooks");
  const [emprunts, setEmprunts] = useState(
    JSON.parse(localStorage.getItem("listEmprunts"))
      ? JSON.parse(localStorage.getItem("listEmprunts"))
      : []
  );
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("libellé");

  const demande = localStorage.getItem(userId + "a");

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setLoading(true);

      const result = await fetchBooks2(searchValue, filterType);
      console.log("result: ", didCancel);
      if (!didCancel) {
        setBooks(result);
        setLoading(false);
      }
    };
    // }
    fetchData();

    return () => {
      console.log("cleanup: ", searchValue);
      didCancel = true;
    };
  }, [searchValue]);

  console.log(userId, "showbooks");
  return (
    <div>
      <Header userId={userId} />
      <div>
        {demande ? (
          <div>You are not authorized to see books </div>
        ) : (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <select
                    className="mdb-select md-form colorful-select dropdown-primary search"
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <option value="libellé">rechercher par libellé</option>
                    <option value="auteur">rechercher par auteur</option>
                  </select>
                </div>
                <div className="col-lg-1">
                  <div className="search">
                    <input
                      type="search"
                      name="search"
                      placeholder={`nom de ${filterType}`}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {loading ? (
              <div>Loading ... </div>
            ) : (
              <BooksList
                id_user={userId}
                books={books}
                empruntBook={empruntBook}
                empruntMode={false}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowBooks;
