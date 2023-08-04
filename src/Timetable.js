import React, { useState } from 'react';
import Select from 'react-select';
import ShowTimetable from './Showtt';

const Timetable = () => {
  let displayElective = false;
  const basket1 = [
    { label: 'Apple' },
    { label: 'Mango' },
    { label: 'Grapes' },
  ];
  const basket2 = [
    { value: 'basket1', label: 'Peach' },
    { value: 'basket2', label: 'Guava' },
    { value: 'basket3', label: 'Pomegranate' },
  ];
  const basket3 = [
    { value: 'basket1', label: 'Onion' },
    { value: 'basket2', label: 'Tomato' },
    { value: 'basket3', label: 'Potato' },
  ];

  const [selectedElectives, setSelectedElectives] = useState({
    basket1: null,
    basket2: null,
    basket3: null,
  });

  const handleBasket1Change = (selectedElective) => {
    setSelectedElectives((prevElective) => ({
      ...prevElective,
      basket1: selectedElective,
    }));
  };

  const handleBasket2Change = (selectedElective) => {
    setSelectedElectives((prevElective) => ({
      ...prevElective,
      basket2: selectedElective,
    }));
  };

  const handleBasket3Change = (selectedElective) => {
    setSelectedElectives((prevElective) => ({
      ...prevElective,
      basket3: selectedElective,
    }));
  };

  const showElectives = () => {
    ShowTimetable();
    console.log("selected electives are: ", );
  }

  return (
    <div>
      <h1>Timetable</h1>
      <Select
        options={basket1}
        onChange={handleBasket1Change}
        value={selectedElectives.basket1}
        placeholder="Select basket 1 elective"
      />
      <Select
        options={basket2}
        onChange={handleBasket2Change}
        value={selectedElectives.basket2}
        placeholder="Select basket 2 elective"
      />
      <Select
        options={basket3}
        onChange={handleBasket3Change}
        value={selectedElectives.basket3}
        placeholder="Select basket 3 elective"
      />
      <button onClick={showElectives}>Proceed</button>
      <div>
        <h3>Selected Electives:</h3>
        <p>Basket 1: {selectedElectives.basket1 ? selectedElectives.basket1.label : 'Not selected'}</p>
        <p>Basket 1: {selectedElectives.basket2 ? selectedElectives.basket2.label : 'Not selected'}</p>
        <p>Basket 1: {selectedElectives.basket3 ? selectedElectives.basket3.label : 'Not selected'}</p>
      </div>
    </div>
  );
};

export default Timetable;