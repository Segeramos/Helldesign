import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    description: "A modern portfolio built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "Responsive Design"],
    demoLink: "https://yourportfolio.com",
    codeLink: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Task Manager App",
    image: "/images/taskapp.png",
    description: "A full-stack task management app using MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    demoLink: "https://taskmanager.com",
    codeLink: "https://github.com/yourusername/task-manager"
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">🚀 Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm flex items-center gap-1 hover:underline">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm flex items-center gap-1 hover:underline">
                  Code <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
