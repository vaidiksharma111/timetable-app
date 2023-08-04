import React, { useState } from 'react';
import Select from 'react-select';

const Timetable = ({ baskets }) => {
  const [selectedBasket, setSelectedBasket] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [timetableData, setTimetableData] = useState([]);

  const handleBasketChange = (selectedOption) => {
    setSelectedBasket(selectedOption);
    setSelectedTime(''); // Clear selected time when basket changes
    setTimetableData([]); // Clear timetable data
  };

  const handleTimeChange = (selectedOption) => {
    setSelectedTime(selectedOption.value);
    generateTimetableData(selectedOption.value);
  };

  const generateTimetableData = (selectedTime) => {
    // Filter courses based on selectedBasket and selectedTime
    const courses = selectedBasket.courses.filter(
      (course) => course.time === selectedTime
    );

    // Create the timetable data
    const timetable = [];
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      timetable.push({
        time: course.time,
        day: course.day,
        courseName: course.name,
        // Add more properties as needed
      });
    }

    setTimetableData(timetable);
  };

  return (
    <div>
      <h1>Timetable</h1>
      <Select
        options={baskets}
        onChange={handleBasketChange}
        value={selectedBasket}
        placeholder="Select a basket"
      />
      {/* Display courses based on the selected basket */}
      {selectedBasket && (
        <>
          <Select
            options={[
              { value: 'morning', label: 'Morning' },
              { value: 'afternoon', label: 'Afternoon' },
              { value: 'evening', label: 'Evening' },
            ]}
            onChange={handleTimeChange}
            value={selectedTime}
            placeholder="Select a time"
          />
          {/* Display the timetable in a tabular format */}
          {timetableData.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Day</th>
                  <th>Course Name</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
                {timetableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.time}</td>
                    <td>{item.day}</td>
                    <td>{item.courseName}</td>
                    {/* Add more table data cells as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default Timetable;