import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EmpruntList.css";
import "../../bibliothécaire/Home.css";
import BooksList from ".././booksList/BooksList";
import Header from "../../adherent/common/Header";
function EmpruntList() {
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);

  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem(userId))
      ? JSON.parse(localStorage.getItem(userId))
      : []
  );
  console.log("mmmm", books);

  const enleverBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    alert("book deleted");
  };

  return (
    <div className="App">
      <Header userId={userId} />
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <BooksList books={books} empruntMode={true} enleverBook={enleverBook} />
      )}
    </div>
  );
}

export default EmpruntList;
