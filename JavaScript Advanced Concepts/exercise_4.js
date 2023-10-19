   function sumUntil(maxValue) {
    let sum = 0;
    for(let i = 1; i <= maxValue; i = i + 1){
        sum = sum + i;
    }
    return sum;
  } 
  console.log(sumUntil(5));

