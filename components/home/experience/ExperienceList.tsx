import { Experience } from "../../api/FetchExperiences";
import ExperienceElement from "./ExperienceElement";

interface ExperienceListProps {
  experiences: Experience[];
}

export default async function ExperienceList({
  experiences,
}: ExperienceListProps) {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-6 md:mx-20 xl:mx-40 my-32">
        <h1 className="text-2xl font-medium min-w-36 text-light-7 dark:text-dark-7">
          Experience
        </h1>
        <div className="mt-1.25 lg:ml-6 w-full">
          <p className="text-lg text-light-9 dark:text-dark-9">
            Here is a list of all of my experiences. Click on an experience to
            learn more.
          </p>
          <div className="mt-4">
            <ul>
              {experiences.map((experience: Experience, index) => (
                <ExperienceElement
                  key={index}
                  experience={experience}
                  index={index}
                  last={index == experiences.length - 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
