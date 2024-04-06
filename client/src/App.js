
import HeroSection from "./Component/HeroSection";
import './App.css';
import {  Route,  Routes } from "react-router-dom";
import Page2 from "./Component/Page2";


function App() {
  return (
    <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/page2" element={<Page2/>}/>
        </Routes>
  
    </div>
  );
}

export default App;
