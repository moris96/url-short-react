import React, { useState } from 'react';


const Test = () => {

    // const [val, setVal] = useState("")
    const [res, setRes] = useState(false)

    // url shortener algo
    // const url = "google.com"
    // const url = ""
    
    const urlShort = (longURL = '') => {
        const obj = {}
        const shortURL = `short.ly/${longURL.replace(/[^a-z]/g,'').slice(-4)}`
        if(!obj[shortURL]){
            obj[shortURL] = longURL
        }
        return shortURL
    }

    const newLink = urlShort("")

    const urls = (longURL) => {
        if(urlShort(longURL)){
            setRes("")
        } else{
            setRes("error")
        }
    }


    const clickHandle = () => {
        urlShort()
        // setRes("")
        // console.log(urlShort())
        // setVal("")
        // console.log(urlShort())
    }

  return (
    <div>
      <h1>work plz</h1>

    {/* <section>
        <input type='text' placeholder='paste link here' />
        <button onClick={clickHandle}>Get Short Link</button>
        <p></p>
    </section> */}

    {/* <input type='text' placeholder='paste link here' />
    <button onClick={clickHandle}>Get Short Link</button>
    <p>{res}</p> */}

    <input type='text' placeholder='enter link here' onChange={(e) => urls(e.target.value)} />
    <button onClick={clickHandle}>Click</button>
    <p>{res}</p>



    </div>
  )
}

export default Test
