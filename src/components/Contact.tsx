import { FaPaperPlane } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const formRef = useRef(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is null!");
      return;
    }

    emailjs
      .sendForm(
        "service_wwumza9",     // Service ID
        "template_aed4ppn",    // Template ID
        formRef.current,
        "Wza_n9x48Ojvr48eg"    // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          // formRef.current.reset(); // clear form
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <motion.section
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
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
        Please contact me directly at{" "}
        <a href="mailto:tranngoc2k41511@gmail.com" className="underline">
          tranngoc2k41511@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 rounded-lg border border-black/10 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          placeholder="Your email"
        />
        <textarea
          className="my-3 h-52 rounded-lg border border-black/10 p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
        />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2
            rounded-full bg-gray-900 text-white outline-none
            transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110
            active:scale-105 dark:bg-white dark:bg-opacity-10"
        >
          <span>Submit</span>
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
