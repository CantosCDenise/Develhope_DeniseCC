const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

function calculateAverageAge(persons) {
  let initialvalue = 0;
  const sumAge = persons.reduce((prev, curr) => prev + curr.age / persons.length, initialvalue);
  const averageAge = Math.round(sumAge); 
  
  return averageAge;
  }


const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
