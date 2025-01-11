import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'Expert in React, TypeScript, and modern CSS frameworks',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Node.js, Express, and database design specialist',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'API Development',
    description: 'RESTful and GraphQL API architecture and implementation',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Cloud Architecture',
    description: 'AWS and Azure cloud infrastructure design',
  },
];

export default function AboutSection() {
  return (
    <section className="min-h-screen py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Column 1: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Abshee
            </h1>
            <div className="prose prose-invert">
              <p className="text-xl text-gray-300 leading-relaxed">
                A passionate Full Stack Developer with 5+ years of experience in building
                scalable web applications and microservices. Specialized in React, Node.js,
                and cloud architecture.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                I've successfully delivered projects for startups and enterprises alike,
                focusing on clean code, performance, and user experience. When I'm not
                coding, I contribute to open-source projects and mentor aspiring developers.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1653395108060-e0236d7a9e58?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-900/20 backdrop-blur-lg rounded-xl p-6 hover:bg-purple-900/30 transition-colors duration-300"
            >
              <div className="text-purple-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}