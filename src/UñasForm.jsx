import React, { useState } from 'react';
import Card from './Card';

const UñasForm = () => {
  const [esmalte, setEsmalte] = useState('');
  const [colores, setColores] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (esmalte.length < 3 || /^\s/.test(esmalte) || colores.length < 6) {
      alert('Por favor chequea que la información sea correcta');
    } else {
      setShowCard(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="esmalte">Marca de Esmalte:</label>
        <input
          type="text"
          placeholder='Ingrese marca de Esmalte'
          id="esmalte"
          value={esmalte}
          onChange={(e) => setEsmalte(e.target.value)}
          required
        />
        
        <label htmlFor="colores">Color de Esmalte:</label>
        <input
          type="text"
          id="colores"
          value={colores}
          placeholder='Ingrese color'
          onChange={(e) => setColores(e.target.value)}
          required
        />
        
        <button type="submit">Enviar</button>
      </form>

      {showCard && (
        <Card esmalte={esmalte} colores={colores} />
      )}
    </div>
  );
};

export default UñasForm;