async function fetchData() {
    try {
        const f = await fetch('/api/');
        if (!f.ok) {
            throw new Error(`API request failed with status code: ${f.status}`);
        }
        data = await f.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

async function main() {
    const data = await fetchData();

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
    navigationBar.style.top = '1%'; // Default pos for nav bar

    let previousScrollPosition = 0;

    const isScrollingDown = () => {
        const scrolledPosition = window.scrollY || document.documentElement.scrollTop;
        return scrolledPosition > previousScrollPosition;
    };

    const handleNavScroll = () => {
        if (isScrollingDown() && !navigationBar.contains(document.activeElement)) {
            navigationBar.classList.add("scroll-down");
            navigationBar.classList.remove("scroll-up");
        } else {
            navigationBar.classList.add("scroll-up");
            navigationBar.classList.remove("scroll-down");
        }
        previousScrollPosition = window.scrollY || document.documentElement.scrollTop;
    };

    let throttleTimer;
    const throttle = (callback, time) => {
        if (throttleTimer) return;

        throttleTimer = true;
        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    };

    const scrollHandler = () => {
        throttle(handleNavScroll, 25);
    };

    window.addEventListener("scroll", scrollHandler);

    // Nav button links 
    const projectsButton = document.querySelector('#projects-button');
    const linkedInButton = document.querySelector('#linkedin-button');
    const githubButton = document.querySelector('#github-button');

    const projectsWrapper = document.querySelector('#scroll-point');

    projectsButton.addEventListener('click', () => {
        projectsWrapper.scrollIntoView({behavior: "smooth"});
    })
    linkedInButton.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/siddh-p-297879285/');
    })
    githubButton.addEventListener('click', () => {
        window.open('https://github.com/siddhp1');
    })

    // Projects Section
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach(item => {
        item.addEventListener("click", function() {
            showProjectModal(
                data.find((project) => project.id == item.id),
            );
        });
    });
}

function showProjectModal(project) {
    var projectModal = document.querySelector('#project-modal');
    projectModal.classList.remove('not-rendered');

    var projectTitle = document.querySelector('#project-title');
    projectTitle.textContent = project.title;

    var projectDesc = document.querySelector('#project-desc');
    projectDesc.textContent = project.long_desc;

    var iframe = document.createElement('iframe');
    iframe.id = 'embedded-site';
    iframe.title = 'Demonstration of project';
    iframe.allowFullscreen = true;
    iframe.frameBorder = 0;
    iframe.src = project.demo_url;
    var iframeContainer = document.getElementById('iframe-container');
    iframeContainer.appendChild(iframe);

    var repoButton = document.querySelector('#project-repo-button'); 
    repoButton.addEventListener('click', () => {
        window.open(project.repo_url);
    })

    window.onclick = function(event) {
        if (event.target == projectModal) {
            iframe.remove();
            projectModal.classList.add('not-rendered');
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    main(); 
});
