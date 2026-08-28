import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-cyan-400">My Projects</h2>
        <p className="text-center text-gray-400 mt-4">
          Data, AI, automation, and web applications built from my project experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative bg-slate-800 rounded-2xl p-6 border transition duration-300 hover:-translate-y-2 hover:border-cyan-500/70 ${
                project.featured ? "border-cyan-500/50 lg:col-span-2" : "border-slate-700"
              }`}
            >
              {project.featured && (
                <span className="inline-block mb-4 bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Featured Project
                </span>
              )}

              <h3 className="text-2xl font-bold leading-snug">{project.title}</h3>

              <p className="text-gray-300 mt-4 leading-7">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((item) => (
                  <span key={item} className="bg-cyan-600/80 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
