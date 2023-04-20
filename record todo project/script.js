const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTableBody = document.getElementById("taskTableBody");
const taskTable = document.getElementById("taskTable");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskName = taskInput.value.trim();
  if (!taskName) {
    alert("Please enter a task name.");
    return;
  }

  // Check if the table already has a thead element
  let taskhead = taskTable.querySelector("thead");

  if (!taskhead) {
    // If it doesn't, create a new thead element and add the "S.No" and "Name" headers
    taskhead = document.createElement("thead");
    const taskHeadRow = document.createElement("tr");

    const taskNumhead = document.createElement("th")
    taskNumhead.textContent = "S.No";
    taskHeadRow.appendChild(taskNumhead);

    const taskNamehead = document.createElement("th");
    taskNamehead.textContent = "Name";
    taskHeadRow.appendChild(taskNamehead);

    taskhead.appendChild(taskHeadRow);
    taskTable.appendChild(taskhead);
  }

  // Create a new row element for the task
  const taskRow = document.createElement("tr");

  // Create a cell for the task number
  const taskNumCell = document.createElement("td");
  taskNumCell.textContent = taskTableBody.children.length + 1;
  taskRow.appendChild(taskNumCell);

  // Create a cell for the task name
  const taskNameCell = document.createElement("td");
  taskNameCell.textContent = taskName;
  taskRow.appendChild(taskNameCell);

  // Add the row to the table body
  taskTableBody.appendChild(taskRow);

  // Clear the input field
  taskInput.value = '';
}
