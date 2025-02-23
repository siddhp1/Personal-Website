import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border-t border-light-8 dark:border-dark-8">
        <div className="flex justify-between items-center mx-6 md:mx-20 xl:mx-40 pb-8 md:pb-6 pt-6">
          <Link
            href="/"
            className="text-4xl font-medium text-light-9 dark:text-dark-9"
          >
            Siddh Patel
          </Link>
          <div className="flex gap-2 lg:gap-6 text-lg text-light-8 dark:text-dark-7">
            <a
              href="https://github.com/siddhp1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-light-3 dark:hover:bg-dark-3 duration-200">
                <span className="hidden lg:inline">GitHub</span>
                <FaGithub className="size-6" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/siddh-p/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-light-3 dark:hover:bg-dark-3 duration-200">
                <span className="hidden lg:inline">LinkedIn</span>
                <FaLinkedin className="size-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
