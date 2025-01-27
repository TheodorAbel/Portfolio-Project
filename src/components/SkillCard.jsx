import { motion } from 'framer-motion';

function SkillCard({ title, proficiency }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="card"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${proficiency}%` }}
        />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        {proficiency}%
      </span>
    </motion.div>
  );
}

export default SkillCard;