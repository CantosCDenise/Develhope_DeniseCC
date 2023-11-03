function sum(...nums) {
     const suma = nums.reduce((a,b) => a + b);
     return suma;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));