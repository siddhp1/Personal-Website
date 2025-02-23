import { FaExternalLinkAlt } from "react-icons/fa";

import getGeneral from "@/components/data/generalData";

export default function About() {
  const data = getGeneral();

  return (
    <>
      <div className="flex flex-col lg:flex-row mx-6 md:mx-20 xl:mx-40 mt-12">
        <h1 className="text-2xl font-medium min-w-36 text-light-7 dark:text-dark-7">
          About Me
        </h1>
        <p className="mt-1.25 lg:ml-6 text-lg text-light-9 dark:text-dark-9">
          I am a Software Engineering student at the University of Waterloo,
          with a passion for building innovative and impactful things.
          My interests span full-stack development and artificial intelligence/machine learning.
          <br />
          <br />
          I am always open to connect with like-minded individuals, explore new
          opportunities, and learn new things. Feel free to reach out!
          <br />
          <br />
          Check out my projects and experience below
          {data.showResume ? (
            <>
              <span>, or take a look at my</span>
              <span>
                <a
                  href={data.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex ml-0.5 rounded-xl pt-2 pb-1 px-2 leading-relaxed whitespace-nowrap hover:bg-light-3 dark:hover:bg-dark-3 duration-200"
                >
                  resume.
                  <FaExternalLinkAlt size={14} />
                </a>
              </span>
            </>
          ) : (
            <span>.</span>
          )}
        </p>
      </div>
    </>
  );
}
