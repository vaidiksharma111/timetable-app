import React from 'react';
import courses from'./CourseData';
const Course = () => {
  return (
    <div>
      <h3>{courses.name}</h3>
      {/* Other course details */}
    </div>
  );
};

export default Course;