import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="counterWrapper">
      <div className="counterLabel">
        <label>El valor del contador es </label>
        <span>{counter}</span>
      </div>
      <button className="counterButton" onClick={increase}>
        Disminuir el valor!
      </button>
      <button className="counterButton" onClick={decrease}>
        Aumentar el valor!
      </button>
    </div>
  );
};
export default Counter;
