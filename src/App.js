import AnimateBackground from "./components/AnimateBackground/AnimateBackground";
import Input from "./components/Input/Input";
import UrlShortener from "./components/UrlShortener/UrlShortener";

import { useState } from 'react';



function App() {

  const [inputValue, setInputValue] = useState("");



  return (
    <div className="App">
      <Input setInputValue={setInputValue}/>
      <AnimateBackground/>
      <UrlShortener setInputValue={inputValue}/>
    </div>
  );
};

export default App;
