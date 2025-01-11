import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Home, Briefcase, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-purple-500" />
            <span className="text-white font-bold text-xl">Portfolio</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 ${
                isActive('/') ? 'text-purple-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/projects"
              className={`flex items-center space-x-1 ${
                isActive('/projects') ? 'text-purple-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center space-x-1 ${
                isActive('/about') ? 'text-purple-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md ${
                isActive('/') ? 'text-purple-500' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`block px-3 py-2 rounded-md ${
                isActive('/projects') ? 'text-purple-500' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md ${
                isActive('/about') ? 'text-purple-500' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}