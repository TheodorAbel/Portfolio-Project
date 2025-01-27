import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white dark:bg-primary shadow-inner mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()}Abel Theodor. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/TheodorAbel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abel-tewodros-213a64342/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/AbelaAbel81301?t=IEAdhSKwH4fLyu8Si-guZA&s=35"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;