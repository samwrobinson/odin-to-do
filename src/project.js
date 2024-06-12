import Trash from "./images/trash.svg";
import Subtask from "./images/subtask.svg";
const taskArray = [];

// Define Project and SubTask classes
class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.subTasks = [];
    }
}

class SubTask {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}
// Function to create a project
function createProject(event) {
    event.preventDefault();

    // Input to collect project name
    const userInput = document.querySelector('#form-input');
    const userInterface = document.querySelector('#user-interface');

    // Assign project name to a usable variable
    const projectText = userInput.value.trim();
    if (projectText === '') {
        alert('Input cannot be empty.');
    } else {
        const popUp = document.createElement('div');
        popUp.id = 'pop-up';

        // Assign project name as the title
        const title = projectText;

        // Create description
        let description = document.createElement('input');
        description.classList.add('details');
        description.placeholder = 'Add task description...';
        popUp.appendChild(description);

        // Create dueDate
        let dueDate = document.createElement('input');
        dueDate.classList.add('details');
        dueDate.setAttribute('type', 'date');
        dueDate.placeholder = 'Add a deadline...';
        popUp.appendChild(dueDate);

        // Create priority options
        const priority = document.createElement('div');
        const priorityTitle = document.createElement('p');
        priorityTitle.textContent = 'Priority';
        priority.appendChild(priorityTitle);
        priority.classList.add('priority');
        // Create button options
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        const low = document.createElement('button');
        low.textContent = 'low';
        const medium = document.createElement('button');
        medium.textContent = 'medium';
        const high = document.createElement('button');
        high.textContent = 'high';
        low.classList.add('priority-button');
        medium.classList.add('priority-button');
        high.classList.add('priority-button');
        buttonContainer.append(low, medium, high);
        priority.appendChild(buttonContainer);
        popUp.appendChild(priority);

        // Variable to store selected priority
        let selectedPriority = '';

        // Event listener for priority buttons
        buttonContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                selectedPriority = event.target.textContent;
                document.querySelectorAll('.priority-button').forEach(button => {
                    button.classList.remove('selected');
                });
                event.target.classList.add('selected');
            }
        });

        // let priority = document.createElement('input');
        // priority.classList.add('details');
        // priority.setAttribute('type', 'number');
        // priority.setAttribute('min', '1');
        // priority.setAttribute('max', '5');
        // priority.placeholder = 'Priority from 1 - 5...';
        // popUp.appendChild(priority);

        // Create submit button
        const submitDetails = document.createElement('button');
        submitDetails.id = 'submit-details';
        submitDetails.textContent = 'Add details.';
        popUp.appendChild(submitDetails);

        // Display popup to collect associated info
        userInterface.appendChild(popUp);

        // Eventlistener for submitDetails
        submitDetails.addEventListener('click', () => {
            const desc = description.value.trim();
            const date = dueDate.value;
            if (desc && date && selectedPriority) {
                // Create and append project list
                taskArray.push(new Project(title, desc, date, selectedPriority));
                popUp.remove();
                showProjectList();
                userInput.value = '';
                updateProjectList();
            } else {
                alert('All fields are required!');
            }
        });
    }
}

function subTaskForm(projectIndex) {
    const userInterface = document.querySelector('#user-interface');

    // Create pop-up form for adding a subtask
    const popUp = document.createElement('div');
    popUp.id = 'pop-up';

    let subTaskTitle = document.createElement('input');
    subTaskTitle.classList.add('details');
    subTaskTitle.placeholder = 'Subtask title...';
    popUp.appendChild(subTaskTitle);

    let description = document.createElement('input');
    description.classList.add('details');
    description.placeholder = 'Add task description...';
    popUp.appendChild(description);

    let dueDate = document.createElement('input');
    dueDate.classList.add('details');
    dueDate.setAttribute('type', 'date');
    dueDate.placeholder = 'Add a deadline...';
    popUp.appendChild(dueDate);

    let priority = document.createElement('input');
    priority.classList.add('details');
    priority.setAttribute('type', 'number');
    priority.setAttribute('min', '1');
    priority.setAttribute('max', '5');
    priority.placeholder = 'Priority from 1 - 5...';
    popUp.appendChild(priority);

    const submitDetails = document.createElement('button');
    submitDetails.id = 'submit-details';
    submitDetails.textContent = 'Add sub-task';
    popUp.appendChild(submitDetails);

    userInterface.appendChild(popUp);

    // Handle form submission
    submitDetails.addEventListener('click', () => {
        const title = subTaskTitle.value.trim();
        const desc = description.value.trim();
        const date = dueDate.value;
        const prio = priority.value;

        if (title && prio) {
            if (taskArray[projectIndex]) {
                const newSubTask = new SubTask(title, desc, date, prio);
                taskArray[projectIndex].subTasks.push(newSubTask);
                popUp.remove(); // Remove the pop-up after adding the subtask
                updateProjectList(); // Update UI to reflect the new subtask
            } else {
                console.error('Project index out of bounds');
                popUp.remove(); // Remove the pop-up in case of error
            }
        } else {
            alert('All fields are required!');
        }
    });
}

