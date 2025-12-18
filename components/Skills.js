import { skills } from '../constants'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-xl">
                      {skill.name === 'Python' ? '🐍' :
                       skill.name === 'Machine Learning' ? '🤖' :
                       skill.name === 'Deep Learning' ? '🧠' :
                       skill.name === 'TensorFlow' ? '📊' :
                       skill.name === 'PyTorch' ? '🔥' :
                       skill.name === 'Data Analysis' ? '📈' :
                       skill.name === 'Computer Vision' ? '👁️' :
                       skill.name === 'SQL' ? '💾' : '⚡'}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-200">{skill.name}</span>
                </div>
                <span className="text-sm font-bold text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

