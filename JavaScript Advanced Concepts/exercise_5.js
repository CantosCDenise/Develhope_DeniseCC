const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;

 // Modify the property `firstName` of the `person2` in "Simon". Write a comment explaining why, by modifying the object person2, also the object person1 would be modified.
  
  person2.firstName = "Simon";    
  console.log(person1);
  console.log(person2);
  
  //Al modificar person2 también ha cambiado person1 porque hemos hecho una copy by reference del person1, hemos copiado la referencia, no hemos duplicado el objeto,
  //por lo que todo lo que le hagamos a person2 afectará al objeto original, el cual es person1.
