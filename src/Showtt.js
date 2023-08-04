import React from 'react';

const timetableData = [
  // Replace this data with your actual timetable data
  { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Math' },
  { day: 'Tuesday', time: '11:00 AM - 1:00 PM', subject: 'Science' },
  { day: 'Wednesday', time: '11:00 AM - 1:00 PM', subject: 'Biology' },
  { day: 'Wednesday', time: '1:00 PM - 3:00 PM', subject: 'Physics' },
  { day: 'Wednesday', time: '3:00 PM - 5:00 PM', subject: 'Bio' },
  // Add more subjects and days as needed
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const ShowTimetable = () => {
  return (
    <div>
      <h2>Timetable</h2>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day/Time</th>
            <th>9:00 AM - 11:00 AM</th>
            <th>11:00 AM - 1:00 PM</th>
            <th>1:00 PM - 3:00 PM</th>
            <th>3:00 PM - 5:00 PM</th>
            {/* Add more time slots here */}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              <td>
                {timetableData.map(
                  (item) =>
                    item.day === day &&
                    item.time === '9:00 AM - 11:00 AM' && <span key={item.subject}>{item.subject}</span>
                )}
              </td>
              <td>
                {timetableData.map(
                  (item) =>
                    item.day === day &&
                    item.time === '11:00 AM - 1:00 PM' && <span key={item.subject}>{item.subject}</span>
                )}
              </td>
              <td>
                {timetableData.map(
                  (item) =>
                    item.day === day &&
                    item.time === '1:00 PM - 3:00 PM' && <span key={item.subject}>{item.subject}</span>
                )}
              </td>
              <td>
                {timetableData.map(
                  (item) =>
                    item.day === day &&
                    item.time === '3:00 PM - 5:00 PM' && <span key={item.subject}>{item.subject}</span>
                )}
              </td>
              {/* Add more time slots here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTimetable;
