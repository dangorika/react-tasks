import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <HookCounter value={value} />
        <Notifications />
      </div>
    );
  } else {
    return (
      <button onClick={() => setVisible(true)}>show</button>
    );
  }
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log(' mount ');
    return () => console.log(' unmount ');
  }, []);

  useEffect(() => {
    console.log(' update ');
  }, [ value ]);

  return (
    <p>{value}</p>
  );
};

const Notifications = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {visible && <p>Hello</p>}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
