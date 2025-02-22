import { Fragment } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGripLinesVertical } from "react-icons/fa";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { getExperience } from "@/components/data/experienceData";

export default function Experience({ params }: { params: { slug: number } }) {
  const experience = getExperience(params.slug);

  // Date logic
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
    <>
      <Header />
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 mx-6 md:mx-20 lg:mx-40 mt-6 mb-12 xl:mt-36 xl:mb-64">
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-3xl font-medium text-light-9 dark:text-dark-9">
            {experience.title}
          </h1>
          {/* Company, date, and location*/}
          <div className="my-2 flex flex-col md:flex-row md:items-center text-light-8 dark:text-dark-7">
            <div className="">
              {experience.hasUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  @
                  <div className="flex items-center gap-2 rounded-xl ml-0.5 px-2 py-1 hover:bg-light-3 dark:hover:bg-dark-3 duration-200">
                    {experience.useShort
                      ? experience.companyShort
                      : experience.company}
                    <FaExternalLinkAlt className="size-4" />
                  </div>
                </a>
              ) : (
                <p>
                  @{" "}
                  {experience.useShort
                    ? experience.companyShort
                    : experience.company}
                </p>
              )}
            </div>
            <FaGripLinesVertical className="ml-2 mr-4 text-light-7 dark:text-dark-6 hidden md:block" />
            <p className="my-1 md:my-0">{experience.location}</p>
            <FaGripLinesVertical className="mx-4 text-light-7 dark:text-dark-6 hidden md:block" />
            <p className="my-1 md:my-0">{date}</p>
          </div>
          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills !== null
              ? experience.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-xl px-2 py-1 bg-light-3 dark:bg-dark-3"
                  >
                    <p className="text-sm text-light-8 dark:text-dark-7">
                      {skill}
                    </p>
                  </div>
                ))
              : null}
          </div>
          {/* Image for non-Xl screens */}
          <Image
            src={experience.image}
            width={experience.imageDimensions.width}
            height={experience.imageDimensions.height}
            alt={`${experience.title} image`}
            className="w-full my-6 xl:hidden rounded-xl"
          />
          {/* Description */}
          {/* Split at the '$n' delimiter */}
          <p className="xl:my-8 text-light-9 dark:text-dark-9">
            {experience.description.split("$n").map((line, index, array) => (
              <Fragment key={index}>
                {line}
                {index < array.length - 1 && (
                  <span>
                    <br />
                    <br />
                  </span>
                )}
              </Fragment>
            ))}
          </p>
        </div>
        {/* Image */}
        <Image
          src={experience.image}
          width={experience.imageDimensions.width}
          height={experience.imageDimensions.height}
          alt={`${experience.title} image`}
          className="w-full hidden xl:block rounded-xl"
        />
      </div>
    </>
  );
}
