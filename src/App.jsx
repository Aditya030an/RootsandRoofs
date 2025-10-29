


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import Scroll from "./Component/Scroll.jsx"
import FAQ from './Component/FAQ.jsx';
import Services from './Component/Services.jsx';
import Footer from './Component/Footer.jsx';
import RentalProperties from './Component/RentalProperties.jsx';
import About from './Component/About.jsx';
import Contact from './Component/Contact.jsx';
import Onestop from './Component/Onestop.jsx';

import Careerpage from './Component/Careerpage.jsx';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        {/* Define routes for Home only */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Scroll" element={<Scroll />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Properties" element={<RentalProperties />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/careerpage" element={<Careerpage />} />
          <Route path="/Onestop" element={<Onestop />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;



