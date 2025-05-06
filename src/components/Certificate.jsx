import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Certificate = ({ theme }) => {
  const [isMounted, setIsMounted] = useState(false);
  const certificates = [
    {
        type: "certification",
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        date: "April 2025",
        description: "Completed comprehensive training in HTML and CSS.",
        skills: ["HTML", "CSS", "Web Development"],
        image: "cert2.png",
        website: "https://www.freecodecamp.org/certification/dabidd/responsive-web-design"
      },
      {
        type: "certification",
        title: "Legacy Javascript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "May 2025",
        description: "Completed training in JavaScript algorithms and data structures.",
        skills: ["JavaScript",  "HTML", "CSS", "Web Development"],
        image: "cert1.png",
        website: "https://www.freecodecamp.org/certification/dabidd/javascript-algorithms-and-data-structures"
      },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Certification</h2>
      <div
        className={`w-20 h-1 mx-auto mb-6 ${
          theme === "dark" ? "bg-blue-500" : "bg-blue-600"
        } transition-all duration-300 hover:w-24 hover:shadow-[0_0_15px_3px_rgba(59,130,246,0.6)]`}
      ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`rounded-lg overflow-hidden shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <a 
                href={cert.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } transition-colors duration-300`}
              >
                View Certificate
              </a>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.issuer} • {cert.date}
                </p>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 text-xs rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;