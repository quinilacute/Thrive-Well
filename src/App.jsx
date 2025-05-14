// import React from 'react';
// import Home from "../src/home/Home";
// import About from "../src/about/About";
// import Donate from "../src/donate/Donate";
// import  Service from "../src/services/Service";
// import Expert from "../src/expert/Expert";
// import Policy from "../src/policy/Policy";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


// function App() {


//   return (
//    <BrowserRouter>
//             <Routes>
//               <Route 
//               path="/"
//               element={<Home />}/>
//               <Route 
//               path='/about'
//               element={<About />} />  
//               <Route 
//               path='/donate'
//               element={<Donate />}/> 
//               <Route 
//               path='/services'
//               element={<Service />}/>
//               <Route 
//               path='/expert'
//               element={<Expert />}/>
//               <Route 
//               path='/policy'
//               element={<Policy />}/>
//             </Routes>
//    </BrowserRouter>
//   )
// }

// export default App




import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Donate from './donate/Donate';
import Service from './services/Service';
import Expert from './expert/Expert';
import Policy from './policy/Policy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/services" element={<Service />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

