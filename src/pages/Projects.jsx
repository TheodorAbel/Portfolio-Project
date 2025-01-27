import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [loading] = useState(false);

  // Sample project data
  const projects = [
    {
      id: 3,
      name: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API. Features include location search and unit conversion.",
      image: "src/assets/weather.jpg",
      html_url: "https://github.com/TheodorAbel/Javascript-projects",
      homepage: "https://weather-demo.com"
    },
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      image: "src/assets/e-commerce.jpg",
      html_url: "https://github.com/yourusername/ecommerce",
      homepage: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "src/assets/task.jpg",
      html_url: "https://github.com/yourusername/task-manager",
      homepage: "https://taskmanager-demo.com"
    },
   
    {
      id: 4,
      name: "Social Media Dashboard",
      description: "A social media analytics dashboard with real-time data visualization, user engagement metrics, and customizable reporting.",
      image: "src/assets/social.jpg",
      html_url: "https://github.com/yourusername/social-dashboard",
      homepage: "https://social-demo.com"
    },
    {
      id: 5,
      name: "Recipe Finder",
      description: "A recipe search application with filtering options, saved favorites, and meal planning features. Integrates with a recipe API.",
      image: "src/assets/recipe.jpg",
      html_url: "https://github.com/TheodorAbel/React-projects",
      homepage: "https://recipe-demo.com"
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "A fitness tracking application with workout logging, progress visualization, and goal setting features.",
      image: "src/assets/fitness.jpg",
      html_url: "https://github.com/yourusername/fitness-tracker",
      homepage: "https://fitness-demo.com"
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.description}
            image={project.image}
            githubLink={project.html_url}
            liveLink={project.homepage}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;