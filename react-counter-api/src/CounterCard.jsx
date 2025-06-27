// Creación dek componente CounterCard que recibe un título y un valor inicial por props//

import React, { useState } from 'react';

function CounterCard({ title, initialValue }) {
    const [count, setCount] = useState(initialValue); // Estado local del contador

    return (
        <div className="counter-card">
            <h2>{title}</h2>
            <p>Valor actual: {count}</p>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>Incrementar</button>
                <button onClick={() => setCount(initialValue)}>Reiniciar</button>
            </div>
        </div>
    );
}

export default CounterCard;
