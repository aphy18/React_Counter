import { React, useState } from 'react';
import './styles/styles.css';


function App() {

  let [counter, setCounter] = useState(0);
  let [buttonText, setButtonText] = useState('Operation');
  let [toggle, setToggle] = useState(true);

  let increment;
  let decrement;
  let bottomMain 
  let sumContainer;
  let textfield;
  let label;
  let toggleText;
  let enterNum;
  let select;

  function creatElementsOnToggle() {

    sumContainer = document.createElement('div');
    textfield = document.createElement('input');
    label = document.createElement('label');
    enterNum = document.createElement('button');
    select = document.createElement('select');
    let add = document.createElement('option');
    let subtract = document.createElement('option');
    let multiply = document.createElement('option');
    let divide = document.createElement('option');
    increment = document.querySelector('.increment');
    decrement = document.querySelector('.decrement');

    increment.setAttribute('disabled', true);
    decrement.setAttribute('disabled', true);

    sumContainer.classList.add('block');
    select.classList.add('select');
    enterNum.classList.add('enterNum');

    textfield.type = 'text';
    label.innerText = 'Enter Number: '
    label.classList.add('label');
    enterNum.innerText = 'Calculate';

    add.innerText = 'add(+)';
    add.value = '+'

    subtract.innerText = 'subtract(-)';
    subtract.value = '-';

    multiply.innerText = 'multiply(*)';
    multiply.value = '*';

    divide.innerText = 'divide(/)';
    divide.value = '/';

    select.append(add, subtract, multiply, divide);
    sumContainer.append(label, textfield, enterNum, select);
    bottomMain.append(sumContainer);
  }

  function toggleCounter() {
    increment = document.querySelector('.increment');
    decrement = document.querySelector('.decrement');
    
    setToggle(!toggle);
    bottomMain = document.querySelector('.bottom-main');
    toggleText = document.querySelector('.change');

    if (toggle) {
      creatElementsOnToggle();
      enterNum.addEventListener('click', updateCounter)
      setButtonText('Escape')
    } else {
      while (bottomMain.firstChild) {
        bottomMain.removeChild(bottomMain.lastChild)
        setButtonText('Operation')
      }
      increment.removeAttribute('disabled');
      decrement.removeAttribute('disabled');
    }
  }
  
  function updateCounter() {
    

    

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
        default:
          alert('not an operation')
      }
      textfield.value = '';
    }
  }

  return (
    <>
    <h1>Button Counter</h1>
    <div className="counter">Counter: {counter}</div>

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
