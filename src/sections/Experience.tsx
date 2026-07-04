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
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            My professional journey building enterprise applications and solving complex technical challenges.
          </p>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform md:-translate-x-px" />

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
                      <div className="card p-6 md:ml-8 text-left">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                          <Calendar size={14} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-4">
                          <Briefcase size={14} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded"
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

                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 mt-8 border-4 border-white dark:border-gray-900" />

                  <div className="flex-1">
                    {index % 2 !== 0 ? (
                      <div className="card p-6 md:mr-8 text-left">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                          <Calendar size={14} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-4">
                          <Briefcase size={14} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="md:hidden card p-6 text-left">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                          <Calendar size={14} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-4">
                          <Briefcase size={14} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded"
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
