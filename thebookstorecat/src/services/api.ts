import axios from "axios";
import { Book } from "../models/Book";

const baseURL = "http://localhost:5000/books";

// Funções para interagir com a API
export const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get<Book[]>(baseURL); // Rota para listar livros
    return response.data;
  } catch (error) {
    console.error("Erro ao listar livros:", error);
    throw error;
  }
};

export const getBookById = async (id: number): Promise<Book> => {
  try {
    const response = await axios.get<Book>(`${baseURL}/${id}`); // Rota para obter livro por ID
    return response.data;
  } catch (error) {
    console.error("Erro ao obter livro:", error);
    throw error;
  }
};

export const createBook = async (book: Omit<Book, "id">): Promise<Book> => {
  try {
    const response = await axios.post(baseURL, book); // Rota para criar livro
    return response.data as Book;
  } catch (error) {
    console.error("Erro ao criar livro:", error);
    throw error;
  }
};

export const updateBook = async (book: Book): Promise<Book> => {
  try {
    const response = await axios.put(baseURL, book); // Rota para atualizar livro
    return response.data as Book;
  } catch (error) {
    console.error("Erro ao atualizar livro:", error);
    throw error;
  }
};

export const deleteBook = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${baseURL}/${id}`); // Rota para deletar livro por ID
  } catch (error) {
    console.error("Erro ao deletar livro:", error);
    throw error;
  }
};
