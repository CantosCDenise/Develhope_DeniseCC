let myPromise = new Promise((resolve, reject) => {
    const number = 15;
    if (number > 10){
        resolve(number)
    }else {
        reject(number);
    }
});

myPromise
.then((val) => console.log(val))
.catch((err) => console.log("Error!"))