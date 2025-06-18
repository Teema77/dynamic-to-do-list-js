// Setup Event Listener for Page Load
// This ensures that the script runs only after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field for tasks
    const taskList = document.getElementById('task-list');     // UL element to display tasks

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Task Creation and Removal

        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign onclick event to remove the task when button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach Event Listeners

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed inside the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
