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
  {
    title: "Culinary Compass",
    shortDesc: "Restaurant tracking and recommendation web app",
    longDesc:
      "Culinary Compass lets users track restaurant visits by entering the restaurant, visit date, and a rating out of 5 stars, with assistance from the Google Places Autocomplete API. The Foursquare Places API fetches data about the restaurant to build a user profile. Recommendations are made using a Scikit-Learn cosine similarity algorithm based on the user's profile and selected location/radius via Google Maps. Users can generate a year-end PDF report of their favorite restaurants, cuisines, price categories, and dining times, created with ReportLab and Matplotlib, and emailed to them. User information is stored securely in a SQLite database with bcrypt password hashing, and password resets are managed via email. Culinary Compass is deployed on Azure using Nginx, Gunicorn, Supervisor, and secured with TLS via Certbot.",
    skills: [
      "Flask",
      "Scikit-Learn",
      "Bootstrap",
      "Google Maps Platform",
      "Foursquare Places",
      "Azure Virtual Machine",
    ],
    thumbnail:
      "https://siddhpersonalwebsite.blob.core.windows.net/images/culinarycompass.png",
    thumbnailDimensions: { width: 1200, height: 900 },
    hasDemo: true,
    hasRepo: true,
    demoUrl: "https://culinarycompass.live/",
    repoUrl: "https://github.com/siddhp1/Culinary-Compass",
  },
  {
    title: "Personal Website",
    shortDesc: "Full-stack personal website",
    longDesc:
      "This personal portfolio website is a place for me to display my favourite projects and share my social accounts. This website is built with the Django framework and vanilla HTML, CSS, and JavaScript on the frontend. Hosted on a Heroku Dyno, using an AWS S3 bucket to serve static files, and a PostgreSQL database, also hosted on Heroku, to store project information. A REST API is used to send information to the client. Secured with TLS encryption.",
    skills: [
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Heroku Dyno",
      "AWS S3",
      "PostgreSQL",
    ],
    thumbnail:
      "https://siddhpersonalwebsite.blob.core.windows.net/images/personalwebsite.png",
    thumbnailDimensions: { width: 1200, height: 900 },
    hasDemo: false,
    hasRepo: false,
    demoUrl: "",
    repoUrl: "",
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
];

export function getProject(index: number) {
  return projects[index];
}

export function getProjects() {
  return projects;
}
