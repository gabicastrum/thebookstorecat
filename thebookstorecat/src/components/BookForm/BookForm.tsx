import * as React from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
  },
});

export default function BookForm() {
  const [book, setBook] = React.useState({
    id: 0,
    titulo: "",
    autor: "",
    genero: "",
    data: "",
  });

  const genres = [
    "Ficção",
    "Não Ficção",
    "Fantasia",
    "Mistério",
    "Sci-Fi",
    "Biografia",
  ];

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (event: ChangeEvent): void => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  interface SubmitEvent {
    preventDefault: () => void;
  }

  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    console.log("Livro cadastrado:", book);
    // TODO lógica para salvar os dados
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
          Cadastro de Livro
        </Typography>
        <TextField
          label="Título"
          name="titulo"
          value={book.titulo}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Autor"
          name="autor"
          value={book.autor}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          select
          label="Gênero"
          name="genero"
          value={book.genero}
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
          label="Data lida"
          name="dateRead"
          type="date"
          value={book.data}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>
    </ThemeProvider>
  );
}
