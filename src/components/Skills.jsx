import { motion } from "framer-motion";
import { Code, Database, Palette, Smartphone } from "lucide-react";

const Skills = ({ theme }) => {
  const skills = [
    {
      category: "Frontend",
      icon: <Palette size={24} />,
      items: [
        { name: "HTML/CSS", level: 60 },
        { name: "JavaScript", level: 55 },
        { name: "React", level: 40 },
      ],
    },
    {
      category: "Backend",
      icon: <Database size={24} />,
      items: [
        { name: "Node.js", level: 65 },
        { name: "Python", level: 68 },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div
            className={`w-20 h-1 mx-auto mb-6 ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <p className="max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I've been working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                theme === "dark"
                  ? "bg-gray-800"
                  : theme === "beige"
                  ? "bg-beige-200"
                  : "bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-700 text-blue-400"
                      : theme === "beige"
                      ? "bg-beige-300 text-blue-600"
                      : "bg-gray-200 text-blue-600"
                  }`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`h-full rounded-full ${
                          theme === "dark" ? "bg-blue-500" : "bg-blue-600"
                        }`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;