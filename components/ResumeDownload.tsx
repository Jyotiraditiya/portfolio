import React from 'react';
import { FiDownload } from 'react-icons/fi';

const ResumeDownload = () => (
  <a
    href="/resume14.pdf"
    download
    className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition mt-4"
  >
    <FiDownload className="text-lg" />
    Download Resume
  </a>
);

export default ResumeDownload;