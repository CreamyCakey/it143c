import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = ({ theme }) => {
  return (
    <section className="min-h-[90vh] flex items-center ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 ">
        <div className="flex flex-row items-center gap-8 mobile-reverseFlex">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-intro">
              Hi, I'm <span className="text-blue-500">Dave</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-intro">
              Software Developer
            </h2>
            <p className="text-lg mb-8 text-intro">
              Passionate about UI designing and development, creating
              user-friendly designs.
            </p>
            <div className="flex flex-wrap gap-4 button-intro">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    theme === "dark"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : theme === "beige"
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Contact Me <Mail size={18} />
                </Link>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="./cvfile/dabid-cv.png" // <-- Ensure this matches the file name in your public folder
                download
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : theme === "beige"
                    ? "bg-beige-300 hover:bg-beige-400 text-gray-800"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                Download CV <Download size={18} />
              </motion.a>
            </div>
            <div className="flex gap-4 mt-8 button-intro">
              <a
                href="https://github.com/CreamyCakey"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : theme === "beige"
                    ? "bg-beige-300 hover:bg-beige-400 text-gray-800"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : theme === "beige"
                    ? "bg-beige-300 hover:bg-beige-400 text-gray-800"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div
              className={`w-65 h-55 md:w-65 md:h-65 square-full overflow-hidden  ${
                theme === "dark"
                  ? "border-gray-700"
                  : theme === "beige"
                  ? "border-beige-300"
                  : "border-gray-200"
              }`}
            >
              <img
                img src="daves.png" // Replace with your image path
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
