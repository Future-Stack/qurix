import React from 'react';

export default function TeamLeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 bg-green-800 text-white">Team Leader Panel</div>
      {children}
    </div>
  );
}
