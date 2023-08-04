import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basket from './Basket';
import Timetable from './Timetable';
import ShowTimetable from './Showtt';

const App = () => {
  return (
    <Router>
    <div>
      {/* Define the routes */}
      <Routes>
          <Route path="/" element={<Basket />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/tt" element={<ShowTimetable />} />
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
