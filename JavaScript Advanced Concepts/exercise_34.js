function callback(){
    console.log("Hello");
}

function printAsyncName(callback, str){
    setTimeout(() => {
        callback();
      }, "1000");

      setTimeout(() => {
        console.log(str)
      }, "2000");
      
}

printAsyncName(callback, "Denise");