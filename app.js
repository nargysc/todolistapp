        const taskInput = document.getElementById("taskInput");
        const addTaskButton = document.getElementById("addTaskButton");
        const taskList = document.getElementById("taskList");
        const clearCompletedButton = document.getElementById("clearCompletedButton");

        function addTask() {
            const taskText = taskInput.value.trim();

            if (taskText !== "") {
                const taskItem = document.createElement("li");
                taskItem.innerHTML = `
                    <input type="checkbox" class="checkbox">
                    <span class="task">${taskText}</span>
                    <button class="delete-button">Delete</button>
                `;

                taskList.appendChild(taskItem);
                taskInput.value = ""; // Clear the input field

                const checkbox = taskItem.querySelector(".checkbox");
                const deleteButton = taskItem.querySelector(".delete-button");

                checkbox.addEventListener("change", toggleCompleted);
                deleteButton.addEventListener("click", deleteTask);
            }
        }

        function toggleCompleted(event) {
            const taskItem = event.target.parentElement;
            taskItem.classList.toggle("completed");
        }

        function deleteTask(event) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }

        addTaskButton.addEventListener("click", addTask);



        const checkboxes = document.querySelectorAll(".checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", toggleCompleted);
        });

                addTaskButton.addEventListener("click", () => {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTaskToDOM(taskText);
                saveTasks(); // Update local storage when a new task is added
                taskInput.value = ""; // Clear the input field
            }
        });

        // Load tasks when the page loads
        window.addEventListener("DOMContentLoaded", loadTasks);
