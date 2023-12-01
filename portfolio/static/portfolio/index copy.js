document.addEventListener("DOMContentLoaded", () => {

// DOM Objects
const letters = document.querySelectorAll('#letter');
const titleContainer = document.querySelector('#title');
const enterButton = document.querySelector('#enter-button');
const navigationButtons = document.querySelector('#navigation-buttons');
const aboutContainer = document.querySelector('#about');
const projectsContainer = document.querySelector('#projects');

// Enter button functionality
function disableScroll() {
    document.body.style.overflowY = 'hidden';
    titleContainer.style.height = '100vw';
    titleContainer.style.display = 'block';
}

function enableScroll() {
    document.body.style.overflowY = 'auto';
}

enterButton.addEventListener('click', () => {
    titleContainer.classList.add("slide-up");

    // Reveal navigation bar
    navigationButtons.classList.add("slide-in-left");
    navigationButtons.style.visibility = "visible";

    // Hide enter button
    enterButton.classList.add("fade-out");
    // enterButton.style.display = "none";
    enableScroll();
})

// Animations for name
letters.forEach((letter, index) => {
    letter.style.animationDelay = `${0.1 * index}s`;
});

// Navigation bar buttons
const aboutButton = document.querySelector('#about-button');
const projectsButton = document.querySelector('#projects-button');

aboutButton.addEventListener('click', () => {
    aboutContainer.scrollIntoView({behavior: "smooth"});
})
projectsButton.addEventListener('click', () => {
    projectsContainer.scrollIntoView({behavior: "smooth"});
})

let scrollTimeout;
// Fade out navigation bar when scrolling
window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    navigationButtons.style.opacity = 0;
    scrollTimeout = setTimeout(() => {
        navigationButtons.style.opacity = 1;
        console.log("printing")
    }, 200);
  });

// Social media links
const linkedInButton = document.querySelector('#linkedin-button');
const githubButton = document.querySelector('#github-button');

// Update this button after
linkedInButton.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/siddh-p-297879285/');
})
githubButton.addEventListener('click', () => {
    window.open('https://github.com/siddhp1');
})

// Project Links
const pomodoroButton = document.querySelector('#pomodoro-button');
const messengerButton = document.querySelector('#messenger-button');
const wordleButton = document.querySelector('#wordle-button');

pomodoroButton.addEventListener('click', () => {
    window.open('https://github.com/siddhp1/Pomodoro-Timer');
})
messengerButton.addEventListener('click', () => {
    window.open('https://github.com/siddhp1/Messenger');
})
wordleButton.addEventListener('click', () => {
    window.open('https://github.com/siddhp1/Wordle');
})

// Force scroll from top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Run
disableScroll();

});