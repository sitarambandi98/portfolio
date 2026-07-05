import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Video, Sparkles, Palette, Share2, Briefcase, Wrench } from 'lucide-react';

const skillCategories = [
  { name: 'Video Editing', icon: Video, data: skills.videoEditing },
  { name: 'Motion Graphics', icon: Sparkles, data: skills.motionGraphics },
  { name: 'Graphic Design', icon: Palette, data: skills.graphicDesign },
  { name: 'Social Media', icon: Share2, data: skills.socialMedia },
  { name: 'Brand Identity', icon: Briefcase, data: skills.brandIdentity },
  { name: 'Tools', icon: Wrench, data: skills.tools },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Creative Skills</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my creative expertise across video production, motion graphics, design, and content creation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                </div>
                {category.data.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
