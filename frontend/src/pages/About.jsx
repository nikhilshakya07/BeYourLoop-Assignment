import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-blue-700 mb-4"
      >
        Our Mission
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-600 max-w-2xl text-lg"
      >
        At BeYourLoop, we're on a mission to simplify how professionals connect and collaborate. Our goal is to empower creators, freelancers, and coaches with tools to showcase themselves and engage meaningfully — inspired by Topmate.io.
      </motion.p>
    </section>
  );
};

export default About;
