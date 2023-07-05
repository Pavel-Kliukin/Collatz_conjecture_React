import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [number, setNumber] = useState(0);
  const [collatzArray, setcollatzArray] = useState([]);

  const numberHandler = (e) => {
    const { value } = e.target;
    setNumber(value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    collatz_calculations (number)
  };

  function collatz_calculations (x) {
    var tempArray = [parseInt(x)];
    while (x != 1) {
      if (x % 2) {
        x = x*3+1
        tempArray.push(x)
      } else {
        x = x/2
        tempArray.push(x);
      }
    }
    console.log(tempArray)
  }

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