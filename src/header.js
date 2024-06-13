import Logo from "./images/logo.svg";
import Clock from "./images/clock.svg";

function header() {
    const header = document.querySelector('header');
    const headerAssets = document.createElement('div');
    const headerAndTimer = document.querySelector('#header-timer');
    
    // Create and append logo
    const logo = new Image();
    logo.classList.add('header-svg');
    logo.src = Logo;
    headerAssets.appendChild(logo);

    // Create and append title
    const title = document.createElement('p');
    title.textContent = "focus.io";
    headerAssets.appendChild(title);

    // Create and append clock
    const clock = new Image();
    clock.classList.add('header-svg');
    clock.src = Clock;
    clock.id = 'clock';
    headerAssets.appendChild(clock);

    // Append header assets
    headerAssets.id = 'header-assets';
    header.appendChild(headerAssets);

    // Timer state
    let timerActive = false;

    // Initialize pomodoro counter
    let pomodoro = 0;

    function startTimer(duration, display) {
        const timerContainer = document.querySelector('#timer-container');
        let timer = duration, minutes, seconds;
        const intervalId = setInterval(() => {
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            display.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                pomodoroCounter();
                clearInterval(intervalId);
                alert('Time is up!');
                timerActive = false; // Reset timer state
                headerAndTimer.removeChild(timerContainer); // Remove timer when 0
            }
        }, 1000);
    }

    function pomodoroCounter() {
        pomodoro += 1;
        displayPomodoroCount();
    }

    function displayPomodoroCount() {
        let pomodoroContainer = document.querySelector('#pomodoro-container');
        if (!pomodoroContainer) {
            pomodoroContainer = document.createElement('div');
            pomodoroContainer.id = 'pomodoro-container';
            headerAndTimer.appendChild(pomodoroContainer);
        }
        pomodoroContainer.innerHTML = `<p>Pomodoros today: ${pomodoro}</p>
    `;
    }

    document.querySelector('#clock').addEventListener('click', () => {
        if (document.getElementById('timer-container') == null) {
            // Create and append timer container
            const timerContainer = document.createElement('div');
            timerContainer.id = 'timer-container';
            timerContainer.innerHTML = `<div id="timer"></div>`;
            headerAndTimer.appendChild(timerContainer);
        }
        if (!timerActive) {
            const display = document.querySelector('#timer');
            const twentyFiveMinutes = 25 * 60; // 25 minutes in seconds
            startTimer(twentyFiveMinutes, display);
            timerActive = true; // Set timer state to active
        }
    });
}

export default header;
