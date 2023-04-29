import { useState ,useRef} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  function clicked(){
    event.preventDefault();
    const query = inputRef.current.value; // replace with your search query
    const searchUrl = `https://wa.me/+91${query}`;
    window.open(searchUrl, "_blank");
  }

  return (
    <>
      <h1>Enter the Number</h1>
      <input type="text" className='number-input' ref={inputRef} />
      <br />
      <button onClick={()=>clicked()}>Chat!</button>
    </>
  )
}

export default App
