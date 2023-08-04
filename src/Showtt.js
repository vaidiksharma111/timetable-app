import React from 'react';
import courses from './BasketData';
import { useParams } from 'react-router-dom';
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = ['9:00 AM - 11:00 AM', '11:00 AM - 1:00 PM', '1:00 PM - 3:00 PM', '3:00 PM - 5:00 PM'];

const ShowTimetable = () => {
    const params = useParams();
  const selectedElectives = JSON.parse(decodeURIComponent(params.selectedElectives || '[]'));
  return (
    <div>
      <h2>Timetable</h2>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day/Time</th>
            {timeSlots.map((slot) => (
              <th key={slot}>{slot}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              {timeSlots.map((slot, index) => {
                let courseAbbr = '';
                selectedElectives.forEach((course) => {
                  if (course.type.L && course.type.L.Day === day && +course.type.L.slot === index + 1) {
                    courseAbbr = course.abbr;
                  } else if (course.type.T && course.type.T.Day === day && +course.type.T.slot === index + 1) {
                    courseAbbr = course.abbr;
                  } else if (course.type.P && course.type.P.Day === day && +course.type.P.slot === index + 1) {
                    courseAbbr = course.abbr;
                  } else if (course.type.PM && course.type.PM.Day === day && +course.type.PM.slot === index + 1) {
                    courseAbbr = course.abbr;
                  }
                });
                return <td key={slot}>{courseAbbr}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTimetable;
