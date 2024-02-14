import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "../lib/hooks";
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <img
            src="/images/avt_me.jpg"
            alt="OhDani portrait"
            width={200}
            height={200}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
        </motion.div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-medium leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Tran Thi My Ngoc.</span> I'm a{" "}
        <span className="font-bold">intern web developer</span> without{" "}
        <span className="font-bold">any experience</span>. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">ReactJs</span>.
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="#contact"
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </a>
        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/CV_OhDani.pdf"
          target="_blank"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 hover:scale-110 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/OhDani"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
