import React from 'react';
import SuperAdminSidebar from '@/components/layout/SuperAdminSidebar/SuperAdminSidebar';

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex font-sans text-[#0F172A] overflow-hidden">
      <SuperAdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  );
}
