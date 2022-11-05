import { React, useState, useRef, useEffect } from 'react';
import './styles/styles.css';


function App() {

  let [counter, setCounter] = useState(0);
  let [buttonText, setButtonText] = useState('Operation');
  let [toggle, setToggle] = useState(false);
  let getPrev = useRef();

  let increment;
  let decrement;
  let bottomMain 
  let sumContainer;
  let textfield;
  let label;
  let toggleText;
  let enterNum;
  let select;

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
    // textfield.value = '';
  }

  function getPreviousState() {
    setCounter((prevCount) => prevCount)
    console.log('COUNTER', counter)
  }

  useEffect(() => {
    getPrev.current = counter;
  }, [counter])

  return (
    <>
    {console.log(counter, getPrev.current)}
    <h1>Button Counter</h1>
    <h2>{getPrev.current}</h2>
    <div className="counter">Counter: {counter}</div>
    <main className="main">
      <div className="top-main">
        <button className="increment" onClick={() => setCounter(counter += 1)}>Count Up</button>
        <button className="decrement" onClick={() => setCounter(counter -= 1)}>Count Down</button>
        <button onClick={() =>  getPreviousState()}>Previous Value</button>
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
