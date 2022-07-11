import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {

  const {reset} = props;
  return (
    <button onClick={reset}>Reset</button>
  );

};

const Application = () => {
  const [name, setName] = useState("");
  const reset = () => {
    //reset the input field when we click on reset button
    setName("");
    console.log("reset");
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder='Type your name'></input>
      <Button reset={reset}/>
      {name !== "" && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
