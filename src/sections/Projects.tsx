import { motion } from 'framer-motion';
import { ExternalLink, Play, Palette, Megaphone, GraduationCap, Dumbbell, Camera } from 'lucide-react';
import { projects } from '../data/portfolio';

const categoryIcons: Record<string, typeof Play> = {
  'YouTube Content': Play,
  'Social Media': Megaphone,
  'Brand Identity': Palette,
  'Educational Content': GraduationCap,
  'Advertising': Camera,
  'Content Creation': Dumbbell,
};

const categoryColors: Record<string, string> = {
  'YouTube Content': 'from-red-500 to-red-600',
  'Social Media': 'from-pink-500 to-pink-600',
  'Brand Identity': 'from-purple-500 to-purple-600',
  'Educational Content': 'from-blue-500 to-blue-600',
  'Advertising': 'from-orange-500 to-orange-600',
  'Content Creation': 'from-green-500 to-green-600',
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A showcase of my recent creative work across video production, motion graphics, and brand design.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category] || Play;
              const colorClass = categoryColors[project.category] || 'from-purple-500 to-pink-500';
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${colorClass}`} />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <CategoryIcon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className={`w-2 h-2 bg-gradient-to-r ${colorClass} rounded-full`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-medium rounded-lg transition-all duration-300">
                        <ExternalLink size={16} />
                        View Case Study
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
