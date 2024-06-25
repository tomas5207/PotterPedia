import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SpellCard from './SpellCard';

function SpellsBook() {
  const [spells, setSpells] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página 0 es la tapa del libro
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getSpells = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/hechizo?page=${currentPage + 1}&limit=2`); // +1 porque la primera página es la tapa
        setSpells(res.data.hechizos);
        setTotalPages(res.data.totalPages + 1); // +1 por la tapa
      } catch (error) {
        console.error('Error al procesar la solicitud:', error);
      }
    };

    if (currentPage > 0) {
      getSpells();
    }
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handleOpenBook = () => {
    setCurrentPage(1); // Abre el libro y muestra la primera página de hechizos
  };

  return (
    <div className='flip-book-container'>
      <div className={`flip-book page-${currentPage}`}>
        {currentPage === 0 ? (
          <div className='page front-page'>
            <h1>Hechizos por Tomás Jorcin</h1>
            <img src="../../public/Hechizos.jpg" className="image-book" alt="Hechizos" />
            <div>Guía de los hechizos de Harry Potter, para magos y brujas. No apto para Muggles.</div>
            <img src="./src/assets/BookIcon.png" className="book-icon" alt="BookIcon" />
            <button className='open-book-button' onClick={handleOpenBook}>Abrir Libro</button>
          </div>
        ) : (
          spells.map((spell, index) => (
            <div key={index} className='page'>
              <SpellCard spell={spell} />
            </div>
          ))
        )}
      </div>
      {currentPage > 0 &&(
      <div className='pagination'>
        <button onClick={handlePrevious} disabled={currentPage === 0}>Anterior</button>
        <span>Página {currentPage} de {totalPages - 1}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>Siguiente</button>
      </div>)}
    </div>
  );
}

export default SpellsBook;


