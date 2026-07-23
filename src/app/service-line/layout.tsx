import React from 'react';

export default function ServiceLineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 bg-blue-800 text-white">Service Line Panel</div>
      {children}
    </div>
  );
}
