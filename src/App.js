import AnimateBackground from "./components/AnimateBackground/AnimateBackground";
import Input from "./components/Input/Input";
import UrlShortener from "./components/UrlShortener/UrlShortener";

import { useState } from 'react';



function App() {

  const [inputVal, setInputVal] = useState("")



  return (
    <div className="App">

      <UrlShortener setInputValue={setInputVal}/>

      <AnimateBackground/>

      <Input setInputValue={inputVal}/>

      
    </div>
  );
};

export default App;
