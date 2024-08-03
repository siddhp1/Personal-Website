import Link from "next/link";
import Image from "next/image";

import { FaGripLinesVertical } from "react-icons/fa";
import { Experience } from "../../api/FetchExperiences";

interface ExperienceElementProps {
  experience: Experience;
  index: number;
  last: boolean;
}

const ExperienceElement = ({
  experience,
  index,
  last,
}: ExperienceElementProps) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var date = "";
  if (new Date(experience.startDate) > new Date()) {
    date = `Incoming ${
      months[new Date(experience.startDate).getMonth()]
    } ${new Date(experience.startDate).getFullYear()}`;
  } else if (new Date(experience.endDate) > new Date()) {
    date = `${months[new Date(experience.startDate).getMonth()]} ${new Date(
      experience.startDate
    ).getFullYear()} - Present`;
  } else {
    const start = `${
      months[new Date(experience.startDate).getMonth()]
    } ${new Date(experience.startDate).getFullYear()}`;
    const end = `${months[new Date(experience.endDate).getMonth()]} ${new Date(
      experience.endDate
    ).getFullYear()}`;
    date = `${start} - ${end}`;
  }

  return (
    <li className="relative flex gap-6 pb-5 items-baseline">
      <div
        className={
          last
            ? ""
            : "before:absolute before:left-[5px] before:h-full before:w-[2px] before:bg-light-7 dark:before:bg-dark-7"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 16 16"
          className="bi bi-circle fill-light-7 dark:fill-dark-7"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
      <Link
        href={`/experience/${index}`}
        className="w-full rounded-xl px-2 py-1 hover:bg-light-3 dark:hover:bg-dark-3 duration-200"
      >
        <div className="flex md:justify-between md:items-center">
          <div className="flex flex-col xl:flex-row xl:items-center text-light-8 dark:text-dark-7">
            <p className="text-lg font-medium text-light-9 dark:text-dark-9">
              {experience.title}
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex items-center md:mr-3 xl:mx-3">
                <p className="">
                  @ {experience.useLogoAsName ? null : experience.company}
                </p>
                {experience.hasLogo ? (
                  <Image
                    src={experience.logo}
                    width="100"
                    height="100"
                    alt={experience.company}
                    className="h-4 w-auto ml-2"
                  />
                ) : null}
              </div>
              <FaGripLinesVertical className="hidden md:block" />
              <p className="md:ml-3">{experience.location}</p>
              <p className="md:hidden">{date}</p>
            </div>
          </div>
          <p className="hidden md:block lg:ml-3 text-light-8 dark:text-dark-7">
            {date}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ExperienceElement;
