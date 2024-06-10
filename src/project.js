import Trash from "./images/trash.svg";
const taskArray = [];

function createProject(event) {
    event.preventDefault();

    // Select user interface, input and submit
    const userInput = document.querySelector('#form-input');
    const userInterface = document.querySelector('#user-interface');

    class Project {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    const projectText = userInput.value.trim();
    if (projectText === '') {
        alert('Input cannot be empty.');
    } else {
        // Create pop up
        const popUp = document.createElement('div');
        popUp.id = 'pop-up';

        // Create & append form fields
        const title = projectText;

        let description = document.createElement('input');
        description.classList.add('details');
        description.placeholder = 'Add task description...';
        popUp.appendChild(description);

        let dueDate = document.createElement('input');
        dueDate.classList.add('details');
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
        submitDetails.textContent = 'Add details.';
        popUp.appendChild(submitDetails);

        userInterface.appendChild(popUp);

        submitDetails.addEventListener('click', () => {
            description = description.value;
            dueDate = dueDate.value;
            priority = priority.value;
            taskArray.push(new Project(title, description, dueDate, priority))
            popUp.style.display = 'none';
            userInput.value = '';

            updateProjectList();
        });
    }
    function updateProjectList() {
        const projectList = document.querySelector('#project-list');
        projectList.innerHTML = ''; // Clear existing content
    
        taskArray.forEach((task, index) => {
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task');
            taskContainer.innerHTML = `
                <h4>${task.title}</h4>
                <div class="task-details">
                    <p><strong>Description:</strong> ${task.description}</p>
                    <p><strong>Deadline:</strong> ${task.dueDate}</p>
                    <p><strong>Priority:</strong> ${task.priority}</p>
                </div>
            `;
    
            // Create a new trash icon for each task
            const trash = new Image();
            trash.src = Trash;
            trash.id = 'trash';
            trash.classList.add('trash-icon');
            trash.addEventListener('click', () => deleteTask(index));
    
            taskContainer.appendChild(trash);
            projectList.appendChild(taskContainer);
        });
    }
    
    function deleteTask(index) {
        taskArray.splice(index, 1);
        updateProjectList(); 
    }
}

export default createProject;