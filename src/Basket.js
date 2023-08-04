import React from 'react';
import Course from './Course';
import basket from './BasketData';
import courses from'./CourseData';

const Basket = () => {
  return (
    <div>
      <h2>{basket.name}</h2>
      {basket.courses.map((course) => (
        <Course key={courses.id} course={courses} />
      ))}
    </div>
  );
};

export default Basket;