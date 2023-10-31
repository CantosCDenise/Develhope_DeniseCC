function isAdult({age}) {
    if (age >= 18) return "They are an adult";
    else return "They aren't an adult";
  }
  
  const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };
  
  console.log(isAdult(person));