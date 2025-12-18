import { personalInfo } from '../constants'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my background and passion for Python full stack development
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about building scalable, secure, and user-friendly web applications using Python on the backend
              and modern JavaScript frameworks on the frontend. I enjoy solving complex problems and turning ideas into
              production-ready solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">What I Do</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Designing and building RESTful APIs using Python frameworks (e.g., Django, Flask, FastAPI)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Developing responsive frontend interfaces with modern JavaScript frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Working with relational and NoSQL databases for efficient data storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Implementing authentication, authorization, and best practices for backend security</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

