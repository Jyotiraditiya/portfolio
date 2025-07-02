"use client";

import React, { useRef, useEffect, useState } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
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
      <p className="text-lg text-gray-700">
        I’m Jyotiraditya Misra, a passionate full-stack developer skilled in
        React.js, Next.js, Tailwind CSS, and MongoDB. I love building clean,
        responsive web apps and solving real-world problems through code.
        <br />
        <br />
        With experience at Prodigy InfoTech and virtual training from Wells Fargo,
        I’ve built projects like an AI-powered Event Planner and a Smart Parking
        System. I’m also a DSA instructor and Co-Lead at Codhers.
        <br />
        <br />
        Always learning. Always building.
      </p>
    </section>
  );
};

export default About;