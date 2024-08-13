document.querySelector(".js-add").addEventListener('click', () => {
    addTodo();
    })

const todoList = [];




const addTodo = () => {
   const inputElement = document.querySelector(".js-input")
   const name = inputElement.value;

   todoList.push(name);
   inputElement.value = ''
   let todoListHTML = '';

   for(let i=0; i<todoList.length; i++){
    const todo = todoList[i]
    const html = `<p>${todo}</p>`
    todoListHTML += html;
}
document.querySelector(".js-list").innerHTML = todoListHTML
   
}