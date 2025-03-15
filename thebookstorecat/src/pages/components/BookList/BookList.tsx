import React from "react";
import { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  Modal,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BookForm from "../BookForm/BookForm";

interface Data {
  id: number;
  title: string;
  author: string;
  genre: string;
  date: string;
}

interface BookListProps {
  books: Data[];
  removeBooks: (idsToRemove: number[]) => void;
  updateBooks: (updatedBooks: Data[]) => void;
}

const BookList: React.FC<BookListProps> = ({
  books,
  removeBooks,
  updateBooks,
}) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy] = useState<keyof Data>("title");
  const [selected, setSelected] = useState<number[]>([]);
  const [editingBook, setEditingBook] = useState<Data | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (book: Data) => {
    setEditingBook(book);
    setOpen(true);
  };
  const handleClose = () => {
    setEditingBook(null);
    setOpen(false);
  };

  const handleEdit = (book: Data) => {
    handleOpen(book);
  };

  const handleSaveEdit = (updatedBook: Data) => {
    updateBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    handleClose();
  };

  const handleDelete = () => {
    removeBooks(selected);
    setSelected([]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Cat's Book List</Typography>
          {selected.length > 0 && (
            <Tooltip title="Delete">
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selected.length > 0 && selected.length < books.length
                    }
                    checked={
                      books.length > 0 && selected.length === books.length
                    }
                    onChange={(event) =>
                      setSelected(
                        event.target.checked ? books.map((book) => book.id) : []
                      )
                    }
                  />
                </TableCell>
                {["Title", "Author", "Genre", "Date", "Edit"].map(
                  (label, index) => (
                    <TableCell key={index}>
                      <TableSortLabel
                        active={orderBy === label.toLowerCase()}
                        direction={order}
                        onClick={() =>
                          setOrder(order === "asc" ? "desc" : "asc")
                        }
                      >
                        {label}
                      </TableSortLabel>
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow
                  key={book.id}
                  hover
                  selected={selected.includes(book.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      onClick={() =>
                        setSelected((prevSelected) =>
                          prevSelected.includes(book.id)
                            ? prevSelected.filter((id) => id !== book.id)
                            : [...prevSelected, book.id]
                        )
                      }
                      checked={selected.includes(book.id)}
                    />
                  </TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell>{book.date}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(book)}>
                      {" "}
                      {/* Passe o livro para handleEdit */}
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Modal open={open} onClose={handleClose}>
        <div>
          {" "}
          {/* Adicione estilos ao modal conforme necessário */}
          {editingBook && (
            <BookForm
              book={editingBook}
              onSave={handleSaveEdit}
              onCancel={handleClose}
            />
          )}
        </div>
      </Modal>
    </Box>
  );
};

export default BookList;
