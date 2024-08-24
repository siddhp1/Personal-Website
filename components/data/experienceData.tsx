export interface Experience {
  title: string;
  company: string;
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
    title: "Fullstack Developer",
    company: "HLSS Chess Club",
    hasUrl: false,
    companyUrl: "",
    hasLogo: true,
    logo: "/chessclublogo.png",
    logoDimensions: { width: 196, height: 191 },
    useLogoAsName: false,
    startDate: "10 Oct 2023",
    endDate: "17 Dec 2023",
    location: "Brampton, Ontario",
    description:
      "Developed a chess tournament organization web application in-house for use in school tournaments.$nLed a team of four developers over the course of six one-week sprints.",
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
