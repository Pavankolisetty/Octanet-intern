// Retrieve tasks from local storage if available
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" onchange="toggleTask(${index})">
      <span class="${task.completed ? "completed" : ""}">${task.title}</span>
      <button onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(listItem);
  });
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const title = taskInput.value.trim();
  if (title !== "") {
    tasks.push({ title, completed: false });
    displayTasks();
    saveTasks();
    taskInput.value = "";
  }
}

// Function to toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
  saveTasks();
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
  saveTasks();
}

// Function to save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Display tasks on page load
window.onload = displayTasks;
