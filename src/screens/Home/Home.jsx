import React from 'react';
import './Home.css';
import NavBar from '../../components/Navbar';
import { Padding } from '@mui/icons-material';

const livros = [
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    imagem: 'https://m.media-amazon.com/images/I/61x1ZHomWUL.jpg',
  },
  {
    id: 2,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    imagem: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
  },
  {
    id: 3,
    titulo: '1984',
    autor: 'George Orwell',
    imagem: 'https://m.media-amazon.com/images/I/61t0bwt1s3L._UF1000,1000_QL80_.jpg',
  },
];

const Home = () => {
  return (
    <>
    <NavBar/>

    <div style={ {paddingTop: '100px', paddingBottom: '100px'} } >
    <div className="livraria-container">
      <header className="livraria-header">
        <h1>Bem-vindo à Livraria Virtual</h1>
        <p>Descubra os melhores livros para ampliar seus horizontes.</p>
      </header>

      <section className="livros-lista">
        {livros.map((livro) => (
          <div key={livro.id} className="livro-card">
            <img src={livro.imagem} alt={`Capa do livro ${livro.titulo}`} />
            <h3>{livro.titulo}</h3>
            <p className="autor">{livro.autor}</p>
            <button className="btn-detalhes">Ver detalhes</button>
          </div>
        ))}
      </section>

      <footer className="livraria-footer">
        <button className="btn-ver-mais">Ver mais livros</button>
      </footer>
    </div>
    </div>
    </>
  );
};

export default Home;
