export default function Home() {
  return (
    <div class="space-y-24">
      
      {/* 1. Hero Introduction */}
      <section class="max-w-2xl space-y-4">
        <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-950 dark:text-zinc-50">
          Hi, I'm a Software Engineer.
        </h1>
        <p class="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I build low-level systems, explore formal code verification, and design robust backend software. 
          Currently focused on ensuring structural correctness, system performance, and analyzing code security.
        </p>
        
        {/* Social / Contact Links */}
        <div class="flex gap-5 pt-2 font-mono text-xs">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">GitHub ↗</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn ↗</a>
          <a href="mailto:your.email@domain.com" class="text-blue-600 dark:text-blue-400 hover:underline">Contact ↗</a>
        </div>
      </section>

      {/* 2. Featured Engineering Projects Section */}
      <section id="projects" class="space-y-6 scroll-mt-16">
        <div class="space-y-1">
          <h2 class="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Featured Engineering Projects</h2>
          <p class="text-sm text-zinc-500">Selected work exploring systems optimization and automation.</p>
        </div>
        
        {/* Project Card Grid Layout */}
        <div class="grid gap-4 sm:grid-cols-2">
          
          {/* Card 1: Storage Project */}
          <div class="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Persistent Storage Engine</h3>
            <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              A transactional data storage system featuring custom write-ahead logging (WAL) and memory-mapped file structures optimized for rapid key-value retrieval.
            </p>
            <div class="flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span class="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">Java</span>
              <span class="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">Systems</span>
            </div>
          </div>

          {/* Card 2: Assistive App */}
          <div class="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 mb-1">ER/SPEAK Interface</h3>
            <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              An assistive communications system designed to interface directly with custom input layouts, mapping optimized data pathways for streamlined accessibility.
            </p>
            <div class="flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span class="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">Python</span>
              <span class="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">Accessibility</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}