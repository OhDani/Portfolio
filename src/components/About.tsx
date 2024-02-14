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
        I'm currently a student at VietNam-Korea University of Information and
        Communication technology. I decided to pursue my passion for full-stack
        web development. I self-taught Kotlin with 3 weeks and ReactJs with 2
        weeks. My favorite part of programming is UI design and problem-solving
        aspect. I love the feeling of figuring out a solution to a problem. My
        core stack is ReactJs, Typescript, Java Spring, mySQL and I'm also
        familiar with Javascript, Nextjs and Kotlin. I am always looking to
        learn new technologies and a full-time position as a web developer.
      </p>
      <p>
        When <i>I'm not coding</i>, I enjoy listening to music, learning some
        new languages such as English or Korea and at present, I have an Ielts
        certificate with 5.0 band. I am considered a team-player because I like
        to help other and tend to work well within groups. I can also do some
        mentoring tasks and do code reviewing for other team members. I like
        helping other and work well with group. I can also do some mentoring
        tasks and code reviewing for other members.
      </p>
    </motion.section>
  );
}
