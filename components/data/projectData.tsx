export interface Project {
  title: string;
  shortDesc: string;
  longDesc: string;
  skills: string[];
  thumbnail: string;
  thumbnailDimensions: { width: number; height: number };
  hasDemo: boolean;
  hasRepo: boolean;
  demoUrl?: string;
  repoUrl?: string;
}

const projects = [
  // {
  //   title: "What To Cook",
  //   shortDesc: "Full-stack mobile app for home cooks (coming soon)",
  //   longDesc:
  //     "COMING SOON$nA desktop application for WAN messaging with others, either through a global chat or direct messages. Has an external server, which can be hosted anywhere in the world, and users can download the client, connect with a server, and message other users connected to the same server. Built with Maven in Java, using Swing as a GUI framework. Features socket programming and multithreading.",
  //   skills: [
  //     "Expo",
  //     "React Native",
  //     "TypeScript",
  //     "Django",
  //     "Azure App Service",
  //     "Azure PostgreSQL",
  //     "Azure Blob Storage",
  //   ],
  //   thumbnail:
  //     "https://siddhpersonalwebsite.blob.core.windows.net/images/messenger.png",
  //   thumbnailDimensions: { width: 1200, height: 900 },
  //   hasDemo: false,
  //   hasRepo: false,
  //   demoUrl: "https://github.com/siddhp1/Messenger",
  //   repoUrl: "https://github.com/siddhp1/Messenger",
  // },
  // {
  //   title: "Sysfetch",
  //   shortDesc: "System information fetching",
  //   longDesc:
  //     "COMING SOON$nA desktop application for WAN messaging with others, either through a global chat or direct messages. Has an external server, which can be hosted anywhere in the world, and users can download the client, connect with a server, and message other users connected to the same server. Built with Maven in Java, using Swing as a GUI framework. Features socket programming and multithreading.",
  //   skills: ["C", "CMake"],
  //   thumbnail:
  //     "https://siddhpersonalwebsite.blob.core.windows.net/images/messenger.png",
  //   thumbnailDimensions: { width: 1200, height: 900 },
  //   hasDemo: false,
  //   hasRepo: true,
  //   demoUrl: "https://github.com/siddhp1/Messenger",
  //   repoUrl: "https://github.com/siddhp1/Messenger",
  // },
  {
    title: "Culinary Compass",
    shortDesc: "Restaurant tracking and recommendation web app",
    longDesc:
      "Culinary Compass lets users track and rate restaurant visits. A user profile is then built using data collected about the restaurants they visit. Recommendations are made using a cosine similarity algorithm comparing the user's profile with restaurants in a selected location.$nUsers can generate a year-end PDF recap of their favorite restaurants, cuisines, price categories, and dining times, created with ReportLab and Matplotlib.$nUser information is stored securely in a SQLite database with bcrypt password hashing. Culinary Compass is deployed on Azure using Nginx, Gunicorn, and Supervisor.",
    skills: [
      "Flask",
      "Scikit-Learn",
      "ReportLab",
      "Bootstrap",
      "Google Maps Platform",
      "Foursquare Places",
      "Azure Virtual Machine",
      "Nginx",
    ],
    thumbnail: "/culinarycompass.png",
    thumbnailDimensions: { width: 2800, height: 2100 },
    hasDemo: true,
    hasRepo: true,
    demoUrl: "https://culinarycompass.live/",
    repoUrl: "https://github.com/siddhp1/Culinary-Compass",
  },
  {
    title: "Face Mask Detector",
    shortDesc: "Convolutional neural network for detecting face masks",
    longDesc:
      "A face mask detector for verifying that a person is wearing a face mask correctly (over mouth and nose). Has two categories: “with mask” and “without mask”. Classification is done with a convolutional neural network, made with Tensorflow Keras. Demo GUI uses OpenCV and the HaarCascade Frontal Face model to apply the face mask model to camera input. Features a data augmentation engine and MatPlotLib training visualization.",
    skills: ["Python", "Tensorflow", "OpenCV"],
    thumbnail:
      "https://siddhpersonalwebsite.blob.core.windows.net/images/facemaskdetector.png",
    thumbnailDimensions: { width: 1200, height: 900 },
    hasDemo: false,
    hasRepo: true,
    demoUrl: "",
    repoUrl: "https://github.com/siddhp1/Face-Mask-Detector",
  },
  {
    title: "Messenger",
    shortDesc: "Desktop application for WAN messaging",
    longDesc:
      "A desktop application for WAN messaging with others, either through a global chat or direct messages. Has an external server, which can be hosted anywhere in the world, and users can download the client, connect with a server, and message other users connected to the same server. Built with Maven in Java, using Swing as a GUI framework. Features socket programming and multithreading.",
    skills: ["Java", "Swing", "Maven"],
    thumbnail:
      "https://siddhpersonalwebsite.blob.core.windows.net/images/messenger.png",
    thumbnailDimensions: { width: 1200, height: 900 },
    hasDemo: false,
    hasRepo: true,
    demoUrl: "",
    repoUrl: "https://github.com/siddhp1/Messenger",
  },
  {
    title: "Scheveningen",
    shortDesc: "Chess tournament organization web app",
    longDesc:
      "Scheveningen lets users organize Scheveningen-system chess tournaments easily and for free. Users are able to input team and individual player information, update round results, and get a standings after every round. At the end of the tournament, a finalized leaderboard is shown, and each team’s MVP is declared. Built with Django and vanilla HTML, CSS, and JavaScript. Hosted on PythonAnywhere. Made with a few of my high-school friends.",
    skills: ["Django", "HTML", "CSS", "JavaScript", "PythonAnywhere"],
    thumbnail:
      "https://siddhpersonalwebsite.blob.core.windows.net/images/scheveningen.png",
    thumbnailDimensions: { width: 1200, height: 900 },
    hasDemo: false,
    hasRepo: true,
    demoUrl: "",
    repoUrl: "https://github.com/hlsschessclub/Scheveningen",
  },
  {
    title: "Pomodoro Timer",
    shortDesc: "Static pomodoro timer website",
    longDesc:
      "A Pomodoro timer website with customizable durations for pomodoro sessions, short breaks, and long breaks. Built with vanilla HTML, CSS, and Javascript, and hosted on GitHub Pages. Soon to be replaced with Focus, a full-stack (Django + ReactJS/React Native) cross platform application for Pomodoro technique, organized studying, and overall time management.",
    skills: ["HTML", "CSS", "JavaScript"],
    thumbnail:
      "https://siddhpersonalwebsite.blob.core.windows.net/images/pomodorotimer.png",
    thumbnailDimensions: { width: 1200, height: 900 },
    hasDemo: true,
    hasRepo: true,
    demoUrl: "https://siddhp1.github.io/Pomodoro-Timer/",
    repoUrl: "https://github.com/siddhp1/Pomodoro-Timer",
  },
];

export function getProject(index: number) {
  return projects[index];
}

export function getProjects() {
  return projects;
}
