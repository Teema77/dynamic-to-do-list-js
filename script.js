// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim();

        // If input is empty, show alert
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Task Creation and Removal

        // Create a new li element and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";

        // ✅ Use classList.add instead of className
        removeButton.classList.add('remove-btn');

        // Assign onclick to remove the li from the list
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeButton);

        // Append li to task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach Event Listeners

    // Use addEventListener to trigger addTask on click
    addButton.addEventListener('click', addTask);

    // Allow task submission with Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
