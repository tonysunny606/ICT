let person ={
    firstName: 'John',
    lastName:'Doe',
    age:30,
    city:"cityville",
};

let people = [
    {
      name: 'Alice',
      age: 25,
      place: {
        city: 'Wonderland',
        country: 'Fairyland'
      }
    },
    {
      name: 'Bob',
      age: 30,
      place: {
        city: 'TechCity',
        country: 'Geekland'
      }
    },
    {
      name: 'Charlie',
      age: 28,
      place: {
        city: 'Artsville',
        country: 'Createland'
      }
    }
  ];
  console.log(people[2].place.country);