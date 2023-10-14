import React, { useState } from 'react';
import './styles.css';

const colors = [
  'red',
  'green',
  'violet',
  'yellow',
  'gray',
  'teal',
  'pink',
  'orange',
  'brown',
  'purple',
  'blue',
  'silver',
  'rgb(147,112,219)',
  '#483D8B',
  'black',
  '#00FF7F',
  'gold',
  'bisque',
  'chocolate',
  'aqua'
];

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="color-buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => changeBackgroundColor(color)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;