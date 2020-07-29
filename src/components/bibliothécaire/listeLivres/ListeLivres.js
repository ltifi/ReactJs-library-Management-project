import React, { useEffect } from "react";
import { fetchBooks } from "../../../services/books.service";
import { useState } from "react";
import AdminHeader from "../Headeradmin/AdminHeader";
import { Link } from "react-router-dom";

const ListeLivres = () => {
  const ListArch = JSON.parse(localStorage.getItem("ListArchives"))
    ? JSON.parse(localStorage.getItem("ListArchives"))
    : [];

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBooks();

      if (!JSON.parse(localStorage.getItem("books"))) {
        localStorage.setItem("books", JSON.stringify(result));
      } else {
        setBooks(JSON.parse(localStorage.getItem("books")));
      }
    };
    fetchData();
  }, []);
  const handleAccept = (book) => {
    const arch = books.filter((b) => b.id !== book.id);
    localStorage.setItem("books", JSON.stringify(arch));
    setBooks(arch);
    localStorage.setItem("ListArchives", JSON.stringify([...ListArch, book]));
  };

  return (
    <div>
      {" "}
      <AdminHeader />
      <div className="container">
        <div className="py-4">
          <h1>Liste des livres</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Libellé</th>
                <th scope="col">Auteur</th>
                <th scope="col">Edition</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{book.libellé}</td>
                  <td>{book.auteur}</td>
                  <td>{book.édition}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/bookdetails/${book.id}`}
                    >
                      View details
                    </Link>
                    <button
                      className="btn btn-outline-primary mr-2"
                      onClick={() => handleAccept(book)}
                    >
                      {" "}
                      Archiver
                    </button>
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
export default ListeLivres;
