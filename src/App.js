import React from "react";
import { About } from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonails from "./Components/Testimonails/Testimonails";
import Title from "./Components/Title/Title";
// import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     {/* <div className="container"> */}
     <Title subtitle="Our Program" title="What We Offer"/>
     <Programs/>
     <About/>
     <Title subtitle="Gallery" title="Campus Photos"/>
     <Campus/>
     <Title subtitle="Testimonails" title="What Students Say"/>
     <Testimonails/>
     <Title subtitle="Contact Us" title="Get In touch"/>
      <Contact/>
      <Footer/>
     {/* </div> */}

     
    </div>
  );
}

export default App;
