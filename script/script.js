document.querySelector(".js-add").addEventListener('click', () => {

    

    addTodo();
    

    })

const todoList = [];

const addTodo = () => {
   const inputElement = document.querySelector(".js-input")
   const name = inputElement.value;

   todoList.push(name);

   

}