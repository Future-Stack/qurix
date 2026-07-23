import React from 'react';

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 bg-gray-800 text-white">Super Admin Panel</div>
      {children}
    </div>
  );
}
