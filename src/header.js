import Logo from "./images/logo.svg";
import Clock from "./images/clock.svg";

function header() {
    const header = document.querySelector('header');
    const headerAssets = document.createElement('div');
    const logo = new Image();
    const clock = new Image();
    clock.classList.add('header-svg');
    clock.src = Clock;
    logo.classList.add('header-svg');
    logo.src = Logo;
    headerAssets.id = 'header-assets';
    header.appendChild(headerAssets);
    headerAssets.appendChild(logo);
    const title = document.createElement('p');
    title.textContent = "focus.io";
    headerAssets.appendChild(title);
    headerAssets.appendChild(clock);
}

export default header;