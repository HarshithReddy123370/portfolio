import { experiences } from '../constants'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and key milestones
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-8 md:flex md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="card">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                      <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-purple-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-300 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

