import React, {useState} from 'react';
import axios from 'axios';

const LinkShortener = () => {

    const [load, setLoad] = useState("false")
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    const fetchData = async () => {
        try{
            setLoad("true")
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
            setLoad("false")
            setResult(res.data.result.full_short_link)
        } catch(err){
            alert(err)
        }
    }

    const handleClick = () => {
        fetchData()
        setInput("")
    }


  return (
    <div>
      <h1 className='shortener-title'>URL <span className='shotertener-title-2'>Shortener</span></h1>
      <input
      type='text'
      placeholder='enter link'
      value={input}
      onChange={(e) => setInput(e.target.value)} 
      />
      <button
       onClick={handleClick}>Submit</button>
       {load === "true" ? <p>Loading...</p> : <p>{result}</p>}
    </div>
  );
};

export default LinkShortener
