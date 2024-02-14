import React, { useRef } from "react";
import { projectsData } from "../lib/data";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} className="mb-28 scroll-mt-28" id="projects">
      <h2 className="mb-8 text-center text-3xl font-medium capitalize">
        My Projects
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
type ProjectsProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectsProps) {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      // data-aos="fade-up"
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 last:mb-0 sm:mb-8 "
    >
      <section className="relative -z-10 mb-3 max-w-[42rem] overflow-hidden border border-black/5 bg-gray-100 transition last:mb-0 even:pl-8 hover:bg-gray-200 sm:mb-8 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <div className="flex h-full flex-col px-5 py-4 pb-8 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          className=" group-even:-right[initial] absolute
          -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition 
          group-even:-left-40 
          group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-2 
          group-hover:scale-[1.04] 
          group-even:group-hover:translate-x-3
          
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2 
          group-even:group-hover:scale-[1.04] 
          sm:block"
          src={imageUrl}
          alt="Project I worked on"
        />
      </section>
    </motion.div>
  );
}