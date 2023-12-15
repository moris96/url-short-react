import AnimateBackground from "./components/AnimateBackground/AnimateBackground";
// import Input from "./components/Input/Input";
// import UrlShortener from "./components/UrlShortener/UrlShortener";

// import { useState } from 'react';

import LinkShortener from "./components/LinkShortener/LinkShortener";



function App() {

  // const [inputValue, setInputValue] = useState("");
  

  return (
    <div className="App">

      <LinkShortener/>
      
      {/* <Input setInputValue={setInputValue}/> */}
      <AnimateBackground/>
      {/* <UrlShortener inputValue={inputValue}/> */}
    </div>
  );
};

export default App;
