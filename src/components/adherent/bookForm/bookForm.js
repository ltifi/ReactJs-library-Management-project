import React, { useState, useRef, memo, useEffect } from "react";
import "./bookForm.css";
function BookForm({ addBook }) {
  const [libellé, setLibellé] = useState("");
  const [auteur, setAuteur] = useState("");
  const [édition, setEdition] = useState("");
  const [nbreExemplaires, setNbreExemplaires] = useState(0);

  const inputLibellé = useRef(null);
  const handleAddBook = () => {
    addBook(libellé, auteur, édition, nbreExemplaires);
    inputLibellé.current.focus();
    setLibellé("");
    setAuteur("");
    setEdition("");
    setNbreExemplaires(0);
  };
  useEffect(() => {
    // console.log("hello")
    document.libellé = libellé;
    // setTitle("hello"+ Math.random())
  });

  return (
    <div className="task-form">
      <input
        type="text"
        name="book"
        value={libellé}
        ref={inputLibellé}
        onChange={(e) => setLibellé(e.target.value)}
      />
      <input
        type="text"
        name="book"
        value={auteur}
        onChange={(e) => setAuteur(e.target.value)}
      />
      <input
        type="text"
        name="book"
        value={édition}
        onChange={(e) => setEdition(e.target.value)}
      />

      <input
        type="number"
        value={nbreExemplaires}
        name="nbreExemplaires"
        onChange={(e) => setNbreExemplaires(e.target.value)}
      />
      <button className="button" onClick={handleAddBook}>
        Add a book
      </button>
    </div>
  );
}
export default memo(BookForm);
