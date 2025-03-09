import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <nav style={{ textAlign: "center", padding: "10px", backgroundColor: "#f8f9fa" }}>
            <ul style={{ listStyleType: "none", padding: 0, display: "inline-flex", gap: "20px" }}>
                <li>
                    <NavLink to="/" style={{ textDecoration: "none", color: "#007bff" }}>Página Incial</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre" style={{ textDecoration: "none", color: "#007bff" }}>Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/livros" style={{ textDecoration: "none", color: "#007bff" }}>Livros</NavLink>
                </li>
                <li>
                    <NavLink to="/livros/cadastro" style={{ textDecoration: "none", color: "#007bff" }}>Cadastro de Livros</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
