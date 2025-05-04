import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const Experience = ({ theme }) => {
  const [isMounted, setIsMounted] = useState(false);
  const experiences = [
    {
      type: "work",
      title: "Student Assistant, Librarian Clerk",
      company: "College of Medecine Library, Western Mindanao State University",
      period: "Jun 2023 - Dec 2023",
      description:
        "Assisted in administrative tasks and provided support to faculty members. Gained experience in office management and communication.",
      skills: ["Communication", "Organization", "Teamwork"],
    },
    {
      type: "work",
      title: "Project Manager",
      company: "Software Engineering Project",
      period: "Jan 2024 - April 2024",
      description:
        "Project Manager in College of Engineering Resource Management System where i assisted on documentation and communication with the team.",
      skills: ["Communication", "Documentation", "Writing", "Teaching"],
    },
    {
      type: "work",
      title: "Project Manager",
      company: "Capstone Project",
      period: "2024 - Present",
      description:
        "Assisting on Documentation, Designing and System flow.",
      skills: ["Documentation", "HTML", "CSS", "Designing"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div
            className={`w-20 h-1 mx-auto mb-6 ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <p className="max-w-2xl mx-auto text-lg">
            My professional journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-lg ${
                theme === "dark"
                  ? "bg-gray-800"
                  : theme === "beige"
                  ? "bg-yellow-100"
                  : "bg-white"
              }`}
            >
              <div className="flex gap-4">
                <div
                  className={`p-3 rounded-full ${
                    exp.type === "work"
                      ? theme === "dark"
                        ? "bg-blue-900/50 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                      : theme === "dark"
                      ? "bg-purple-900/50 text-purple-400"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {exp.type === "work" ? (
                    <Briefcase size={24} />
                  ) : (
                    <GraduationCap size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === "dark"
                          ? "bg-gray-700"
                          : theme === "beige"
                          ? "bg-yellow-300"
                          : "bg-gray-200"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg mb-2">{exp.company}</h4>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700"
                            : theme === "beige"
                            ? "bg-yellow-300"
                            : "bg-gray-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;