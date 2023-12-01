document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = 'hidden';
    // Landing Modal
    const letters = document.querySelectorAll('#letter');
    const welcomeMessage = document.querySelector('#welcome-message')
    const enterButton = document.querySelector('#enter-button');
    const modal = document.querySelector('#animation-modal');

    // Letter animation
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${0.1 * index}s`;
    });

    // Detect when the last letter animation finishes
    const lastLetter = letters[letters.length - 1];
    lastLetter.addEventListener('animationend', () => {
        welcomeMessage.classList.remove('hidden');
        enterButton.classList.remove('hidden');
        welcomeMessage.classList.add('fade-in');
        enterButton.classList.add('fade-in');
    });
    
    enterButton.addEventListener('click', () => {
        document.body.style.overflow = 'visible';
        modal.classList.add('modal-hidden');
        enterButton.classList.add('fade-out');
        welcomeMessage.classList.add('fade-out');
    }); 

    // Navigation Bar
    const navigationBar = document.querySelector('#nav-bar')
    const navTrigger = document.querySelector('#nav-trigger');

    // FIGURE OUT WHEN ANIMATION ENDS AND HOW TO DO THIS
    // Detect when the sliding animation finishes
    modal.addEventListener('animationend', () => {
        navigationBar.classList.remove('hidden');
        navigationBar.classList.add('fade-in');
    });

    // window.addEventListener('scroll', function() {
    //     if (window.scrollY > '2vw') { // Adjust the scroll threshold as needed
    //         navigationBar.style.top = '1%'; // Show the navigation bar
    //     } else {
    //         navigationBar.style.top = '-100px'; // Hide the navigation bar
    //     }
    // });

    // navTrigger.addEventListener('mouseenter', function() {
    //     if (window.scrollY > 100) {
    //         navigationBar.style.top = '1%'; // Show the navigation bar when hovered
    //     }
    // });

    // navigationBar.addEventListener('mouseleave', function() {
    //     if (window.scrollY > 100) {
    //         navigationBar.style.top = '-100px'; // Hide the navigation bar when the cursor leaves
    //     }
    // });

    // Nav button links 
    const projectsButton = document.querySelector('#projects-button');
    const linkedInButton = document.querySelector('#linkedin-button');
    const githubButton = document.querySelector('#github-button');

    projectsButton.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/siddh-p-297879285/'); // Change this to scroll down
    })
    linkedInButton.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/siddh-p-297879285/');
    })
    githubButton.addEventListener('click', () => {
        window.open('https://github.com/siddhp1');
    })

    // About Section


});