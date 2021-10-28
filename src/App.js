import './App.css';
import Cover from "./Components/Cover"
import NavBar from './Components/NavBar/NavBar';
import React, {useState, useEffect} from 'react';
import About from './Components/About/About';
import Slider from './Components/Slider/Slider';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import Personal from './Components/Personal/Personal';

function App() {

const [scrollHeight, setScrollHeight] = useState(0);

const handleScroll= () => {
  const position = window.pageYOffset;
  setScrollHeight(position);
}

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
}, [scrollHeight])

  return (
    <div className="App">
     <NavBar isScrolling={scrollHeight}  /> 
      <Cover />
      <About/>
      <Slider/>
       <Personal/> 
      <Info/>

      <Footer/>
    </div>
  );
}

export default App;
