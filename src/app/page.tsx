// src/app/page.tsx
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-24">
      
      {/* Hero Section */}
      <section className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-950 dark:text-zinc-50">
          Hey! I'm Gul.
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I'm a Software Developer specializing in back-end Java development, Databases, and a particular interest in cybersecurity and software optimization. I am 
          currently a BSc Computer Science student @ The University of Southampton. In my free time, I enjoy going on walks, singing, hanging out with friends over a cup of tea, and gaming!
        </p>
        <div className="flex gap-5 pt-2 font-mono text-xs">
          <a href="https://github.com/GulMuhammad-CS" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/gul-muhammad-my/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn ↗</a>
        </div>
      </section>

      {/* Featured Projects Grid Section */}
      <section id="projects" className="space-y-6 scroll-mt-16">
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Featured Engineering Projects</h2>
          <p className="text-sm text-zinc-500">Selected work exploring systems optimization and automation.</p>
        </div>
        
        {/* This mapping block loops through your data and mounts the cards dynamically */}
        <div className="grid gap-4 sm:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}