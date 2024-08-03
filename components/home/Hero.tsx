import Image from "next/image";

import { FaExternalLinkAlt, FaArrowDown } from "react-icons/fa";

import getGeneral from "../api/FetchGeneral";

export default async function Hero() {
  const data = await getGeneral();
  const imageUrl = `https:${data.profileImage?.fields?.file.url}`;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center h-90 md:h-96 my-8 md:my-16 mx-6">
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            alt="Profile picture"
            className="justify-center h-90 w-90 md:h-96 md:w-96 rounded-full"
            priority={true}
          />
        </div>
        <div className="flex mx-6 md:mx-20 xl:mx-40 my-8 md:my-16">
          {/* Button on larger screens */}
          <p className="hidden md:block md:text-2xl xl:text-4xl text-light-9 dark:text-dark-9">
            I am Siddh, an aspiring software engineer, <br /> incoming
            {data.showHeadlineLink ? (
              <span>
                <a
                  href={data.headlineLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-1 ml-2 mr-1 my-1 rounded-xl py-1 xl:pt-0 xl:pb-1 px-1 md:px-2 leading-relaxed whitespace-nowrap hover:bg-light-3 dark:hover:bg-dark-3 duration-200"
                >
                  Software Engineering
                  <FaExternalLinkAlt size={24} className="pt-2" />
                </a>
              </span>
            ) : (
              <span> Software Engineering </span>
            )}
            at the University of Waterloo.
          </p>
          {/* Continuous on mobile */}
          <p className="block md:hidden text-xl text-light-9 dark:text-dark-9">
            I am Siddh, an aspiring software engineer, incoming Software
            Engineering at the University of Waterloo.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-8 md:mt-4 mb-20 justify-center items-center text-light-8 dark:text-dark-7">
          Welcome to my website
          <FaArrowDown size={20} />
        </div>
      </div>
    </>
  );
}
