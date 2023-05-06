const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos");


const todoStr = JSON.parse(localStorage.getItem("todos"));

if(todoStr){
    todoStr.forEach(todo => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    addTodo();
});

function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todoElement = document.createElement("li");
        if(todo && todo.completed){
            todoElement.classList.add("completed");
        }
        todoElement.textContent = todoText;
        

        todoElement.addEventListener("click", ()=>{
            todoElement.classList.toggle("completed");
            updateTodo();
        });
        todoElement.addEventListener("contextmenu", (e)=>{
            e.preventDefault();

            todoElement.remove();
            updateTodo();
        });

        todos.append(todoElement);

        input.value = "";

        updateTodo();
    }
}

function updateTodo(todo){
    const todosElements = document.querySelectorAll("li");

    const todos = [];
   
    todosElements.forEach((todoEl)=>{
        todos.push({
            text: todoEl.textContent,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}
