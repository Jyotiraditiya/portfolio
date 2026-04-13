"use client";

import React from 'react';
import Image from 'next/image';
import ResumeDownload from './ResumeDownload';

const bounceWords = (text: string, baseDelay = 0.05) =>
  text.split(' ').map((word, i) => (
    <span
      key={i}
      className="inline-block animate-bounceIn"
      style={{
        animationDelay: `${i * baseDelay + 0.2}s`,
        animationFillMode: 'both',
        marginRight: '0.25em',
      }}
    >
      {word}
    </span>
  ));

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12 md:py-20 lg:py-32 max-w-5xl mx-auto px-4">
    <div className="text-center md:text-left">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-purple-800 leading-tight break-words"
        style={{
          position: "relative",
          top: "-8px",
          left: "-8px",
        }}
      >
        JYOTIRADITIYA MISRA
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
       FULLSTACK DEVELOPER | FRONTEND DEVELOPER
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center md:justify-start">
        <a
          href="#projects"
          className="inline-block px-6 md:px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition text-center"
        >
          View Projects
        </a>
        <ResumeDownload />
      </div>
    </div>
    <div className="flex-shrink-0">
      <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
        {/* Decorative gradient ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 via-purple-200 to-purple-600 blur-2xl opacity-60 z-0" />
        {/* Enlarged, full circle image with no border */}
        <Image
          src="/jyotiraditya.jpg"
          alt="Jyotiraditya Misra"
          width={360}
          height={360}
          className="relative z-10 rounded-full shadow-2xl object-cover w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]"
        />
      </div>
    </div>
    <style jsx global>{`
      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: translateY(60px) scale(0.8);
        }
        60% {
          opacity: 1;
          transform: translateY(-20px) scale(1.05);
        }
        80% {
          transform: translateY(10px) scale(0.97);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .animate-bounceIn {
        animation: bounceIn 0.7s cubic-bezier(0.68,-0.55,0.27,1.55) both;
      }
    `}</style>
  </section>
);

export default Hero;