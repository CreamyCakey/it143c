import { motion } from "framer-motion";
import { BookOpen, GraduationCap, User } from "lucide-react";
import { useState, useEffect } from "react";

const About = ({ theme }) => {
  const [isMounted, setIsMounted] = useState(false);
  const education = [
    {
      year: "2021 - Present",
      degree: "Bachelor of Science in Information Technology",
      institution: "Western Mindanao State University",
    },
    {
      year: "2019 - 2021",
      degree: "Accountancy, Business and Management",
      institution: "Zamboanga City High School",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null; // or return a loading spinner
  }

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <User size={28} /> About Me
          </h2>
          <div
            className={`w-20 h-1 mx-auto mb-6 ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <p className="max-w-2xl mx-auto text-lg">
            Hey there! I'm an energetic and passionate individual who loves bringing positivity and 
            creativity into everything I do. With a warm personality and a fun-loving spirit, 
            I thrive on connecting with people, embracing new experiences, and making every moment exciting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg ${
              theme === "dark"
                ? "bg-gray-800"
                : theme === "beige"
                ? "bg-beige-200"
                : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <ul className="space-y-3">
              <li><span className="font-medium">Name:</span> Dave Lamoste</li>
              <li><span className="font-medium">Age:</span> 22</li>
              <li><span className="font-medium">Location:</span> Philippines</li>
              <li><span className="font-medium">Email:</span> davelamoste0@gmail.com</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg ${
              theme === "dark"
                ? "bg-gray-800"
                : theme === "beige"
                ? "bg-beige-200"
                : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap size={20} /> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8">
                  <div
                    className={`absolute left-0 top-1 w-4 h-4 rounded-full ${
                      theme === "dark" ? "bg-blue-500" : "bg-blue-600"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-2 top-5 h-full w-0.5 ${
                      theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                    }`}
                  ></div>
                  <div className="text-sm font-medium">{edu.year}</div>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mt-8 p-6 rounded-lg ${
            theme === "dark"
              ? "bg-gray-800"
              : theme === "beige"
              ? "bg-beige-200"
              : "bg-gray-100"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen size={20} /> Hobbies & Interests
          </h3>
          <div className="flex flex-wrap gap-4">
            {["Coding", "Reading", "Photography", "Biking"].map(
              (hobby, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    theme === "dark"
                      ? "bg-gray-700"
                      : theme === "beige"
                      ? "bg-beige-300"
                      : "bg-gray-200"
                  }`}
                >
                  {hobby}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;