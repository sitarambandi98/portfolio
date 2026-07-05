import { motion } from 'framer-motion';
import { Video, Sparkles, Palette, TrendingUp } from 'lucide-react';
import { profile } from '../data/portfolio';

const highlights = [
  {
    icon: Video,
    title: "Video Production",
    description: "Creating professional videos from concept to final edit, with attention to storytelling and visual impact that captivates audiences.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description: "Bringing static designs to life with captivating animations and motion graphics that engage and delight viewers.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Crafting cohesive visual identities that communicate brand values and resonate with target audiences.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    description: "Developing content strategies that align with brand goals and maximize engagement across all platforms.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {profile.introduction}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in creating high-quality video content and visual designs that captivate audiences. From eye-catching motion graphics to cohesive brand identities, I bring creativity and technical expertise to every project.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether it's crafting compelling YouTube content, designing social media campaigns, or building brand identities, I focus on delivering work that drives results and exceeds expectations.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 rounded-full font-medium text-sm">
                  Video Editing
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm">
                  Motion Graphics
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 rounded-full font-medium text-sm">
                  Brand Design
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 text-orange-700 dark:text-orange-300 rounded-full font-medium text-sm">
                  Social Media
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
