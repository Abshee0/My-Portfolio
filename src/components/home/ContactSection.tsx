import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, MessageSquare, Twitter, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Send the email using EmailJS
    try {
      const response = await emailjs.send(
        'service_v3d1efd',       
        'template_v7nuwsq',      // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'jgh9cGUqAp8XuAQuI'          // Replace with your EmailJS user ID
      );
  
      console.log('Email sent successfully:', response);
      setDialogMessage('Your message has been sent! We will contact you in no time.');
      // Reset the form or show a success message
    } catch (error) {
      console.error('Failed to send email:', error);
      setDialogMessage('Please try again later.');
      // Optionally, handle the error (e.g., show an error message)
    }

    setDialogVisible(true);
    setFormData({ name: '', email: '', message: '' });

  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  const socialLinks = [
    { icon: <Mail className="w-6 h-6" />, href: 'mailto:abshee3280@gmail.com', label: 'Email' },
    { icon: <Instagram className="w-6 h-6" />, href: 'https://instagram.com/_abshee._', label: 'Instagram' },
    { icon: <Facebook className="w-6 h-6" />, href: 'https://facebook.com/Absheee', label: 'Facebook' },
    { icon: <Twitter className="w-6 h-6" />, href: 'https://twitter.com/abdhul_rasheedh', label: 'X (Twitter)' },
    { icon: <Phone className="w-6 h-6" />, href: 'https://wa.me/7226953', label: 'WhatsApp' },
  ];

  return (
    <section className="min-h-screen py-20 bg-black/50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reach out through any of these platforms or send me a direct message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-purple-900/20 backdrop-blur-lg p-4 rounded-xl hover:bg-purple-900/30 transition-all duration-300 group"
                >
                  <div className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-purple-900/10 backdrop-blur-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-purple-900/20 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-purple-900/20 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-purple-900/20 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Dialog Box */}
      {dialogVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-purple-900/10 backdrop-blur-lg rounded-2xl p-8"
        >
          
          <div className="p-6 w-80">
            <h3 className="text-lg font-semibold text-white text-center mb-4">{dialogMessage}</h3>
            <button
              onClick={closeDialog}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
            >
              Thank you
            </button>
          </div>
        
        </motion.div>
        </div>
      )}
    </section>
  );
}