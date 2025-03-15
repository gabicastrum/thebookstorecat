import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import BookForm from "./pages/components/BookForm/BookForm";
import BookList from "./pages/components/BookList/BookList";
import NavBar from "./pages/components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

function App() {  
  // Load books from localStorage
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  // Update localStorage whenever the book list changes
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Function to add a new book
  const addBook = (newBook: {
    id: number;
    title: string;
    author: string;
    date: string;
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setBooks((books: any) => [...books, newBook]);
  };

  // Function to remove books
  const removeBooks = (idsToRemove: number[]) => {
    setBooks(
      books.filter(
        (book: { id: number; title: string; author: string; date: string }) =>
          !idsToRemove.includes(book.id)
      )
    );
  };

  const updateBook = (updatedBook: { id: number; title: string; author: string; date: string }) => {
    setBooks((prevBooks: { id: number; title: string; author: string; date: string }[]) =>
      prevBooks.map((book: { id: number; title: string; author: string; date: string }) => 
        (book.id === updatedBook.id ? updatedBook : book)
      )
    );
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/books/register"
          element={<BookForm onAddBook={addBook} />}
        />
        <Route
          path="/books"
          element={
            <BookList
              books={books}
              updateBooks={(updatedBooks: { id: number; title: string; author: string; date: string; }[]) => {
                updatedBooks.forEach(updateBook);
              } }
              removeBooks={removeBooks}           />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
