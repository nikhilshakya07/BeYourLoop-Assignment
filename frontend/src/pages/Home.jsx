import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
          Connect. Schedule. Grow.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Build your professional presence with a beautiful public profile & let others book time with you instantly — inspired by Topmate.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
