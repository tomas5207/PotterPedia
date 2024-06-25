import React from "react";
import { Link } from "react-router-dom";

const SpellCard = ({ spell }) => {
  // Verificar si el contenido es una imagen
  const isImage = spell.movimiento.endsWith('.jpg') || spell.movimiento.endsWith('.jpeg') || spell.movimiento.endsWith('.png') || spell.movimiento.endsWith('.gif') || spell.movimiento.endsWith('.webp');

  // Verificar si el contenido es texto
  const isText = typeof spell.movimiento === 'string' && !isImage;

  return (
    <Link to={`/hechizo/${spell.id}`}>
      <div className="spell-card">
        {isImage && <p className="movimiento">Movimiento: <img src={spell.movimiento} alt={spell.nombre} className='spell-movimiento' /></p>}
        {isText && <p className='spell-movimientoText'>Movimiento: {spell.movimiento} </p>}
        <h3>Nombre: {spell.nombre}</h3>
      </div>
    </Link>
  );
};

export default SpellCard;
