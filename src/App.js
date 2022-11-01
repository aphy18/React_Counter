import { React, useState } from 'react';

function App() {

  let [counter, setCounter] = useState(0);

  return (
    <>
    <h1>Button Counter</h1>
    <h2>HELLLOOOO</h2>
    <div>{counter}</div>
    <button onClick={() => setCounter(counter + 1)}>Count Up</button>
    <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>Count Down</button>
    <button onClick={() => setCounter(0)}>Reset</button>
    </>
  )
}

export default App;
