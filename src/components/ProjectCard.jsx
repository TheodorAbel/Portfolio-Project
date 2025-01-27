import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ title, description, image, githubLink, liveLink }) {
  const [likes, setLikes] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setLikes(likes + 1)}
            className="flex items-center space-x-1 text-red-500 hover:text-red-600"
          >
            <FaHeart />
            <span>{likes}</span>
          </button>
        </div>
        
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;