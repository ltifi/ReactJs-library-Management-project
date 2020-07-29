import React, { useState, useEffect } from "react";
import AdminHeader from "../Headeradmin/AdminHeader";
import { fetchBooks, onSubmit } from "../../../services/books.service";

const AddBook = () => {
  const [libellé, setLibellé] = useState("");
  const [auteur, setAuteur] = useState("");
  const [édition, setEdition] = useState("");
  const [nbreExemplaires, setNbreExemplaires] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBooks();
      if (!JSON.parse(localStorage.getItem("books"))) {
        localStorage.setItem("books", JSON.stringify(result));
      }
    };
    fetchData();
  }, []);
  const handleSubmit = (e) => {
    onSubmit(e, libellé, auteur, édition, nbreExemplaires);
    setLibellé("");
    setAuteur("");
    setEdition("");
    setNbreExemplaires("");
  };

  return (
    <div>
      <AdminHeader />
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Ajouter un livre</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input
                arial-label="libelle"
                type="text"
                className="form-control form-control-lg"
                placeholder="entrer le libellé"
                name="libellé"
                value={libellé}
                onChange={(e) => setLibellé(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                arial-label="auteur"
                type="text"
                className="form-control form-control-lg"
                placeholder="entrer le nom d'auteur"
                name="auteur"
                value={auteur}
                onChange={(e) => setAuteur(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                arial-label="edition"
                type="text"
                className="form-control form-control-lg"
                placeholder="entrer l'édition"
                name="édition"
                value={édition}
                onChange={(e) => setEdition(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                arial-label="nbreExemplaires"
                type="number"
                className="form-control form-control-lg"
                placeholder="Entrer le nombre d'exemplaires"
                name="nbreExemplaires"
                value={nbreExemplaires}
                onChange={(e) => setNbreExemplaires(e.target.value)}
              />
            </div>

            <button data-testid="submit" className="btn btn-primary btn-block">
              Ajouter livre
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddBook;
