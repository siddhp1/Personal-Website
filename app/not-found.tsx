import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Header from "@/components/ui/Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center my-40 mx-6">
        <h1 className="text-5xl text-light-9 dark:text-dark-9">
          Something went wrong.
        </h1>
        <p className="text-light-7 dark:text-dark-7 my-2">
          You are either in the wrong place, or I messed up...
        </p>
        <Link href="/">
          <div className="flex items-center gap-3 rounded-xl px-2 py-1 text-xl text-light-9 dark:text-dark-9 hover:bg-light-3 dark:hover:bg-dark-3 duration-200">
            Return to home
            <FaHome className="size-6" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Error;
