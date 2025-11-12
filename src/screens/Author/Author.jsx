import { useState, useEffect } from "react";
import api from "../../services/api";
import NavBar from '../../components/Navbar';
import './Author.css';

function Index() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAuthor() {
            try {
                const response = await api.get("/author");
                setAuthors(response.data.message || []);
            } catch (error) {
                setError(`Erro ao carregar autores: ${error}`);
            }
            finally {
                setLoading(false);
            }
        }

        getAuthor();
    }, []);

    if (loading) return <h1>Carregando...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <>
            <NavBar />
            <div>
                <h1>Dados de Autor</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nacionalidade</th>
                            <th>Data de Nascimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, index) => (
                                <tr key={index}>
                                    <td>{author.name_author}</td>
                                    <td>{author.nationality}</td>
                                    <td>{new Date(author.nasc_author).toLocaleDateString("pt-BR")}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )};

export default Index;