import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-12 md:py-20" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div
            className={`w-20 h-1 mx-auto mb-6 ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <p className="max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-6 rounded-lg ${
              theme === "dark"
                ? "bg-gray-800"
                : theme === "beige"
                ? "bg-beige-200"
                : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-700 text-blue-400"
                      : theme === "beige"
                      ? "bg-beige-300 text-blue-600"
                      : "bg-gray-200 text-blue-600"
                  }`}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>davelamoste0@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-700 text-blue-400"
                      : theme === "beige"
                      ? "bg-beige-300 text-blue-600"
                      : "bg-gray-200 text-blue-600"
                  }`}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p>+63 993 400 1447</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-700 text-blue-400"
                      : theme === "beige"
                      ? "bg-beige-300 text-blue-600"
                      : "bg-gray-200 text-blue-600"
                  }`}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p>Zamboanga City, Philippines</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-6 rounded-lg ${
              theme === "dark"
                ? "bg-gray-800"
                : theme === "beige"
                ? "bg-beige-200"
                : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-gray-700 focus:ring-blue-500"
                      : theme === "beige"
                      ? "bg-beige-100 focus:ring-blue-500"
                      : "bg-white focus:ring-blue-500"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-gray-700 focus:ring-blue-500"
                      : theme === "beige"
                      ? "bg-beige-100 focus:ring-blue-500"
                      : "bg-white focus:ring-blue-500"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-gray-700 focus:ring-blue-500"
                      : theme === "beige"
                      ? "bg-beige-100 focus:ring-blue-500"
                      : "bg-white focus:ring-blue-500"
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium ${
                  theme === "dark"
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : theme === "beige"
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : "bg-blue-500 hover:bg-blue-400 text-white"
                }`}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;