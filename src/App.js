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
  let select;

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

    select = document.createElement('select');
    let add = document.createElement('option');
    let subtract = document.createElement('option');
    let multiply = document.createElement('option');
    let divide = document.createElement('option');

    

    if (toggle) {
      sumContainer.classList.add('block');
      textfield.type = 'text';
      label.innerText = 'Enter Number: '
      enterNum.innerText = 'Calculate';
      enterNum.classList.add('enterNum');

      add.innerText = '+';
      add.value = '+'

      subtract.innerText = '-';
      subtract.value = '-';

      multiply.innerText = '*';
      multiply.value = '*';

      divide.innerText = '/';
      divide.value = '/';

      select.append(add, subtract, multiply, divide);
      console.log('select value -->', select.value)
      sumContainer.append(label, textfield, enterNum, select);
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
    let value = parseFloat(textfield.value);
    if (!isNaN(value)) {
      switch(select.value) {
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
        <button className="increment" onClick={() => setCounter(counter += 1)}>Count Up</button>
        <button className="decrement" onClick={() => setCounter(counter -= 1)}>Count Down</button>
        <button className="reset" onClick={() => setCounter(0)}>Reset</button>
        <button className="change" onClick={() => toggleCounter()}>{buttonText}</button>
      </div>
      <div className="bottom-main"></div>
    </main>
    </>
  )
}

export default App;
