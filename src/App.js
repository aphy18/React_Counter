import { React, useState, useRef } from 'react';
// import './../styles/styles.css'


function App() {

  let [counter, setCounter] = useState(0);
  let [buttonText, setButtonText] = useState('Operation');
  let [toggle, setToggle] = useState(true);

  let bottomMain 
  let sumContainer;
  let textfield;
  let label;
  let toggleText;
  let enterNum;

  function toggleCounter() {

    console.log('COUNTER -->', counter)
    setToggle(!toggle);
    console.log('toggle', toggle);
    bottomMain = document.querySelector('.bottom-main');
    toggleText = document.querySelector('.change');

    sumContainer = document.createElement('div');
    textfield = document.createElement('input');
    label = document.createElement('label');
    enterNum = document.createElement('button');
    

  
    if (toggle) {
      textfield.type = 'text';
      label.innerText = 'Enter Number: '
      enterNum.innerText = 'Calculate';
      enterNum.classList.add('enterNum');
      sumContainer.classList.add('block');
      sumContainer.append(label, textfield, enterNum);
      bottomMain.append(sumContainer);
      enterNum.addEventListener('click', updateCounter)
      setButtonText('Escape')
    } else {
      while (bottomMain.firstChild) {
        bottomMain.removeChild(bottomMain.lastChild)
        setButtonText('Operation')
      }
    }
  }
  
  function updateCounter() {
    let value = parseInt(textfield.value);
    if (!isNaN(value)) {
      let operation = prompt('Enter operation (+, -, *, /)')
      switch(operation) {
        case '+':
          setCounter(counter += value);
          console.log('counter', counter)
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
        default:
          alert('not an operation')
      }
    }
    
  }


  return (
    <>
    <h1>Button Counter</h1>
    <div className="counter">{counter}</div>

    <main className="main">
      <div className="top-main">
        <button className="increment" onClick={() => setCounter(counter = counter + 1)}>Count Up</button>
        <button className="decrement" onClick={() => setCounter(counter > 0 ? counter = counter - 1 : 0)}>Count Down</button>
        <button className="reset" onClick={() => setCounter(0)}>Reset</button>
        <button className="change" onClick={() => toggleCounter()}>{buttonText}</button>
      </div>
      <div className="bottom-main"></div>
    </main>
    </>
  )
}

export default App;
