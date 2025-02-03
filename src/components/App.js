import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((prevState) => !prevState);
  }
  return (
    <div className="App" id="main">
      {show ? (
        <p id="para" className="show" >
          "Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy"
        </p>
      ) :  <p id="para" className="hide">
          "Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy"
        </p>}
      <button id="click" onClick={handleShow}>
        Click
      </button>
    </div>
  );
};

export default App;
