import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-300">
        Get in Touch
      </h1>
      <div className="bg-gray-900 shadow-lg rounded-xl p-8">
        <div className="space-y-6">
          <div className="flex items-center">
            <i className="fas fa-envelope text-green-500 mr-4 text-2xl"></i>
            <a
              href="mailto:nahinsikdar123@gmail.com"
              className="text-lg text-white  hover:text-teal-300 transition duration-200"
            >
              nahinsikdar123@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <i className="fas fa-location-dot text-teal-400 mr-4 text-2xl"></i>
            <span className="text-lg text-white">Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone-alt text-teal-400 mr-4 text-2xl"></i>
            <a
              href="tel:+8801521781168"
              className="text-lg text-white  hover:text-teal-300 transition duration-200"
            >
              +880 1521781168
            </a>
          </div>
          <div className="flex items-center">
            <i className="fab fa-linkedin text-blue-500 mr-4 text-2xl"></i>
            <a
              href="https://www.linkedin.com/in/nahin-intesher-903724253/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white  hover:text-teal-300 transition duration-200"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center">
            <i className="fab fa-github mr-4 text-2xl"></i>
            <a
              href="https://github.com/Assassin318554"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white  hover:text-teal-300 transition duration-200"
            >
              GitHub Profile
            </a>
          </div>
          <div className="flex items-center">
            <i className="fab fa-facebook text-blue-500 mr-4 text-2xl"></i>
            <a
              href="https://www.facebook.com/naahin.sikdar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white  hover:text-teal-300 transition duration-200"
            >
              Facebook Profile
            </a>
          </div>
          <div className="flex items-center">
            <i className="fab fa-youtube text-red-600 mr-4 text-2xl"></i>
            <a
              href="https://www.youtube.com/@nahinintesher1458"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white  hover:text-teal-300 transition duration-200"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
