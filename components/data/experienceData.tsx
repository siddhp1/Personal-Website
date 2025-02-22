export interface Experience {
  title: string;
  company: string;
  companyShort: string;
  useShort: boolean;
  hasUrl: boolean;
  companyUrl: string;
  hasLogo: boolean;
  logo?: string;
  logoDimensions?: { width: number; height: number };
  useLogoAsName: boolean;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  skills: string[];
  image: string;
  imageDimensions: { width: number; height: number };
}

const experiences = [
  {
    title: "Autonomy Developer",
    company: "Waterloo Aerial Robotics Group",
    companyShort: "UWARG",
    useShort: true,
    hasUrl: true,
    companyUrl: "https://www.uwarg.com/",
    hasLogo: true,
    logo: "/uwarglogo.png",
    logoDimensions: { width: 200, height: 200 },
    useLogoAsName: false,
    startDate: "10 Sep 2024",
    endDate: "17 May 2025",
    location: "Waterloo, ON",
    description:
      "Designed a classical computer vision implementation using OpenCV to detect IR emitter bright spots, achieving 90%+ detection accuracy with sub-20ms image processing and inference times.$nArchitected a pathing algorithm in Python to generate optimized drone waypoint lists, minimizing search times.$nDeveloped an efficient Python script to automate the aggregation of log files, significantly streamlining the process for drone testing and eliminating manual effort.",
    skills: ["Python", "OpenCV"],
    image: "/uwarg.jpg",
    imageDimensions: { width: 3309, height: 2482 },
  },
  {
    title: "Fullstack Developer",
    company: "HLSS Chess Club",
    companyShort: "HLSS Chess Club",
    useShort: false,
    hasUrl: false,
    companyUrl: "",
    hasLogo: true,
    logo: "/chessclublogo.png",
    logoDimensions: { width: 196, height: 191 },
    useLogoAsName: false,
    startDate: "10 Oct 2023",
    endDate: "17 Dec 2023",
    location: "Brampton, ON",
    description:
      "Spearheaded the development of a chess tournament web application, implementing a Scheveningen match-making algorithm in JavaScript with user interfaces in HTML and CSS, for use in organizing school tournaments.$nCoordinated with a team of four developers, creating roadmaps and design documents across six one-week sprints.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "PythonAnywhere",
      "GitHub Pages",
    ],
    image: "/scheveningen.png",
    imageDimensions: { width: 1440, height: 1080 },
  },
];

export function getExperience(index: number) {
  return experiences[index];
}

export function getExperiences() {
  return experiences;
}
