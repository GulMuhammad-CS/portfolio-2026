// src/components/ProjectCard.tsx
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const targetUrl = project.githubUrl || project.liveUrl || "#";

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm flex flex-col justify-between group relative">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
            <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </a>
          </h3>
          <span className="text-zinc-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs font-mono">↗</span>
        </div>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 relative z-10">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 font-mono text-[10px] relative z-10">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">{tech}</span>
        ))}
      </div>
    </div>
  );
}