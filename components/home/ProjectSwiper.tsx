"use client";

import Link from "next/link";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { Project } from "../api/FetchProjects";

interface ProjectSwiperProps {
  projects: Project[];
}

export default function ProjectSwiper({ projects }: ProjectSwiperProps) {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items mx-6 md:mx-20 xl:mx-40 mt-32 mb-6">
        <h1 className="text-2xl font-medium min-w-36 text-light-7 dark:text-dark-7">
          Projects
        </h1>
        <p className="mt-1.25 lg:ml-6 text-lg text-light-9 dark:text-dark-9">
          Here is a portfolio of my favourite projects. Click on a project to
          learn more.
        </p>
      </div>

      <div className="mx-4 lg:mx-0">
        <Swiper
          spaceBetween={0}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          slidesPerGroup={1}
          loop={true}
          centeredSlides={true}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Link href={`/project/${index}`}>
                <div className="flex flex-col gap-1 px-2 md:px-2">
                  <Image
                    src={project.thumbnail}
                    width={project.thumbnailDimensions.width}
                    height={project.thumbnailDimensions.height}
                    alt={project.title}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full rounded-xl"
                  />
                  <p className="pl-1 md:pl-2 font-plex-mono text-md text-light-8 dark:text-dark-7">
                    <span className="font-medium text-light-9 dark:text-dark-9">
                      {project.title}
                    </span>{" "}
                    - {project.shortDesc}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
