import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A comprehensive web application for managing student records, built with React and Node.js. Features include student registration, grade management, and administrative dashboard.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hasintha00',
      featured: true
    },
    {
      title: 'E-Commerce Web Application',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration using modern web technologies.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hasintha00',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, project tracking, and team collaboration features for academic and professional use.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'HTML/CSS', 'Local Storage', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hasintha00',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current weather conditions and forecasts using OpenWeatherMap API with clean, modern UI design.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'HTML/CSS', 'Weather API', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hasintha00',
      featured: false
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and professional design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hasintha00',
      featured: true
    },
    {
      title: 'Library Management System',
      description: 'A desktop application for managing library operations including book inventory, member registration, and borrowing system built with Java.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop',
      technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hasintha00',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-slate-700/30 rounded-lg overflow-hidden border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                      aria-label="View live project"
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-600/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm"
                  >
                    <Github size={16} className="mr-1" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ExternalLink size={20} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
