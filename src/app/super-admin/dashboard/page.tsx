import { DashboardTable } from '@/components/shared/DashboardTable/DashboardTable';
import React from 'react';

export default function SuperAdminDashboard() {
  const data = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
  ];

  const columns = [
    { key: 'name' as const, header: 'Name' },
    { key: 'role' as const, header: 'Role' },
  ];

  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Super Admin Dashboard</h1>
      <DashboardTable 
        caption="List of recent active users"
        data={data} 
        columns={columns} 
      />
    </main>
  );
}
