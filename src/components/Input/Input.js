import { useState } from 'react';
import './Input.css';

const Input = ({ setInputValue }) => {
    
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value)
    setValue("")
  }

  return (
    <div className='input-container'>
        <h1 className='shortener-title'>URL <span className='shotertener-title-2'>Shortener</span></h1>
        <div className='input-box'>
            <input className='input-input' 
            type='text' 
            placeholder='paste long link here' 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            />
            <button className='btn' onClick={handleClick}>shorten link</button>
        </div>
    </div>
  );
};

export default Input
