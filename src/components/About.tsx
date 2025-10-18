import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="mb-8 text-3xl font-medium capitalize">About me</h2>{" "}
      <p className="mb-3">
        I'm a final-year Software Engineering student at the Vietnam–Korea
        University of Information and Communication Technology (VKU), currently
        interning at FPT Software Da Nang. My main focus is Frontend Development
        using ReactJS, and I’m also interested in learning more about project
        coordination and the Bridge System Engineer (BRSE) role in the future. I
        enjoy building clean, responsive interfaces and solving problems through
        code. My core tech stack includes ReactJS, TypeScript, JavaScript, and
        Git, and I’m familiar with tools like Figma and RESTful API integration.
      </p>
      <p>
        When <i>I’m not coding</i>, I enjoy listening to music and learning
        languages - I currently hold an <span className="font-semibold">IELTS 5.0</span> and <span className="font-semibold">TOPIK II (Level 3)</span> in Korean.
        I’m known as a team-oriented person who enjoys collaborating, sharing
        ideas, and constantly improving both technical and soft skills through
        real-world experience.
      </p>
    </motion.section>
  );
}
