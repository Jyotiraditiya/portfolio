// context/AppContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { themes, Theme } from '../config/themes';
import { siteConfig, SiteConfig } from '../config/site';

interface AppContextType {
  // Theme management
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  theme: Theme;
  
  // Configuration management
  config: SiteConfig;
  updateConfig: (updates: Partial<SiteConfig>) => void;
  
  // Layout preferences
  layoutMode: 'compact' | 'comfortable' | 'spacious';
  setLayoutMode: (mode: 'compact' | 'comfortable' | 'spacious') => void;
  
  // Animation preferences
  enableAnimations: boolean;
  setEnableAnimations: (enabled: boolean) => void;
  
  // Language support (future enhancement)
  language: string;
  setLanguage: (lang: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  // Theme state
  const [currentTheme, setCurrentTheme] = useState('purple');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Configuration state
  const [config, setConfig] = useState<SiteConfig>(siteConfig);
  
  // Layout preferences
  const [layoutMode, setLayoutMode] = useState<'compact' | 'comfortable' | 'spacious'>('comfortable');
  
  // Animation preferences
  const [enableAnimations, setEnableAnimations] = useState(true);
  
  // Language support
  const [language, setLanguage] = useState('en');

  // Load preferences from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme') || 'purple';
      const savedDarkMode = localStorage.getItem('portfolio-dark-mode') === 'true';
      const savedLayout = localStorage.getItem('portfolio-layout') as 'compact' | 'comfortable' | 'spacious' || 'comfortable';
      const savedAnimations = localStorage.getItem('portfolio-animations') !== 'false';
      const savedLanguage = localStorage.getItem('portfolio-language') || 'en';
      
      setCurrentTheme(savedTheme);
      setIsDarkMode(savedDarkMode);
      setLayoutMode(savedLayout);
      setEnableAnimations(savedAnimations);
      setLanguage(savedLanguage);
      
      // Apply theme to document
      document.documentElement.classList.toggle('dark', savedDarkMode);
      document.documentElement.setAttribute('data-theme', savedTheme);
      document.documentElement.setAttribute('data-layout', savedLayout);
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', currentTheme);
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
  }, [currentTheme]);

  // Save dark mode preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-dark-mode', isDarkMode.toString());
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode]);

  // Save layout preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-layout', layoutMode);
      document.documentElement.setAttribute('data-layout', layoutMode);
    }
  }, [layoutMode]);

  // Save animation preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-animations', enableAnimations.toString());
      if (!enableAnimations) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    }
  }, [enableAnimations]);

  // Save language preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', language);
      document.documentElement.setAttribute('lang', language);
    }
  }, [language]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const updateConfig = (updates: Partial<SiteConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const theme = themes[currentTheme] || themes.purple;

  const value: AppContextType = {
    currentTheme,
    setCurrentTheme,
    isDarkMode,
    toggleDarkMode,
    theme,
    config,
    updateConfig,
    layoutMode,
    setLayoutMode,
    enableAnimations,
    setEnableAnimations,
    language,
    setLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
