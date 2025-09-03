// components/SettingsPanel.tsx
"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { themes } from '../config/themes';
import { XMarkIcon, CogIcon, PaintBrushIcon, SquaresPlusIcon, SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    currentTheme,
    setCurrentTheme,
    isDarkMode,
    toggleDarkMode,
    layoutMode,
    setLayoutMode,
    enableAnimations,
    setEnableAnimations,
    language,
    setLanguage,
  } = useApp();

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-6 right-6 z-50 p-3 bg-purple-600 dark:bg-purple-700 text-white rounded-full shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        aria-label="Open settings"
      >
        <CogIcon className="w-6 h-6" />
      </button>

      {/* Settings Panel */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={togglePanel}
        />
        
        {/* Panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Customize</h2>
              <button
                onClick={togglePanel}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Close settings"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Theme Colors */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <PaintBrushIcon className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Theme Color</h3>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {Object.entries(themes).map(([key, theme]) => (
                    <button
                      key={key}
                      onClick={() => setCurrentTheme(key)}
                      className={`relative w-12 h-12 rounded-lg border-2 transition-all duration-200 ${
                        currentTheme === key 
                          ? 'border-gray-900 dark:border-white scale-110' 
                          : 'border-gray-300 dark:border-gray-600 hover:scale-105'
                      }`}
                      data-theme-color={theme.colors.primary}
                      aria-label={`Select ${theme.name} theme`}
                      title={`Select ${theme.name} theme`}
                    >
                      {currentTheme === key && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dark Mode */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-yellow-500">
                      {isDarkMode ? '🌙' : '☀️'}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Dark Mode</h3>
                  </div>
                  <button
                    onClick={toggleDarkMode}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                      isDarkMode ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                    aria-label={`${isDarkMode ? 'Disable' : 'Enable'} dark mode`}
                    title={`${isDarkMode ? 'Disable' : 'Enable'} dark mode`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isDarkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Layout Spacing */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <SquaresPlusIcon className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Layout Spacing</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { key: 'compact', label: 'Compact', description: 'Dense layout with minimal spacing' },
                    { key: 'comfortable', label: 'Comfortable', description: 'Balanced spacing for easy reading' },
                    { key: 'spacious', label: 'Spacious', description: 'Generous spacing for better focus' },
                  ].map((option) => (
                    <button
                      key={option.key}
                      onClick={() => setLayoutMode(option.key as 'compact' | 'comfortable' | 'spacious')}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                        layoutMode === option.key
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="font-medium text-gray-900 dark:text-white">{option.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{option.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Animations */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <SparklesIcon className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Animations</h3>
                  </div>
                  <button
                    onClick={() => setEnableAnimations(!enableAnimations)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                      enableAnimations ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                    aria-label={`${enableAnimations ? 'Disable' : 'Enable'} animations`}
                    title={`${enableAnimations ? 'Disable' : 'Enable'} animations`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        enableAnimations ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {enableAnimations ? 'Smooth animations enabled' : 'Reduced motion for accessibility'}
                </p>
              </div>

              {/* Language (Future Enhancement) */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <GlobeAltIcon className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Language</h3>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-label="Select language"
                  title="Select language"
                >
                  <option value="en">English</option>
                  <option value="es">Español (Coming Soon)</option>
                  <option value="fr">Français (Coming Soon)</option>
                  <option value="de">Deutsch (Coming Soon)</option>
                </select>
              </div>

              {/* Reset Settings */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setCurrentTheme('purple');
                    setLayoutMode('comfortable');
                    setEnableAnimations(true);
                    setLanguage('en');
                    if (isDarkMode) toggleDarkMode();
                  }}
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
