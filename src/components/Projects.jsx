import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = ({ theme }) => {
  const [isMounted, setIsMounted] = useState(false);
  const projects = [
    {
      title: "OJT-MIS or OJT Management Information System Using QR Code",
      description:
        "A capstone project collaborated by Gadiana, Jhon Ezekiel and Labial, Rosa Camille.",
      tags: ["PHP", "CSS", "HTML", "MySQL"],
      github: "#",
      live: "https://mediumturquoise-shrew-168289.hostingersite.com/index.php",
      image: "ojtmis.png",
    },
    {
      title: "CERMS or College of Engineering Resource Management System",
      description:
        "A web app focusing on tracking the borrowing or lending equipments to the students. This web app Developed by Christoper Canada our lead programmer, Rhenden Rada our QA Tester and Anthony Erich Ramos our System Analyst.",
      tags: ["PHP", "CSS", "HTML", "MySQL"],
      github: "#",
      live: "#",
      image: "cerms.png",
    },
    {
      title: "On The Way We Trust",
      description: "A project based on Django.",
      tags: ["HTML", "CSS", "MDjango"],
      github: "https://github.com/CreamyCakey/django.git",
      live: "#",
      image: "otwt.png",
    },
    {
      title: "On The Way We Trust",
      description: "A project based on PHP and MySQL.",
      tags: ["HTML", "CSS", "MDjango"],
      github: "https://github.com/AldwinRayAguilo/OTWT.git",
      live: "#",
      image: "otwt.png",
    },
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with PHP, HTML, and CSS.",
      tags: ["PHP", "HTML", "CSS"],
      github: "https://github.com/CreamyCakey/zjdftws.git",
      live: "#",
      image: "zjdftw.png",
    },
    {
      title: "To-Do List",
      description: "A simple To-do List project.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/CreamyCakey/Todo-list.git",
      live: "#",
      image: "todolist.png",
    },
    {
      title: "Pokemon App",
      description: "Experience on how to be a Pokemon Trainer.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/CreamyCakey/poke-app.git",
      live: "#",
      image: "poke.png",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div
            className={`w-20 h-1 mx-auto mb-6 ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <p className="max-w-2xl mx-auto text-lg">
            Here are some of my recent projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden ${
                theme === "dark"
                  ? "bg-gray-800"
                  : theme === "beige"
                  ? "bg-beige-200"
                  : "bg-gray-100"
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy" // Added lazy loading for better performance
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === "dark"
                          ? "bg-gray-700"
                          : theme === "beige"
                          ? "bg-beige-300"
                          : "bg-gray-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg ${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : theme === "beige"
                        ? "bg-beige-300 hover:bg-beige-400 text-gray-800"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    }`}
                  >
                    <Github size={18} />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      View Repository
                    </div>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : theme === "beige"
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "bg-blue-500 hover:bg-blue-400 text-white"
                    }`}
                  >
                    <ExternalLink size={18} />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      View Live Demo
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
