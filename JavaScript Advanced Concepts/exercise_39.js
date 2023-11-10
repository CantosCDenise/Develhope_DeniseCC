
function logPromise(isLogged){
    return new Promise((resolve, reject) => {
    const isLogged = true;
    if(isLogged){
    resolve(Math.random())
    }else{
    reject(new Error("new error ocurred"))
    }
    })
}

function numPromise(num){
    return new Promise((resolve, reject) => {
    if(num > 0.5){
        resolve({name: "John", age: 24})
    }else{
        throw new Error("oops, an error")
    }
    })
}


logPromise()
.then(numPromise)
.then((val) => console.log(val))
.catch((err) => console.error(err))
.finally(() => console.log("Finally!"))