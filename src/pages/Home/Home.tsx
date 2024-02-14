import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Intro from "../../components/intro";
import Projects from "../../components/Projects";
import SectionDivider from "../../components/SectionDivider";
import Skills from "../../components/Skills";

export const Home = () => {
  return (
    <div className="flex scroll-mt-28 flex-col items-center px-4 ">
      <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="absolute left-[35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};
