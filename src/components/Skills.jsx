import skillCategories from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-cyan-400">Skills</h2>
        <p className="text-center text-gray-400 mt-6">
          Technologies, analytical capabilities, and tools I use to build practical solutions.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800/80 border border-slate-700 p-7 rounded-2xl hover:border-cyan-500/60 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-5">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-700 px-4 py-2 rounded-full text-sm text-gray-200 hover:bg-cyan-500 hover:text-white transition"
                  >
                    {skill}
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

export default Skills;
