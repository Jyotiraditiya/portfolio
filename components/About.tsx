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
        Hi, I’m Jyotiraditya Misra — a passionate and detail-oriented web developer with hands-on experience in building modern, scalable web applications. I specialize in technologies like React.js, Next.js, Tailwind CSS, and MongoDB, and I enjoy crafting seamless user interfaces with robust backend logic.

Currently pursuing a B.Tech in Computer Science Engineering at Sikkim Manipal Institute of Technology, I’ve applied my skills in real-world projects like an AI-powered Event Planner and a Smart Parking Management System. 

I thrive on solving complex problems, embracing new challenges, and continuously learning. Whether it’s designing a responsive UI or optimizing backend performance, I aim to deliver elegant, efficient, and user-focused solutions.
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