// Function to initialize project list
function showProjectList() {
    const userInterface = document.querySelector('#user-interface');
    if (taskArray.length > 0) {
        if (!document.querySelector('#project-list')) {
            const projectList = document.createElement('div');
            projectList.id = 'project-list';
            userInterface.appendChild(projectList);
        }
    }
}

// Function to update the project list and link the "Add Subtask" button to the correct project
function updateProjectList() {
    const projectList = document.querySelector('#project-list');
    projectList.innerHTML = ''; // Clear existing content

    taskArray.forEach((task, index) => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        taskContainer.innerHTML = `
            <div id="project-header">
                <h4>${task.title}</h4>
            </div>
            <div class="task-details">
                <p><strong>Description:</strong> </br>
                ${task.description}</p>
                <p><strong>Deadline:</strong> </br>
                ${task.dueDate}</p>
                <p><strong>Priority:</strong> </br>
                ${task.priority}</p>
            </div>
        `;
        
        // Append task container to project list
        projectList.appendChild(taskContainer);

        // Select project header
        const projectHeader = document.querySelector('#project-header');

        // Create a new trash icon for each task
        const trash = new Image();
        trash.src = Trash;
        trash.id = 'trash';
        trash.classList.add('trash-icon');
        trash.addEventListener('click', () => deleteTask(index));
        projectHeader.appendChild(trash);

        // Create a new subtask add button
        const addSubtaskBtn = new Image();
        addSubtaskBtn.src = Subtask;
        addSubtaskBtn.id = 'subtask';
        addSubtaskBtn.classList.add('sub-task');
        addSubtaskBtn.addEventListener('click', () => subTaskForm(index));
        projectHeader.appendChild(addSubtaskBtn);

        // Create a subtask list container
        const subtaskList = document.createElement('div');
        subtaskList.classList.add('subtask-list');

        // Add subtasks
        task.subTasks.forEach((subTask, subIndex) => {
            const subTaskContainer = document.createElement('div');
            subTaskContainer.classList.add('task-details');
            subTaskContainer.innerHTML = `
                <p><strong>${subTask.title}</strong></br>
                ${subTask.description}</p>
                <p><strong>Deadline:</strong> </br>
                ${subTask.dueDate}</p>
                <p><strong>Priority:</strong> </br>
                ${subTask.priority}</p>
                <svg class="delete-subtask-btn" id="subTask-trash" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5001 6H3.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M9.5 11L10 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M14.5 11L14 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#1C274C" stroke-width="1.5"/>
                <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            `;

            // Add event listener for deleting a subtask
            const deleteSubtaskBtn = subTaskContainer.querySelector('.delete-subtask-btn');
            deleteSubtaskBtn.addEventListener('click', () => deleteSubTask(index, subIndex));

            subtaskList.appendChild(subTaskContainer);
        });

        // Add the subtask list to the task container
        taskContainer.appendChild(subtaskList);
    });
}

// Function to delete a subtask from a project
function deleteSubTask(projectIndex, subtaskIndex) {
    if (taskArray[projectIndex]) {
        taskArray[projectIndex].subTasks.splice(subtaskIndex, 1);
        updateProjectList();
    }
}

function deleteTask(index) {
    if (taskArray[index]) {
        taskArray.splice(index, 1);
        updateProjectList();
    }
}

export default createProject;
