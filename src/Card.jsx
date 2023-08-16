import React from "react";



const Card = ({ colores, esmalte }) => (
    <div className="card">
      <h2>{colores}</h2>
      <p>Esmalte: {esmalte}</p>
    </div>
);
export default Card;
