import React from 'react';

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 bg-teal-800 text-white">Employee Panel</div>
      {children}
    </div>
  );
}
