const courses = [
  {
    id: 0,
    basket: 1,
    name: 'Time Series Data Analytics',
    abbr: 'TSDA',
    class: 'L',
    room: 5207,
    day: 'Monday',
    slot: '2',
  },
  {
    id: 1,
    basket: 2,
    name: 'Parallel and Distributed Computing',
    abbr: 'PDC',
    class: 'T',
    room: 5206,
    day: 'Wednesday',
    slot: '3',
  },
  {
    id: 2,
    basket: 3,
    name: 'Big Data Analytics',
    abbr: 'BDA',
    class: 'P',
    room: 5204,
    day: 'Tuesday',
    slot: '4',
  },
  {
    id: 3,
    basket: 3,
    name: 'Machine Learning',
    abbr: 'ML',
    class: 'L',
    room: 5203,
    day: 'Friday',
    slot: '3',
  },
];

  export const dropdownOptions1 = courses.
  filter((course) => course.basket === 1)
  .map((course) => ({
    value: course.id,
    label: course.name,
  }));

  export const dropdownOptions2 = courses.
  filter((course) => course.basket === 2)
  .map((course) => ({
    value: course.id,
    label: course.name,
  }));

  export const dropdownOptions3 = courses.
  filter((course) => course.basket === 3)
  .map((course) => ({
    value: course.id,
    label: course.name,
  }));
  
  export default courses;
  