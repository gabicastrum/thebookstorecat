import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import BookForm from "./pages/components/BookForm/BookForm";
import BookList from "./pages/components/BookList/BookList";
import NavBar from "./pages/components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { Book } from "./models/Book";
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "./services/api";

function App() {
  const [books, setBooks] = useState([] as Book[]);

  async function fetchBooks() {
    setBooks(await getBooks());
  }

  useEffect(() =>{
    fetchBooks();
  }, []);

  const addBook = async (book: Book) => {
    const newBook = await createBook(book)
    setBooks((books: Book[]) => [...books, newBook]);
  };

  const removeBooks = async (idsToRemove: number[]) => {
    for (const id of idsToRemove) {
      await deleteBook(id);
    }
    fetchBooks();
  };

  const editBook = async (book: Book) => {
    await updateBook(book);
    fetchBooks();
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
              updateBooks={(updatedBooks: Book[]) => {
                updatedBooks.forEach(editBook);
              }}
              removeBooks={removeBooks}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
