/// Temporary storage for todo items
let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    /// Validation
    if (todoInput.value === '' || todoDate.value === '') {
        alert("Please fill in both fields.");
    } else {
        /// Add todo item to the list
        todos.push({ text: todoInput.value, date: todoDate.value, });
        todoInput.value = '';
        todoDate.value = '';

        renderTodos();
    }
}

/// Function to render todo items to the DOM
function renderTodos() {
    /// Get the todo list container
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
} 

function addTodo() {
    const input = document.getElementById("todo-input");
    const date = document.getElementById("todo-date");
    const list = document.getElementById("todo-list");

    if (!input.value.trim()) {
        alert("Todo tidak boleh kosong!");
        return;
    }

    if (list.children[0].textContent === "No todos available") {
        list.innerHTML = "";
    }

    const li = document.createElement("li");
    li.textContent = `${input.value} — ${date.value}`;
    li.setAttribute("data-date", date.value);

    list.appendChild(li);

    input.value = "";
    date.value = "";
}



// CLEAR TODOS
function clearTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "<li>No todos available</li>";
}



// FILTER TODOS (berdasarkan tanggal pada input)
function filterTodos() {
    const filterDate = document.getElementById("todo-date").value;
    const list = document.getElementById("todo-list");
    const items = list.getElementsByTagName("li");

    if (!filterDate) {
        alert("Pilih tanggal dulu untuk filter!");
        return;
    }

    let found = false;

    for (let i = 0; i < items.length; i++) {
        const todoDate = items[i].getAttribute("data-date");

        if (todoDate === filterDate) {
            items[i].style.display = "list-item";
            found = true;
        } else {
            items[i].style.display = "none";
        }
    }

    if (!found) {
        alert("Tidak ada todo dengan tanggal tersebut.");
    }
}

function resetFilter() {
    const items = document.querySelectorAll("#todo-list li");
    items.forEach(item => {
        item.style.display = "list-item";
    });
}

