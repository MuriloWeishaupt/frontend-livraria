import { useEffect, useState } from "react";
import NavBar from '../../components/Navbar';
import api from "../../services/api";
import './ListarLivros.css';

export default function ListarLivros() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadBooks() {
            try {
                const response = await api.get("/book");
                setBooks(response.data.response || []);
            } catch (err) {
                setError("Erro ao carregar os livros.");
            } finally {
                setLoading(false);
            }
        }

        loadBooks();
    }, []);

    if (loading) return <h2 style={{ textAlign: "center" }}>Carregando...</h2>;
    if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;

    return (
        <>
            <NavBar />

            <div className="container-books">
                <h1>Lista de Livros</h1>

                <table className="books-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Editora</th>
                            <th>Publicação</th>
                            <th>Páginas</th>
                            <th>Preço (R$)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books.length > 0 ? (
                            books.map((book, index) => (
                                <tr key={index}>
                                    <td>{book.book_name}</td>
                                    <td>{book.category?.name_category}</td>
                                    <td>{book.editor?.publisher_name}</td>
                                    <td>{new Date(book.publication).toLocaleDateString("pt-BR")}</td>
                                    <td>{book.pages}</td>
                                    <td>{Number(book.price).toFixed(2)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="empty">Nenhum livro encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
