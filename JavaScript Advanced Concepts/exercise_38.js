
function logPromise(isLogged){
    return new Promise((resolve, reject) => {
    const isLogged = true;
    if(isLogged){
    resolve(Math.random())
    }else{
    reject("Error")
    }
    })
}

function numPromise(num){
    return new Promise((resolve, reject) => {
    if(num > 0.5){
        resolve({name: "John", age: 24})
    }else{
        reject("error")
    }
    })
}


logPromise()
.then(numPromise)
.then((val) => console.log(val))
.catch((err) => console.error(err))