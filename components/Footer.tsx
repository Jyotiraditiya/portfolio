import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 md:py-6 mt-8 md:mt-12">
      <div className="container mx-auto text-center px-4">
        <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} Jyotiraditya Misra. All rights reserved.</p>
        <p className="mt-2 text-xs md:text-sm">Follow me on</p>
        <div className="flex justify-center space-x-4 md:space-x-6 mt-3 text-xs md:text-sm">
    
          <a
            href="https://github.com/Jyotiraditiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jyotiraditiya-misra-523699280"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;