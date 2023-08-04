const courses = [
  {
    id: 0,
    basket: 1,
    name: 'Time Series Data Analytics',
    abbr: 'TSDA',
    type: {
        L:{
            Day: "Monday",
            slot: 1,
            Room: "5204",
        },
        T:{
            Day: "Tuesday",
            slot: 3,
            Room: "5204",
        },
        P:{
            Day: "Friday",
            slot: 2,
            Room: "5204",
        }
    }
  },
  {
    id: 1,
    basket: 2,
    name: 'Time Series Data Analytics',
    abbr: 'TSDA',
    type: {
        L:{
            Day: "Monday",
            slot: 1,
            Room: "5204",
        },
        T:{
            Day: "Tuesday",
            slot: 3,
            Room: "5204",
        },
        P:{
            Day: "Friday",
            slot: 2,
            Room: "5204",
        }
    }
  },
  {
    id: 2,
    basket: 3,
    name: 'Time Series Data Analytics',
    abbr: 'TSDA',
    type: {
        L:{
            Day: "Monday",
            slot: 1,
            Room: "5204",
        },
        T:{
            Day: "Tuesday",
            slot: 3,
            Room: "5204",
        },
        P:{
            Day: "Friday",
            slot: 2,
            Room: "5204",
        }
    }
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
  