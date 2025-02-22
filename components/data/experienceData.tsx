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
    title: "Software Developer",
    company: "Waterloo Reality Labs",
    companyShort: "UW Reality Labs",
    useShort: true,
    hasUrl: true,
    companyUrl: "https://uwrealitylabs.com/",
    hasLogo: true,
    logo: "/realitylabslogo.png",
    logoDimensions: { width: 393, height: 455 },
    useLogoAsName: false,
    startDate: "1 Feb 2025",
    endDate: "17 May 2025",
    location: "Waterloo, ON",
    description: "Working on the Universal Text project.",
    skills: ["C#", "Unity"],
    image: "/realitylabs.png",
    imageDimensions: { width: 3309, height: 2482 },
  },
  {
    title: "Software Developer",
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
      "Developed a fire detection model using OpenCV, optimizing for fast processing times while maintaining high accuracy.$nRefined a pathing algorithm for drone traversal, reducing search area overlap and halving traversal times.$n... and much more!",
    skills: ["Python", "OpenCV", "Pytest"],
    image: "/uwarg.jpg",
    imageDimensions: { width: 3309, height: 2482 },
  },
  {
    title: "Frontend Developer Intern",
    company: "SQLSquare Inc.",
    companyShort: "SQLSquare Inc.",
    useShort: false,
    hasUrl: true,
    companyUrl: "https://sqlsquare.com/",
    hasLogo: true,
    logo: "/sqlsquarelogo.png",
    logoDimensions: { width: 200, height: 87 },
    useLogoAsName: false,
    startDate: "1 Jul 2024",
    endDate: "31 Aug 2024",
    location: "Brampton, ON",
    description:
      "Built user interfaces for pages, including forms and tables, using ASP.NET Razor Pages and Bootstrap.$nIntegrated the Google Maps API to display interactive maps with location data for customers.$nWrote comprehensive user documentation for the developed pages, providing detailed functionality descriptions and step-by-step instructions.",
    skills: ["ASP.NET Razor Pages", "HTML", "Bootstrap"],
    image: "/sqlsquare.png",
    imageDimensions: { width: 1249, height: 937 },
  },
  {
    title: "Software Developer",
    company: "Heart Lake Secondary School",
    companyShort: "HLSS",
    useShort: true,
    hasUrl: false,
    companyUrl: "",
    hasLogo: true,
    logo: "/chessclublogo.png",
    logoDimensions: { width: 196, height: 191 },
    useLogoAsName: false,
    startDate: "10 Sep 2023",
    endDate: "17 Nov 2023",
    location: "Brampton, ON",
    description:
      "Designed and built user-friendly interfaces for a chess tournament web app using HTML and CSS.$nDeveloped a matchmaking algorithm in JavaScript to generate game pairings across multiple rounds.$nApplication was deployed with a CI/CD pipeline on GitHub Pages, enabling use in school tournaments.",
    skills: ["HTML", "CSS", "JavaScript", "GitHub Pages", "GitHub Actions"],
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
