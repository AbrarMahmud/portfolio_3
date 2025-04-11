import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -inset-[10px] opacity-70">
        {/* Main animated orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-400/30 to-purple-500/30 rounded-full blur-3xl animate-siri" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/30 to-blue-400/30 rounded-full blur-3xl animate-siri animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-400/30 to-teal-300/30 rounded-full blur-3xl animate-siri animation-delay-4000" />
        
        {/* Secondary pulsing orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-red-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-3000" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400/60 rounded-full blur-sm animate-float" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400/60 rounded-full blur-sm animate-float animation-delay-1000" />
        <div className="absolute bottom-1/4 left-2/4 w-3 h-3 bg-blue-400/60 rounded-full blur-sm animate-float animation-delay-2000" />
        
        {/* Additional particles */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-400/60 rounded-full blur-sm animate-float animation-delay-3000" />
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-purple-400/60 rounded-full blur-sm animate-float animation-delay-4000" />
      </div>
    </div>
  );
};

export default BackgroundAnimation;