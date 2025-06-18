document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            removeButton.onclick = function () {
                taskList.removeChild(li);
            };

            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = '';
        } else {
            alert("Please enter a task.");
        }
    }

    // Use 'onclick' exactly, not addEventListener
    addButton.onclick = addTask;

    // Use 'onkeypress' and check event.key === 'Enter'
    taskInput.onkeypress = function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    };
});
