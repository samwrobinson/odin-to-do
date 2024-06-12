import Logo from "./images/logo.svg";
import Clock from "./images/clock.svg";

function header() {
    const header = document.querySelector('header');
    const headerAssets = document.createElement('div');
    
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

    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        const intervalId = setInterval(() => {
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            display.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(intervalId);
                alert('Time is up!');
                timerActive = false; // Reset timer state
            }
        }, 1000);
    }

    document.querySelector('#clock').addEventListener('click', () => {
        // Create and append timer container
        const timerContainer = document.createElement('div');
        timerContainer.id = 'timer-container';
        timerContainer.innerHTML = `<div id="timer"></div>`;
        header.appendChild(timerContainer);
        if (!timerActive) {
            const display = document.querySelector('#timer');
            const twentyFiveMinutes = 25 * 60; // 25 minutes in seconds
            startTimer(twentyFiveMinutes, display);
            timerActive = true; // Set timer state to active
        }
    });
}

export default header;
