// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* Page Title Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
          About Me
        </h1>
        <p className="text-sm text-zinc-500 font-mono">~/biography</p>
      </div>

      {/* Main Biography Content Block */}
      <article className="text-sm text-zinc-600 dark:text-zinc-400 space-y-6 leading-relaxed">
        <p>
          I am a Computer Science student driven by a core interest in systems-level architecture, 
          software reliability, and code defense. My work often sits at the intersection of backend engineering 
          and structural integrity—ensuring that systems are not only performant but mathematically sound and resilient.
        </p>
        <p>
          My technical focus heavily emphasizes formal code verification, where I utilize rigor and automated logic platforms 
          to mathematically prove algorithm compliance and eliminate critical bugs before deployment pipelines execute. 
          Additionally, I engage deeply in code auditing, low-level execution mapping, and parsing architectural attack vectors.
        </p>
        <p>
          Beyond core engineering layers, I actively volunteer within collegiate cybersecurity spaces, coordinating and 
          competing in capture-the-flag events. I also enjoy digging into custom simulation components, mechanics engineering, 
          and asset modding for complex sandbox game environments.
        </p>
      </article>

      {/* Core Technical Core competencies List Grid */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-900">
        <h2 className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-mono">
          [core_competencies]
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
          <div>• Systems Software Design</div>
          <div>• Formal Code Verification</div>
          <div>• Software Security Auditing</div>
          <div>• Full-Stack Architecture</div>
        </div>
      </section>

    </div>
  );
}