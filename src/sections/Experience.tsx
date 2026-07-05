import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            My professional journey crafting visual stories and creative solutions for brands worldwide.
          </p>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-px" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 ? (
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 md:ml-12 text-left">
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                          <Calendar size={14} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 mb-4">
                          <Briefcase size={14} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 mt-8 border-4 border-white dark:border-gray-900 shadow-lg" />

                  <div className="flex-1">
                    {index % 2 !== 0 ? (
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 md:mr-12 text-left">
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                          <Calendar size={14} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 mb-4">
                          <Briefcase size={14} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="md:hidden bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-left">
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                          <Calendar size={14} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 mb-4">
                          <Briefcase size={14} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
