async function recoverTODO(todo){
    let todolist = await todo;
    console.log(todolist);
}

fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then(recoverTODO)
.catch((err) => console.error(err))