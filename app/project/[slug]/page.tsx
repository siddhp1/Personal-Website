import { Fragment } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import getProjects from "@/components/api/FetchProjects";

export default async function Project({
  params,
}: {
  params: { slug: number };
}) {
  const projects = await getProjects();
  const project = projects[params.slug];

  return (
    <>
      <Header />
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 mx-6 md:mx-20 lg:mx-40 mt-6 mb-12 xl:mt-36 xl:mb-60">
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-3xl font-medium text-light-9 dark:text-dark-9">
            {project.title}
          </h1>
          {/* Short description */}
          <p className="my-2 text-light-8 dark:text-dark-7">
            {project.shortDesc}
          </p>
          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {project.skills !== null
              ? project.skills.map((skill, index) => (
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
            src={project.thumbnail}
            width={project.thumbnailDimensions.width}
            height={project.thumbnailDimensions.height}
            alt={`${project.title} thumbnail`}
            className="w-full my-6 xl:hidden rounded-xl"
          />
          {/* Long description */}
          {/* Split at the '$n' delimiter */}
          <p className="xl:my-8 text-light-9 dark:text-dark-9">
            {project.longDesc.split("$n").map((line, index, array) => (
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
          {/* Links */}
          <div className="flex mt-2 gap-2 md:gap-4 text-md text-light-8 dark:text-dark-7">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-light-3 dark:hover:bg-dark-3 duration-200">
                <span className="hidden md:inline">Visit</span>
                GitHub Repo
                <FaGithub className="size-5" />
              </div>
            </a>
            {project.hasDemo ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-light-3 dark:hover:bg-dark-3 duration-200">
                  View Live <span className="hidden md:inline">Project</span>
                  <FaExternalLinkAlt className="size-4" />
                </div>
              </a>
            ) : null}
          </div>
        </div>
        {/* Image */}
        <Image
          src={project.thumbnail}
          width={project.thumbnailDimensions.width}
          height={project.thumbnailDimensions.height}
          alt={`${project.title} thumbnail`}
          className="w-full hidden xl:block rounded-xl"
        />
      </div>
      <Footer />
    </>
  );
}
