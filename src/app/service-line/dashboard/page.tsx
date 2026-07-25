"use client";

import React, { useState } from 'react';
import { 
  FolderOpen, AlertTriangle, CheckCircle2, Calendar, MessageSquare, 
  Search, Filter, Eye 
} from 'lucide-react';
import { StatCard } from '@/components/ui/Card/StatCard';
import { Tabs } from '@/components/ui/Tabs/Tabs';
import { Table, Column } from '@/components/ui/Table/Table';
import { Badge } from '@/components/ui/Badge/Badge';
import { PageHeader } from '@/components/ui/PageHeader/PageHeader';

const mockProjects = [
  { id: 'FO2D9BC6E142', client: 'lawalx', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$3615', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Wade Warren', profile: 'bits_wise', team: 'CM', status: 'mp', value: '$4640', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Dianne Russell', profile: 'bits_wise', team: 'FS', status: 'late', value: '$6461', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Ronald Richards', profile: 'bits_wise', team: 'FS', status: 'delivered', value: '$10176', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Leslie Alexander', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5969', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Guy Hawkins', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$7188', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Jenny Wilson', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5860', timeline: '3D 9H 25M 53S' },
];

const mockTeamMembers = [
  { name: 'Vrajakishore Loy', username: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', status: 'active', joined: '2020-08-08', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Chintamani Pavithran', username: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', status: 'active', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Yashpal Patachli', username: '@nisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', status: 'active', joined: '2025-12-12', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Supratik Chaudhry', username: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', status: 'suspended', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Punyasloka Megana', username: '@unitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', status: 'inactive', joined: '2021-01-01', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('projects');

  const projectColumns: Column<typeof mockProjects[0]>[] = [
    { key: 'id', header: 'Order ID', render: (item) => <span className="font-semibold text-[#0F172A]">{item.id}</span> },
    { key: 'client', header: 'Client name' },
    { key: 'profile', header: 'Profile name' },
    { key: 'team', header: 'Team' },
    { key: 'status', header: 'Status', render: (item) => <Badge variant={item.status as any}>{item.status}</Badge> },
    { key: 'value', header: 'Value', render: (item) => <span className="font-semibold text-[#0F172A]">{item.value}</span> },
    { key: 'timeline', header: 'Timeline', render: (item) => (
        <div className="bg-[#06530B] text-white text-[10px] font-bold px-2 py-1 rounded inline-block">
          {item.timeline}
        </div>
      ) 
    },
    { key: 'actions', header: 'Actions', render: () => (
        <button className="flex items-center gap-1 text-[#06530B] font-bold text-xs">
          <Eye className="w-4 h-4" /> View
        </button>
      ) 
    },
  ];

  const teamColumns: Column<typeof mockTeamMembers[0]>[] = [
    { key: 'profile', header: 'Profile', render: (item) => (
        <div className="flex items-center gap-3">
          <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
          <div>
            <div className="font-bold text-[#0F172A]">{item.name}</div>
            <div className="text-[11px] text-[#64748B]">{item.username}</div>
          </div>
        </div>
      ) 
    },
    { key: 'empId', header: 'Emp id' },
    { key: 'designation', header: 'Designation' },
    { key: 'email', header: 'E-mail' },
    { key: 'status', header: 'Status', render: (item) => <Badge variant={item.status as any}>{item.status}</Badge> },
    { key: 'joined', header: 'Joining Date' },
    { key: 'lastLogin', header: 'Last login' },
    { key: 'actions', header: 'ACTION', render: () => (
        <button className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
          <Eye className="w-4 h-4" /> View
        </button>
      ) 
    },
  ];

  return (
    <div className="p-8 pb-12 w-full max-w-full mx-auto">
      {/* Header */}
      <PageHeader
        logoInitial="C"
        title="FSD-Future Stack"
        subtitle="Admin, July 14, 2026 -"
        actionLabel="New Project"
      />

      {/* Stats */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <StatCard title="Active Projects" value="24" icon={FolderOpen} iconColorClass="text-blue-500" iconBgClass="bg-blue-50" />
        <StatCard title="Urgent Projects" value="7" icon={AlertTriangle} iconColorClass="text-red-500" iconBgClass="bg-red-50" />
        <StatCard title="Total Delivered" value="12" icon={CheckCircle2} iconColorClass="text-green-500" iconBgClass="bg-green-50" />
        <StatCard title="Upcoming Deadlines" value="8" icon={Calendar} iconColorClass="text-yellow-500" iconBgClass="bg-yellow-50" />
        <StatCard title="Unread Messages" value="43" icon={MessageSquare} iconColorClass="text-purple-500" iconBgClass="bg-purple-50" />
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
        {/* Controls */}
        <div className="p-4 flex items-center justify-between border-b border-[#E2E8F0]">
          <Tabs 
            activeTab={activeTab} 
            onChange={setActiveTab}
            tabs={[
              { id: 'projects', label: 'All Project' },
              { id: 'team', label: 'Team Member' },
              { id: 'refunds', label: 'Refunds and Cancellations' },
            ]} 
          />
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by Name or Order ID..." 
                className="pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#475569] hover:bg-gray-100 transition-colors">
              <Filter className="w-4 h-4" /> Order Filtering
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="p-2">
          {activeTab === 'projects' && <Table columns={projectColumns} data={mockProjects} />}
          {activeTab === 'team' && <Table columns={teamColumns} data={mockTeamMembers} />}
          {activeTab === 'refunds' && <div className="p-8 text-center text-gray-500">No refunds found.</div>}
        </div>
      </div>
    </div>
  );
}
