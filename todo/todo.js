const inputbx = document.getElementById("inputbox");
const btn = document.getElementById("press");
const view = document.getElementById("tasklist");

btn.addEventListener("click", function () {
    const tasks = inputbx.value.trim();
    if (tasks !== "") {
        const nuTask = document.createElement("li");

        // Style the task container to use flexbox for layout
        nuTask.style.display = "flex";
        nuTask.style.justifyContent = "space-between";
        nuTask.style.alignItems = "center";
        nuTask.style.padding = "5px";  // Add some padding to task

        // Task text initially (as a span)
        const taskText = document.createElement("span");
        taskText.textContent = tasks;

        // Container for the buttons
        const btnContainer = document.createElement("div");
        btnContainer.style.display = "flex";
        btnContainer.style.gap = "10px";  // Space between buttons

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.style.border = "0";

        // Save button (Initially hidden)
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.style.border = "0";
        saveBtn.style.display = "none";  // Hidden initially

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.border = "0";
        deleteBtn.style.marginLeft = "10px";  // Spacing between task and button

        // Event listener for Edit button
        editBtn.addEventListener("click", function () {
            // Set the value of input box to the current task text
            inputbx.value = taskText.textContent;  // Load task text into input box

            // Show Save button and hide Edit button
            saveBtn.style.display = "inline-block";
            editBtn.style.display = "none";
        });

        // Event listener for Save button
        saveBtn.addEventListener("click", function () {
            const updatedText = inputbx.value.trim();
            if (updatedText !== "") {
                taskText.textContent = updatedText;  // Update task text with input value
            }
            saveBtn.style.display = "none";  // Hide save button after saving
            editBtn.style.display = "inline-block";  // Show edit button again
            inputbx.value = "";  // Clear the input box
        });

        // Evnt listener for Delete button
        deleteBtn.addEventListener("click", function () {
            view.removeChild(nuTask);
        });

        // Append buttons to container
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(saveBtn);
        btnContainer.appendChild(deleteBtn);

        nuTask.appendChild(taskText);
        nuTask.appendChild(btnContainer);


        view.prepend(nuTask);
        inputbx.value = "";  // Clear the input box after adding task
    } else {
        alert("Please enter a task.");
    }
});
