import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basket from './Basket';
import Timetable from './Timetable';

const App = () => {
  return (
    <Router>
    <div>
      {/* Define the routes */}
      <Routes>
          <Route path="/" element={<Basket />} />
          <Route path="/timetable" element={<Timetable />} />
          {/* Add more routes here if needed */}
          {/* For example:
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          */}
        </Routes>
    </div>
  </Router>
  );
};

export default App;
