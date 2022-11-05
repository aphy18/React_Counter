import { React, useState, useRef, useEffect } from 'react';
import './styles/styles.css';


function App() {
  
  let [counter, setCounter] = useState(0);
  let [toggle, setToggle] = useState(false);
  let getPrev = useRef(counter);
  let arr = [];
  
  let textfield;
  let select;
  
  useEffect(() => {
    getPrev.current = counter;
  }, [counter])

  function updateCounter() {
    textfield = document.querySelector('.textfield');
    select = document.querySelector('.select');
    let value = parseFloat(textfield.value);
    if (!isNaN(value)) {
      switch(select.value) {
        case '+':
          setCounter(counter += value);
          break;
        case '-':
          setCounter(counter -= value);
          break;
        case '*':
          setCounter(counter *= value);
          break;
        case '/':
          setCounter(counter /= value);
          break;
        case '%':
          setCounter(counter % value);
          break;
        default:
          alert('not an operation')
      }
    }
  }

  arr[0] = getPrev.current;

  return (
    <>
    <h1>Button Counter</h1>
    <div className="counter">Counter: {counter}</div>
    <main className="main">
      <div className="top-main">
        <button className="increment" onClick={() => setCounter(counter += 1)}>Count Up</button>
        <button className="decrement" onClick={() => setCounter(counter -= 1)}>Count Down</button>
        <button className="prevState" onClick={() => setCounter(arr[0])}>Previous Value</button>
        <button className="reset" onClick={() => setCounter(0)}>Reset</button>
        {!toggle ? <button className="change" onClick={() => setToggle(!toggle)}>Operation</button> 
        : <button className="change" onClick={() => setToggle(!toggle)}>Escape</button>}
      </div>
      {!toggle ? null :
        <div className="bottom-main">
          <div className="block">
            <label className="label">Enter Number</label>
            <input type="text" placeholder="Number" className="textfield" />
            <select className="select">
              <option value="+">add</option>
              <option value="-">subtract</option>
              <option value="*">multiply</option>
              <option value="/">divide</option>
              <option value="%">modulo</option>
            </select>
            <button className="enterNum" onClick={() => updateCounter()}>Calculate</button>
          </div>
        </div>
      }
    </main>
    </>
  )
}

export default App;
