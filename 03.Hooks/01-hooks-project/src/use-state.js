import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <HookSwitcher />
  </div>
);

const HookSwitcher = () => {

  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style={{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px`, color: 'gray' }}>
      Hello world
      <button onClick={() => setColor('black')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize((s) => s + 2)}>Increase font size</button>
      <button onClick={() => setFontSize((s) => s - 2)}>Descrease font size</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
