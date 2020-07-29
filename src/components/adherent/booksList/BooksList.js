import React from "react";
import Book from "../book/Book";
import "./BooksList.css";
export default function BooksList({
  id_user,
  books,
  empruntBook,
  enleverBook,
  empruntMode,
}) {
  return (
    <div className="tasks-list">
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            id_user={id_user}
            id={book.id}
            libellé={book.libellé}
            auteur={book.auteur}
            édition={book.édition}
            nbreExemplaires={book.nbreExemplaires}
            dateEmprunt={book.dateEmprunt}
            empruntBook={empruntBook}
            empruntMode={empruntMode}
            enleverBook={enleverBook}
          />
        ))}
      </div>
    </div>
  );
}
