import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { AiFillYoutube } from 'react-icons/ai';
import { profile } from '../data/portfolio';

export default function WorkShowcase() {
  return (
    <section id="work" className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Check My Work</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Watch my latest videos and content on YouTube!
          </p>

          <div className="flex flex-col items-center justify-center">
            <motion.a
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col items-center gap-6 p-12 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <AiFillYoutube className="w-16 h-16 text-white" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  Visit My YouTube Channel
                </h3>
                <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  @Barvlog2285
                  <ExternalLink size={16} />
                </p>
              </div>

              <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300">
                <AiFillYoutube size={20} />
                Watch Now
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
