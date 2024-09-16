const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; 2024 Nahin Intesher. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/nahin-intesher-903724253/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Assassin318554"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/naahin.sikdar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
