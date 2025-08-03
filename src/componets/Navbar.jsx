import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import Speech from "speak-tts";

const Navbar = () => {
  const speech = new Speech();

  useEffect(() => {
    if (speech.hasBrowserSupport()) {
      speech.init({
        volume: 1,
        lang: "en-US",
        rate: 1,
        pitch: 1,
        voice: "Google US English", // পরিবর্তন করা যাবে
      });
    }
  }, []);

  const speakText = (text) => {
    speech.speak({ text });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-900 sticky top-0 z-50">
      {/* Left: Name */}
      <div className="text-2xl font-bold text-gray-800 dark:text-white">BELAL KHAN</div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex gap-8 text-lg text-gray-700 dark:text-gray-300">
        <li>
          <Link
            smooth
            to="/#home"
            onClick={() => speakText("Home")}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/#about"
            onClick={() => speakText("About")}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/#skills"
            onClick={() => speakText("Skills")}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/#projects"
            onClick={() => speakText("Projects")}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/#contact"
            onClick={() => speakText("Contact")}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Right: Resume Button */}
      <div>
        <a
          href="/বেলাল খান cv.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
