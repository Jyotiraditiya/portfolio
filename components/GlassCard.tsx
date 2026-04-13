import React from 'react';

const GlassCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-xl mx-auto border border-white/30">
    {children}
  </div>
);

export default GlassCard;