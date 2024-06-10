import header from "./header";
import createProject from "./project";

function homePage() {
    header();

    // Select UI container
    const userInterface = document.querySelector('#user-interface');

    // Create input area
    const userInput = document.createElement('div');
    userInput.id = 'user-input';
    userInterface.appendChild(userInput);

    const tagLine = document.createElement('h1');
    tagLine.textContent = 'time to focus.'
    userInput.appendChild(tagLine);

    // Create form input
    const form = document.createElement('form');
    form.id = 'input-form';
    
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const input = document.createElement('input');
    input.id = 'form-input';
    input.placeholder = 'Add new project...';

    const button = document.createElement('button');
    button.id = 'submit-form';
    button.setAttribute('for', 'form-input');
    button.setAttribute('type', 'submit');
    button.textContent = '+';

    inputContainer.appendChild(input);
    inputContainer.appendChild(button);
    form.appendChild(inputContainer);
    userInput.appendChild(form);

    form.addEventListener('submit', createProject)

    const projectList = document.createElement('div');
    projectList.id = 'project-list';
    userInterface.appendChild(projectList);
}

export default homePage;