import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';  

const secretNum = Math.floor(Math.random() *10) +1;
function App() {
  const [term, setTerm] = useState("");
  
  const handleChange= 
      (e) => {
        setTerm(e.target.value)
      }


  return (
    <div className="App">
      <div className='container'>
        <div className='head'>        
          <label htmlFor='term'>Enter a number between 1 to 10:</label>
        </div>
        <input
          id='term'
          type='text'
          onChange={handleChange}
        />
        <Result secretNum={secretNum} term={term}/>
      </div>
      
    </div>
  );
}

export default App;
