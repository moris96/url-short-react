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
      <UrlShortener inputValue={inputValue}/>

      <h3>Note: I have to pay for the API to actually work, which is stupid lol</h3>
    </div>
  );
};

export default App;
