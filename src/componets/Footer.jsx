const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Left */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">BELAL KHAN</h2>
          <p className="text-sm max-w-xs mx-auto md:mx-0">
            © {new Date().getFullYear()} All rights reserved. Crafted with ❤️ by Belal Khan.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex justify-center space-x-8 mb-6 md:mb-0">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex justify-center space-x-6 text-gray-400">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1C5.925 1 1 5.925 1 12c0 4.868 3.162 9.007 7.547 10.47.552.1.75-.24.75-.533 0-.263-.01-1.14-.015-2.066-3.07.667-3.72-1.48-3.72-1.48-.5-1.273-1.22-1.613-1.22-1.613-.998-.682.076-.668.076-.668 1.104.077 1.683 1.14 1.683 1.14.98 1.677 2.574 1.193 3.2.913.1-.71.385-1.194.7-1.47-2.45-.28-5.026-1.226-5.026-5.46 0-1.206.432-2.193 1.14-2.967-.115-.28-.496-1.41.11-2.94 0 0 .927-.297 3.04 1.13a10.46 10.46 0 012.767-.372c.94.004 1.89.127 2.766.373 2.11-1.43 3.035-1.13 3.035-1.13.61 1.53.23 2.66.115 2.94.71.773 1.14 1.76 1.14 2.967 0 4.244-2.58 5.176-5.04 5.448.395.34.74 1.008.74 2.032 0 1.467-.014 2.652-.014 3.013 0 .297.19.638.76.53C19.84 21.01 23 16.863 23 12c0-6.075-4.925-11-11-11z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.9 1.1 4.52 4.52 0 00-7.7 4.13A12.86 12.86 0 013 4s-4 9 5 13a13 13 0 01-8 2c11 7 24 0 24-14.5a9.99 9.99 0 00-.08-1.48A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
