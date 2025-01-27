import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1}}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="src/assets/profile.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            I am a third-year Information Science student at Addis Ababa University, passionate about leveraging technology to solve real-world challenges. I am currently seeking my first internship opportunity, where I can apply my skills in coding and information systems while gaining hands-on experience in a professional environment.Beyond my academic pursuits, I am also a forex trader, focusing on gold trading, which has sharpened my analytical thinking, decision-making, and risk management skills.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
            When I’m not coding, I enjoy playing basketball, socializing, and playing chess, which enhance my teamwork, interpersonal skills, and strategic thinking. My diverse interests and dedication to growth reflect my eagerness to contribute meaningfully to any project or team.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;