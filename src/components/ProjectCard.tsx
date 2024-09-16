import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubLink, date }) => {
  return (
    <div className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-xl text-amber-200 font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">{date}</span>
        <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition-colors">
          View on GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;