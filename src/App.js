import { React, useState, useRef } from 'react';
import styles from './styles.css';

function App() {

  let [counter, setCounter] = useState(0);
  let bottomMain;
  let sumContainer;
  let textfield;
  let label;
  let toggleText;
  let enterNum;
  let toggledOn = false;


  function toggleCounter() {
    toggledOn = !toggledOn;
    console.log('toggled on', toggledOn)
    bottomMain = document.querySelector('.bottom-main');
    toggleText = document.querySelector('.change');

    sumContainer = document.createElement('div');
    textfield = document.createElement('input');
    label = document.createElement('label');
    enterNum = document.createElement('button');
  
    if (toggledOn === true) {
      textfield.type = 'text';
      label.innerText = 'Enter Number to sum with counter: '
      enterNum.innerText = 'Add';
      enterNum.classList.add('enterNum');
      sumContainer.classList.add('block');
      sumContainer.append(label, textfield, enterNum);
      bottomMain.append(sumContainer);
      enterNum.addEventListener('click', updateCounter)
    } else {
      while (bottomMain.firstChild) {
        bottomMain.removeChild(bottomMain.lastChild)
      }
    }

  }
  
  function updateCounter() {
    let value = parseInt(textfield.value);
    if (!isNaN(value))
    setCounter(counter + value);
    textfield.value = '';
  }


  return (
    <>
    <h1>Button Counter</h1>
    <div className="counter">{counter}</div>

    <main className="main">
      <div className="top-main">
        <button className="increment" onClick={() => setCounter(counter + 1)}>Count Up</button>
        <button className="decrement" onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>Count Down</button>
        <button className="reset" onClick={() => setCounter(0)}>Reset</button>
        <button className="change" onClick={() => toggleCounter()}>Add to Counter</button>
      </div>
      <div className="bottom-main"></div>
    </main>
    </>
  )
}

export default App;
