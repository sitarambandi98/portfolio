import { motion } from 'framer-motion';
import { Video, Sparkles, Palette, Share2 } from 'lucide-react';
import { profile } from '../data/portfolio';

const highlights = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing using Premiere Pro, After Effects, and CapCut to create engaging content.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Design & 3D",
    description: "Creating stunning visuals with Photoshop and 3DS Max for brand identity and logo design.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Sparkles,
    title: "Specializations",
    description: "Expert in transitions, effects, and motion graphics that captivate audiences.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Creating optimized content for Instagram Reels, YouTube Shorts, LinkedIn, Twitter/X, and Facebook.",
    color: "from-pink-500 to-rose-500",
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
                I specialize in creating high-quality video content and visual designs for social media platforms. From engaging YouTube videos to eye-catching Instagram Reels, I bring creativity and technical expertise to every project.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My focus is on delivering content that resonates with audiences and drives engagement. Whether it's transitions, effects, or complete brand visuals, I ensure every piece meets the highest quality standards.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 text-red-700 dark:text-red-300 rounded-full font-medium text-sm">
                  Video Editing
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 text-purple-700 dark:text-purple-300 rounded-full font-medium text-sm">
                  Design & 3D
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-900/50 text-pink-700 dark:text-pink-300 rounded-full font-medium text-sm">
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
