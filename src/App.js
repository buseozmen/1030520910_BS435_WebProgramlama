import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import UzayComponent from './Component/UzayComponent.js';
import DenizComponent from "./Component/DenizComponent.js";
import Home from "./Component/Home.js";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import UzayOyun from "./Component/UzayOyun";
import DenizOyun from "./Component/DenizOyun";



function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/uzay" element={<UzayComponent/>}/>
              <Route path="/deniz" element={<DenizComponent/>}/>
              <Route path="/uzay/uzay_oyun" element={<UzayOyun/>}/>
              <Route path="/deniz/deniz_oyun" element={<DenizOyun/>}/>
          </Routes>
      </Router>



  );
}

export default App;
