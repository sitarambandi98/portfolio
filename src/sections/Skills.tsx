import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Video, Sparkles, Palette, Share2, Briefcase, Wrench } from 'lucide-react';

const skillCategories = [
  { name: 'Video Editing', icon: Video, data: skills.videoEditing, color: 'from-red-500 to-pink-500' },
  { name: 'Motion Graphics', icon: Sparkles, data: skills.motionGraphics, color: 'from-purple-500 to-indigo-500' },
  { name: 'Graphic Design', icon: Palette, data: skills.graphicDesign, color: 'from-cyan-500 to-blue-500' },
  { name: 'Social Media', icon: Share2, data: skills.socialMedia, color: 'from-pink-500 to-rose-500' },
  { name: 'Brand Identity', icon: Briefcase, data: skills.brandIdentity, color: 'from-amber-500 to-orange-500' },
  { name: 'Tools', icon: Wrench, data: skills.tools, color: 'from-emerald-500 to-green-500' },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-900">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                </div>
                {category.data.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} color={category.color} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
