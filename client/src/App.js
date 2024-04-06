
import HeroSection from "./Component/HeroSection";
import './App.css';
import {  Route,  Routes } from "react-router-dom";
import Page2 from "./Component/Page2";
import Admin from "./Component/Admin";


function App() {
  return (
    <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/page2" element={<Page2/>}/>
          <Route path="/form" element={<Admin/>}/>
        </Routes>
  
    </div>
  );
}

export default App;
