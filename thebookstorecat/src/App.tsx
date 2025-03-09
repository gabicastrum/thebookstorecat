import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sobre from "./pages/Sobre";
import ListagemLivros from "./pages/ListagemLivros";
import CadastroLivros from "./pages/CadastroLivros";
import PaginaInicial from "./pages/PaginaInicial";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/livros" element={<ListagemLivros />} />
            <Route path="/livros/cadastro" element={<CadastroLivros />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
