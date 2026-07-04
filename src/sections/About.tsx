import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Users } from 'lucide-react';
import { profile } from '../data/portfolio';

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building complete web applications from frontend to backend with modern frameworks and best practices.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient database schemas and queries for optimal performance and data integrity.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Deploying and managing applications on Azure cloud with automated CI/CD pipelines.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in agile teams with code reviews, documentation, and knowledge sharing.",
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
                I have hands-on experience with enterprise application development, including timesheet management systems, authentication platforms, and role-based access control systems. I'm passionate about writing clean, maintainable code and building solutions that make a real impact.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy staying up-to-date with the latest technologies and contributing to open-source projects. I'm always looking for new challenges and opportunities to grow as a developer.
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
