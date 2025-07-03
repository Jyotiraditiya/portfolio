"use client";

import React, { useRef, useEffect, useState } from "react";

export function ProjectCard({
  title,
  description,
  link,
  status,
  index = 0,
}: {
  title: string;
  description: string;
  link?: string;
  status?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-purple-200 p-6 rounded-2xl shadow-lg bg-white dark:bg-black hover:shadow-lg transition mb-6
        duration-700
        ${visible
          ? index % 2 === 0
            ? "opacity-100 translate-x-0"
            : "opacity-100 -translate-x-0"
          : index % 2 === 0
          ? "opacity-0 -translate-x-16"
          : "opacity-0 translate-x-16"
        }
      `}
      style={{ willChange: "opacity, transform" }}
    >
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
      {status && (
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
          {status}
        </span>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 dark:text-purple-300 hover:underline font-medium"
        >
          View Project
        </a>
      )}
    </div>
  );
}

