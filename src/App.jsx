import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  function clicked() {
    event.preventDefault();
    if (inputRef.current.value.length == 10) {
      const query = inputRef.current.value; // replace with your search query
      const searchUrl = `https://wa.me/+91${query}`;
      window.open(searchUrl, "_blank");
    } else {
      window.alert("Please enter a valid number");
    }
    inputRef.current.value = "";
  }

  return (
    <>
      <h1>Enter the Number</h1>
      <input
        type="number"
        className="number-input"
        pattern="[0-9]*"
        ref={inputRef}
      />
      <br />
      <button className="button" onClick={() => clicked()}>
        Chat!
      </button>
    </>
  );
}

export default App;
