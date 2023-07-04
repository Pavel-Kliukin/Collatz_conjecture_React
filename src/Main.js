import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [number, setNumber] = useState(0);

  const numberHandler = (e) => {
    const { value } = e.target;
    setNumber(value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <div className='Main'>
      <h1>Number: {number}</h1>
      <form onSubmit={submitHandler}>
        <div className="numberInput">
          <label htmlFor="number">Enter a positive integer</label>
          <input
            type="number"
            id="number"
            onChange={numberHandler}
            required
          />
        </div>
        <button id='submitButton' type="submit">Show Collatz's row</button>
      </form>
    </div>
  );
};

export default Main;