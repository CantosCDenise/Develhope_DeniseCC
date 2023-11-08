let callback = () => console.log("Hello")

function repeatHello (callback){
    let id = setInterval(() => {
        callback();
    }, 1000);
    setTimeout(() => {
        clearInterval(id)
      }, 7000);
}

repeatHello(callback);