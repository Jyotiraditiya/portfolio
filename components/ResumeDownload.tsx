import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { siteConfig } from '../config/site';

const ResumeDownload = () => {
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    try {
      // Fetch the file as a blob
      const response = await fetch('/Jyotiraditiya_misra.pdf');
      
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }
      
      const blob = await response.blob();
      
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Jyotiraditiya_Misra_Resume.pdf';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback to opening in new tab
      window.open('/Jyotiraditiya_misra.pdf', '_blank');
    }
  };

  return (
    <a
      href="/Jyotiraditiya_misra.pdf"
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition text-sm md:text-base text-center"
    >
      <FiDownload className="text-base md:text-lg" />
      Download Resume
    </a>
  );
};

export default ResumeDownload;