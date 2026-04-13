'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon, ClockIcon, CheckCircleIcon, PlayIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  tags?: string[];
  status?: 'completed' | 'in-progress' | 'planning';
  featured?: boolean;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  link, 
  github, 
  image, 
  tags = [], 
  status = 'completed', 
  featured = false, 
  index 
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { enableAnimations } = useApp();

  const statusConfig = {
    completed: { icon: CheckCircleIcon, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/20', text: 'Completed' },
    'in-progress': { icon: ClockIcon, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/20', text: 'In Progress' },
    planning: { icon: PlayIcon, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/20', text: 'Planning' },
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const expandVariants = {
    collapsed: { height: 'auto' },
    expanded: { height: 'auto' },
  };

  return (
    <motion.div
      variants={enableAnimations ? cardVariants : undefined}
      initial={enableAnimations ? "hidden" : undefined}
      animate={enableAnimations ? "visible" : undefined}
      whileHover={enableAnimations ? { scale: 1.02 } : undefined}
      className={`group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ${
        featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center space-x-1 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            <StarIcon className="w-3 h-3" />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Project Image */}
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${currentStatus.bg} ${currentStatus.color}`}>
            <StatusIcon className="w-3 h-3" />
            <span>{currentStatus.text}</span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, isExpanded ? tags.length : 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full"
              >
                {tag}
              </span>
            ))}
            {!isExpanded && tags.length > 3 && (
              <button
                onClick={() => setIsExpanded(true)}
                className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                +{tags.length - 3}
              </button>
            )}
          </div>
        )}

        {/* Description */}
        <motion.div
          variants={enableAnimations ? expandVariants : undefined}
          animate={isExpanded ? "expanded" : "collapsed"}
          className="overflow-hidden"
        >
          <p className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 ${
            !isExpanded ? 'line-clamp-3' : ''
          }`}>
            {description}
          </p>
        </motion.div>

        {/* Expand/Collapse Button */}
        {description.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline mb-4"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <CodeBracketIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {!link && !github && status === 'in-progress' && (
            <div className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 text-sm font-medium rounded-lg">
              <ClockIcon className="w-4 h-4" />
              <span>Under Development</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

