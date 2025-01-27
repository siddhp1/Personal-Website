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
    title: "What To Cook",
    shortDesc: "Dish tracking and recommendation mobile app",
    longDesc:
      "What To Cook is an mobile app made for homecooks that struggle to decide what to cook every day. Keep track of all of the dishes you've ever made and get recommendations for future meals!",
    skills: [
      "TypeScript",
      "Expo",
      "React Native",
      "Python",
      "Django",
      "Azure App Service",
      "Azure PostgreSQL",
      "Azure Blob Storage",
    ],
    thumbnail: "/whattocook.png",
    thumbnailDimensions: { width: 2800, height: 2100 },
    hasDemo: false,
    hasRepo: true,
    demoUrl: "",
    repoUrl: "https://github.com/siddhp1/What-To-Cook",
  },
  {
    title: "Sysgrab",
    shortDesc: "Customizable system information fetching",
    longDesc:
      "Sysgrab is a lightweight and customizable system information tool, which fetches and displays system details such as OS, Architecture, CPU, Memory, and more in the terminal.$nUsers can configure Sysgrab's base and accent colors, and add ASCII art of their choice through the CLI or by directly editing the configuration files.$nSysgrab is compatible with all Linux distributions, and features CMake for build automation and GitHub Actions for CI/CD.",
    skills: ["C", "LibYAML", "CMake", "GitHub Actions"],
    thumbnail: "/sysgrab.png",
    thumbnailDimensions: { width: 2700, height: 2025 },
    hasDemo: false,
    hasRepo: true,
    demoUrl: "",
    repoUrl: "https://github.com/siddhp1/Sysgrab",
  },
  {
    title: "Culinary Compass",
    shortDesc: "Restaurant tracking and recommendation web app",
    longDesc:
      "Culinary Compass lets users track and rate restaurant visits. A user profile is then built using data collected about the restaurants they visit. Recommendations are made using a cosine similarity algorithm comparing the user's profile with restaurants in a selected location.$nUsers can generate a year-end PDF recap of their favorite restaurants, cuisines, price categories, and dining times, created with ReportLab and Matplotlib.$nUser information is stored securely in a SQLite database with bcrypt password hashing. Culinary Compass is deployed on Azure using Nginx, Gunicorn, and Supervisor.",
    skills: [
      "Python",
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
    demoUrl: "https://culinarycompass.siddhp.com",
    repoUrl: "https://github.com/siddhp1/Culinary-Compass",
  },
  {
    title: "Gesture Controller",
    shortDesc: "Gesture-powered multimedia controls",
    longDesc:
      "Gesture Controller is a cross-platform application that allows users to control media functions using hand gestures, with real-time camera capture and high-performance inference for responsive user actions.$nFeatures a dense neural network trained to 97% validation accuracy on landmark data collected from the HaGRID (512px) dataset.",
    skills: ["Python", "Tensorflow", "OpenCV", "MediaPipe", "Flask", "PyAutoGUI"],
    thumbnail: "/gesture.png",
    thumbnailDimensions: { width: 2800, height: 2100 },
    hasDemo: false,
    hasRepo: true,
    demoUrl: "",
    repoUrl: "https://github.com/siddhp1/Gesture-Controller",
  },
  {
    title: "Messenger",
    shortDesc: "Desktop application for WAN messaging",
    longDesc:
      "A desktop application for WAN messaging built with Java and Maven, featuring a Swing-based GUI, socket programming, and multithreading.$nUsers can chat, either through a global channel (with all clients connected to the server) or direct messages (client to client).$nMessenger has an external server that can be hosted anywhere in the world, allowing users to download the client, connect to the server, and message other users who are also connected to it.",
    skills: ["Java", "Swing", "Socket Programming", "Maven"],
    thumbnail: "/messenger.png",
    thumbnailDimensions: { width: 1440, height: 1080 },
    hasDemo: false,
    hasRepo: true,
    demoUrl: "",
    repoUrl: "https://github.com/siddhp1/Messenger",
  },
  {
    title: "Pomodoro Timer",
    shortDesc: "Static pomodoro timer website",
    longDesc:
      "A Pomodoro timer website with customizable durations for Pomodoro sessions, short breaks, and long breaks.$nSoon to be replaced with Focus, a full-stack cross-platform application for Pomodoro technique, organized and collaborative studying, and overall time management.",
    skills: ["HTML", "CSS", "JavaScript", "GitHub Actions", "GitHub Pages"],
    thumbnail: "/pomodorotimer.png",
    thumbnailDimensions: { width: 3360, height: 2520 },
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
