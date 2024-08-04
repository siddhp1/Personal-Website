import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProjectSwiper from "@/components/home/ProjectSwiper";
import ExperienceList from "@/components/home/experience/ExperienceList";

import getGeneral from "@/components/data/generalData";
import { getProjects } from "@/components/data/projectData";
import { getExperiences } from "@/components/data/experienceData";

export default function Home() {
  const general = getGeneral();
  const projects = getProjects();
  const experiences = getExperiences();

  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProjectSwiper projects={projects} />
      {general.showExperience ? (
        <ExperienceList experiences={experiences} />
      ) : (
        <div className="h-32"></div>
      )}
      <Footer />
    </>
  );
}
