import React from "react";
import "./Home.css";
import { useEffect, useState, useCallback } from "react";
import { fetchBooks, fetchBooks2 } from "../../services/books.service";
import BookForm from "../bookForm/bookForm";
import BooksList from "../booksList/BooksList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect((books) => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchBooks();
      setBooks(result);
      setLoading(false);
    };
    console.log("useEffect");

    fetchData();
  }, []);
  localStorage.setItem("mydata", JSON.stringify(books));
  localStorage.getItem("mydata");

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setLoading(true);
      if (!searchValue) {
        setBooks([]);
        setLoading(false);
      } else {
        const result = await fetchBooks2(searchValue);
        console.log("result: ", didCancel);
        if (!didCancel) {
          setBooks(result);
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      console.log("cleanup: ", searchValue);
      didCancel = true;
    };
  }, [searchValue]);

  const addBook = (libellé, auteur, édition, nbreExemplaires) => {
    setBooks((previousBooks) => [
      ...previousBooks,
      {
        id: previousBooks.length + 1,
        libellé,
        auteur,
        édition,
        nbreExemplaires: Number(nbreExemplaires),
      },
    ]);
  };

  const updateBook = (id, libellé, auteur, édition, nbreExemplaires) => {
    const newBooks = books.map((book) =>
      book.id === id ? { libellé, auteur, édition, nbreExemplaires } : book
    );
    setBooks(newBooks);
  };
  const memoizedCallback = useCallback(addBook, []);

  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <div className="App">
      <BookForm addBook={memoizedCallback} />
      <div className="search">
        <input
          type="search"
          name="search"
          placeholder="search task by name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <BooksList
          books={books}
          deleteBook={deleteBook}
          updateBook={updateBook}
        />
      )}
    </div>
  );
}

export default App;
