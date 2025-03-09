import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import EditIcon from "@mui/icons-material/Edit";

interface Data {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  data: string;
  descricao: string;
}

function createData(
  id: number,
  titulo: string,
  autor: string,
  genero: string,
  data: string,
  descricao: string
): Data {
  return { id, titulo, autor, genero, data, descricao };
}

const initialRows = [
  createData(
    1,
    "1984",
    "George Orwell",
    "Ficção",
    "2023-01-15",
    "Distopia sobre um governo totalitário."
  ),
  createData(
    2,
    "O Hobbit",
    "J.R.R. Tolkien",
    "Fantasia",
    "2023-02-10",
    "Uma aventura na Terra Média."
  ),
  createData(
    3,
    "Dom Casmurro",
    "Machado de Assis",
    "Literatura Brasileira",
    "2023-03-05",
    "Romance clássico brasileiro."
  ),
  createData(
    4,
    "O Pequeno Príncipe",
    "Antoine de Saint-Exupéry",
    "Infantil",
    "2023-04-20",
    "Uma fábula filosófica."
  ),
  createData(
    5,
    "A Revolução dos Bichos",
    "George Orwell",
    "Ficção",
    "2023-05-30",
    "Uma sátira política."
  ),
];

export default function BookList() {
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("titulo");
  const [selected, setSelected] = React.useState<number[]>([]);
  const [rows, setRows] = React.useState(initialRows);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    setRows(
      [...rows].sort((a, b) =>
        isAsc
          ? typeof a[property] === "string"
            ? (a[property] as string).localeCompare(b[property] as string)
            : (a[property] as number) - (b[property] as number)
          : typeof b[property] === "string"
          ? (b[property] as string).localeCompare(a[property] as string)
          : (b[property] as number) - (a[property] as number)
      )
    );
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked ? rows.map((row) => row.id) : []);
  };

  const handleClick = (id: number) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    setRows(rows.filter((row) => !selected.includes(row.id)));
    setSelected([]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Lista de Livros</Typography>
          {selected.length > 0 && (
            <Tooltip title="Excluir">
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
                      selected.length > 0 && selected.length < rows.length
                    }
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                {[
                  "Título",
                  "Autor",
                  "Gênero",
                  "Data",
                  "Descrição",
                  "Editar",
                ].map((label, index) => (
                  <TableCell key={index}>
                    <TableSortLabel
                      active={orderBy === label.toLowerCase()}
                      direction={order}
                      onClick={() =>
                        handleRequestSort(label.toLowerCase() as keyof Data)
                      }
                    >
                      {label}
                      {orderBy === label.toLowerCase() ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  role="checkbox"
                  selected={selected.includes(row.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      onClick={() => handleClick(row.id)}
                      checked={selected.includes(row.id)}
                    />
                  </TableCell>
                  <TableCell>{row.titulo}</TableCell>
                  <TableCell>{row.autor}</TableCell>
                  <TableCell>{row.genero}</TableCell>
                  <TableCell>{row.data}</TableCell>
                  <TableCell>{row.descricao}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
