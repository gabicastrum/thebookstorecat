import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

interface Data {
  id: number;
  title: string;
  author: string;
  genre: string;
  date: string;
}

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
  typography: {
    h5: { fontWeight: 600 },
  },
});

interface BookFormProps {
  book?: Data;
  onSave?: (book: Data) => void;
  onCancel?: () => void;
  onAddBook?: (book: Data) => void;
}

export default function BookForm({ book, onSave, onCancel, onAddBook }: BookFormProps) {
  const navigate = useNavigate();
  const [editedBook, setEditedBook] = useState<Data>(
    book || {
      id: Date.now(),
      title: "",
      author: "",
      genre: "",
      date: "",
    }
  );

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Fantasy",
    "Mystery",
    "Sci-Fi",
    "Biography",
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedBook({ ...editedBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onSave) {
      onSave(editedBook);
    } else if (onAddBook) {
      onAddBook(editedBook);
    }
    navigate("/books");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 320,
          margin: "auto",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Add books to the cat
        </Typography>
        <TextField
          label="Title"
          name="title"
          value={editedBook.title}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Author"
          name="author"
          value={editedBook.author}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          select
          label="Genre"
          name="genre"
          value={editedBook.genre}
          onChange={handleChange}
          required
          fullWidth
        >
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Date read"
          name="date"
          type="date"
          value={editedBook.date}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          {book ? "Save" : "Register"}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
      </Box>
    </ThemeProvider>
  );
}
