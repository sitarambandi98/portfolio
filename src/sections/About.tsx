import { motion } from 'framer-motion';
import { Video, Sparkles, Palette, Users } from 'lucide-react';
import { profile } from '../data/portfolio';

const highlights = [
  {
    icon: Video,
    title: "Video Production",
    description: "Creating professional videos from concept to final edit, with attention to storytelling and visual impact.",
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description: "Bringing static designs to life with captivating animations and motion graphics that engage audiences.",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Crafting cohesive visual identities that communicate brand values and resonate with target audiences.",
  },
  {
    icon: Users,
    title: "Content Strategy",
    description: "Developing content strategies that align with brand goals and maximize engagement across platforms.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
