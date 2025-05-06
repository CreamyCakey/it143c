import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Palette } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
    // Dynamic route for travel day
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : theme === "beige"
          ? "bg-beige-200 border-beige-300"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <span className="text-xl font-bold flex items-center gap-2">
              {theme === "dark" ? "🌙" : theme === "beige" ? "🎨" : "☀️"}{" "}
              <img
                img src="dabid-logo.png" // Replace with your image path
                alt="Profile"
                className="logo h-8 w-9 squre-full"
              />
            </span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? theme === "dark"
                          ? "bg-gray-700 text-white"
                          : theme === "beige"
                          ? "bg-beige-300 text-gray-800"
                          : "bg-gray-200 text-gray-800"
                        : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : theme === "beige"
                        ? "text-gray-700 hover:bg-beige-300 hover:text-gray-800"
                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full focus:outline-none"
              >
                {theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : theme === "beige" ? (
                  <Palette className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full mr-2 focus:outline-none"
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : theme === "beige" ? (
                <Palette className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? theme === "dark"
                        ? "bg-gray-700 text-white"
                        : theme === "beige"
                        ? "bg-beige-300 text-gray-800"
                        : "bg-gray-200 text-gray-800"
                      : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                      : theme === "beige"
                      ? "text-gray-700 hover:bg-beige-300 hover:text-gray-800"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
