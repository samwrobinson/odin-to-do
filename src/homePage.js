import header from "./header";
import createProject, { taskArray } from "./project";

function homePage() {

    // Select UI container
    const userInterface = document.querySelector('#user-interface');

    // Create div for header & timer
    const headerAndTimer = document.createElement('div');
    headerAndTimer.id = 'header-timer';
    userInterface.appendChild(headerAndTimer);

    header();

    // Create input area
    const userInput = document.createElement('div');
    userInput.id = 'user-input';
    userInterface.appendChild(userInput);

    const tagLine = document.createElement('h1');
    tagLine.textContent = 'time to focus.'
    headerAndTimer.appendChild(tagLine);

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
}

export default homePage;