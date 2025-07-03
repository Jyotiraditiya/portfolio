"use client";

import React, { useRef, useEffect, useState } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const interestRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [interestVisible, setInterestVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
      
      if (!locationRef.current) return;
      const locationRect = locationRef.current.getBoundingClientRect();
      if (locationRect.top < window.innerHeight - 100) {
        setLocationVisible(true);
      }

      if (!cardRef.current) return;
      const cardRect = cardRef.current.getBoundingClientRect();
      if (cardRect.top < window.innerHeight - 100) {
        setCardVisible(true);
      }

      if (!educationRef.current) return;
      const educationRect = educationRef.current.getBoundingClientRect();
      if (educationRect.top < window.innerHeight - 100) {
        setEducationVisible(true);
      }

      if (!interestRef.current) return;
      const interestRect = interestRef.current.getBoundingClientRect();
      if (interestRect.top < window.innerHeight - 100) {
        setInterestVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className={`my-24 max-w-3xl mx-auto transition-all duration-700 ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-16"
      }`}
    >
      <h2 className="text-3xl font-bold text-purple-800 mb-4">About Me</h2>
      
      {/* About Card */}
      <div 
        ref={cardRef}
        className={`bg-white dark:bg-black rounded-xl shadow-lg p-8 mb-8 border border-purple-200 transition-all duration-700 ${
          cardVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75"
        }`}
        style={{
          transformOrigin: 'center',
          willChange: 'transform, opacity'
        }}
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi, I'm Jyotiraditya Misra — a passionate and detail-oriented web developer with hands-on experience in building modern, scalable web applications. I specialize in technologies like React.js, Next.js, Tailwind CSS, and MongoDB, and I enjoy crafting seamless user interfaces with robust backend logic.
          <br />
          <br />
          Currently pursuing a B.Tech in Computer Science Engineering at Sikkim Manipal Institute of Technology, I've applied my skills in real-world projects like an AI-powered Event Planner and a Smart Parking Management System. 
          <br />
          <br />
          I thrive on solving complex problems, embracing new challenges, and continuously learning. Whether it's designing a responsive UI or optimizing backend performance, I aim to deliver elegant, efficient, and user-focused solutions.
          <br />
          <br />
          With experience at Prodigy InfoTech and virtual training from Wells Fargo,
          I've built projects like an AI-powered Event Planner and a Smart Parking
          System. I'm also a DSA instructor and Co-Lead at Codhers.
          <br />
          <br />
          <span className="font-semibold text-purple-700 dark:text-purple-300">Always learning. Always building.</span>
        </p>
      </div>
      
      {/* Location, Education, and Interest Boxes */}
      <div className="flex flex-col md:flex-row gap-8 mt-8 justify-center">
        {/* Location Box */}
        <div 
          ref={locationRef}
          className={`bg-white dark:bg-black rounded-xl shadow-lg p-8 border border-purple-200 w-64 h-64 flex flex-col items-center justify-center transition-all duration-700 ${
            locationVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-16"
          }`}
        >
          <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4 text-center">Location</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">Lucknow, Uttar Pradesh</p>
        </div>
        
        {/* Education Box */}
        <div 
          ref={educationRef}
          className={`bg-white dark:bg-black rounded-xl shadow-lg p-8 border border-purple-200 w-64 h-64 flex flex-col items-center justify-center transition-all duration-700 ${
            educationVisible
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
        >
          <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4 text-center">Education</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
            B.Tech in Computer Science Engineering
            <br />
            <span className="text-base">Sikkim Manipal Institute of Technology</span>
          </p>
        </div>
        
        {/* Interest Box */}
        <div 
          ref={interestRef}
          className={`bg-white dark:bg-black rounded-xl shadow-lg p-8 border border-purple-200 w-64 h-64 flex flex-col items-center justify-center transition-all duration-700 ${
            interestVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
        >
          <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4 text-center">Interests</h3>
          <div className="text-center text-gray-700 dark:text-gray-300">
            <p className="text-base mb-1">🚗 Car Enthusiast</p>
            <p className="text-base mb-1">🎨 Web/UI/UX Designer</p>
            <p className="text-base mb-1">✈️ Traveller</p>
            <p className="text-base">📸 Photographer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;