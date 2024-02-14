import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import { Button } from "@react-email/components";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <motion.section
      ref={ref}
      className=" mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="mb-8 text-center text-3xl font-medium capitalize">
        Contact me
      </h1>
      <p className="-mt-5 text-gray-700 dark:text-white/80">
        Please contact me directly at {""}
        <a href="mailto:example@gmail.com" className="underline">
          example@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 rounded-lg border border-black/10 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="my-3 h-52 rounded-lg border border-black/10 p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <Button
          href="https://example.com"
          type="submit"
          className="group flex h-[3rem] w-[8rem] scale-110 items-center justify-center 
          gap-2 rounded-full bg-gray-900 text-white outline-none
          transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110
          active:scale-105 dark:bg-white dark:bg-opacity-10"
        >
          Submit{" "}
          <FaPaperPlane
            className="group-hover: translate-x-1 text-xs opacity-70 
          transition-all group-hover:-translate-y-1"
          />
          {""}
        </Button>
      </form>
    </motion.section>
  );
}
