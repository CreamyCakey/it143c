import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Blog = ({ theme }) => {
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState({});
  
  const blogPosts = [
    {
      id: 1,
      title: "The Tour Started",
      excerpt: "The History of the Philippines.",
      date: "April 7, 2025",
      day: "Day 1",
      readTime: "5 min read",
      location: "Manila, Philippines",
      image: "day1/day1.1.jpg",
    },
    {
      id: 2,
      title: "Subic Bay Adventure",
      excerpt: "Exploring the historic naval base and beautiful coastal areas.",
      date: "April 8, 2025",
      day: "Day 2",
      readTime: "7 min read",
      location: "Subic Bay, Philippines",
      image: "day2/day2.jpg",
    },
    {
      id: 3,
      title: "Cultural Museum Tour",
      excerpt: "Discovering the rich history and art of the Philippines.",
      date: "April 9, 2025",
      day: "Day 3",
      readTime: "6 min read",
      location: "Manila, Philippines",
      image: "day3/day3.4.jpg",
    },
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: false }));
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Tour</h2>
          <div
            className={`w-20 h-1 mx-auto mb-6 ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <p className="max-w-2xl mx-auto text-lg">
            My journey throughout in Educational Tour
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/travel-day/${post.id}`)}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-750"
                  : theme === "beige"
                  ? "bg-beige-100 hover:bg-beige-200"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`/images/${post.image}`}
                  alt={post.title}
                  className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                    !loadedImages[post.id] ? 'hidden' : ''
                  }`}
                  onLoad={() => handleImageLoad(post.id)}
                  onError={() => handleImageError(post.id)}
                />
                {!loadedImages[post.id] && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span>Loading image...</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      theme === "dark"
                        ? "bg-blue-600 text-white"
                        : theme === "beige"
                        ? "bg-yellow-400 text-gray-800"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {post.day}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <div className="flex items-center gap-2 text-sm mb-3">
                  <MapPin size={14} className="opacity-70" />
                  <span>{post.location}</span>
                </div>
                <p className="mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="opacity-70" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="opacity-70" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/travel-full-journal')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : theme === "beige"
                ? "bg-yellow-300 hover:bg-yellow-400 text-gray-800"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            View Full Travel Journal
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;