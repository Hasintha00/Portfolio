import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Proficient in modern web technologies and frameworks'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, efficient, and scalable applications'
    }
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Software Engineering Student & Developer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Hasintha Meegahawala, a dedicated Software Engineering undergraduate at 
              Sri Lanka Institute of Information Technology (SLIIT) with a passion for 
              creating innovative web applications. Currently pursuing my BSc in Software 
              Engineering, I combine academic knowledge with practical experience.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in full-stack development using modern technologies like React, 
              Node.js, and Python. My academic journey at SLIIT has equipped me with strong 
              fundamentals in software engineering principles, while my hands-on projects 
              demonstrate my ability to build scalable, user-friendly applications.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open source 
              projects, and constantly learning to stay updated with the latest industry trends. 
              I'm passionate about problem-solving and creating digital solutions that make a 
              positive impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                SLIIT Student
              </span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                Continuous Learner
              </span>
              <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                Full Stack Developer
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/30 p-6 rounded-lg border border-slate-600/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
