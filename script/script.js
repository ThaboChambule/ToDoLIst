document.querySelector(".js-add").addEventListener("click", () => {
  addTodo();
});

const todoList = [];

const addTodo = () => {
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;
  const dateElement = document.querySelector(".js-date");
  const dueDate = dateElement.value;

  todoList.push({ name, dueDate });
  inputElement.value = "";
  dateElement.value = "";

  renderTodoList();
};

const renderTodoList = () => {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `
    <div>${todo.name}</div>
    <div>${todo.dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-list").innerHTML = todoListHTML;
};
