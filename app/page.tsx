import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProjectSwiper from "@/components/home/ProjectSwiper";
import ExperienceList from "@/components/home/experience/ExperienceList";

import getProjects from "@/components/api/FetchProjects";
import getGeneral from "@/components/api/FetchGeneral";
import getExperiences from "@/components/api/FetchExperiences";

export default async function Home() {
  // Parallel fetch
  const experiencesData = getExperiences();
  const projectsData = getProjects();
  const generalData = getGeneral();

  const [general, projects, experiences] = await Promise.all([
    generalData,
    projectsData,
    experiencesData,
  ]);

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
