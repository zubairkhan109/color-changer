import React, { useState, useEffect } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

function App() {
  const [activeColor, setActiveColor] = useState(null);

  const handleClick = (color) => {
    setActiveColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = activeColor || 'white';
  }, [activeColor]);

  return (
    <div className="button-container">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => handleClick(color)}
          className={`color-button ${color}`}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
