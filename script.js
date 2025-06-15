// Setting up Event Listener for page load
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  //   3. Create the addTask Function:
  function addTask() {
    // Retrieve and trim value
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please, enter a task.");
      return;
    }
    // Create the <li> element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create the Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add an onclick event to remove the task when clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the <li>, and <li> to the <ul>
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }
  //   Attach event listener
  addButton.addEventListener("click", addTask);

  //   Pressing Enter adds task
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  classList.add;
});
