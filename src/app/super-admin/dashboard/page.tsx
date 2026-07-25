"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FolderOpen, AlertTriangle, CheckCircle2, Calendar, MessageSquare, 
  Search, Filter, Eye, Plus, TrendingUp
} from 'lucide-react';

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

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    urgent: 'bg-[#FEE2E2] text-[#EF4444]',
    mp: 'bg-[#FEF3C7] text-[#F59E0B]',
    late: 'bg-[#FFE4E6] text-[#F43F5E]',
    delivered: 'bg-[#DCFCE7] text-[#00AB0C]',
    active: 'text-[#00AB0C]',
    suspended: 'text-[#EF4444]',
    inactive: 'text-[#475569]',
  };
  
  if (['active', 'suspended', 'inactive'].includes(status)) {
    const dotColor = status === 'active' ? 'bg-[#00AB0C]' : status === 'suspended' ? 'bg-[#EF4444]' : 'bg-[#475569]';
    return (
      <div className={`flex items-center gap-1.5 font-bold text-[11px] ${styles[status]}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> {status.toUpperCase()}
      </div>
    );
  }
  
  return (
    <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${styles[status] || 'bg-gray-100 text-gray-500'}`}>
      {status.toUpperCase()}
    </span>
  );
}

function StatCard({ icon: Icon, title, value, iconBg, iconColor, trend }: any) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 flex flex-col justify-between w-full h-[140px] shadow-sm relative">
      <div className="flex justify-between items-start">
        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-[13px] font-bold text-[#00AB0C]">
            <TrendingUp className="w-4 h-4" /> {trend}
          </div>
        )}
      </div>
      <div>
        <div className="text-[13px] font-medium text-[#64748B] mb-1">{title}</div>
        <div className="text-[28px] font-bold text-[#00AB0C] leading-none">{value}</div>
      </div>
    </div>
  );
}

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="h-full max-w-full overflow-hidden m-4 mr-4">
      <div className="h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-y-auto no-scrollbar">
        <div className="p-8 pb-12 max-w-full mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-4 border-green-500 p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                  <span className="z-10">A</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Welcome back, Admin</h1>
                <p className="text-sm text-[#64748B]">Monday, July 14, 2026 -</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm">
                <Plus className="w-4 h-4" /> New Project
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            <StatCard icon={FolderOpen} title="Active Projects" value="240" iconBg="bg-blue-50" iconColor="text-blue-500" trend="+2%" />
            <StatCard icon={AlertTriangle} title="Urgent Projects" value="78" iconBg="bg-red-50" iconColor="text-red-500" />
            <StatCard icon={CheckCircle2} title="Total Delivered" value="12" iconBg="bg-green-50" iconColor="text-green-500" />
            <StatCard icon={Calendar} title="Upcoming Deadlines" value="8" iconBg="bg-yellow-50" iconColor="text-yellow-500" />
            <StatCard icon={MessageSquare} title="Unread Messages" value="43" iconBg="bg-purple-50" iconColor="text-purple-500" />
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            {/* Controls */}
            <div className="p-4 flex items-center justify-between border-b border-[#E2E8F0]">
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${
                    activeTab === 'projects' 
                      ? 'bg-[#06530B] text-white' 
                      : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  All Project
                </button>
                <button 
                  onClick={() => setActiveTab('team')}
                  className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${
                    activeTab === 'team' 
                      ? 'bg-[#06530B] text-white' 
                      : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  Team Member
                </button>
                <button 
                  onClick={() => setActiveTab('refunds')}
                  className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${
                    activeTab === 'refunds' 
                      ? 'bg-[#06530B] text-white' 
                      : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  Refunds and Cancellations
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search by Name or Order ID..." 
                    className="pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-64"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#475569] hover:bg-gray-100 transition-colors">
                  <Filter className="w-4 h-4" /> Order Filtering
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              {activeTab === 'projects' && (
                <table className="w-full text-left border-collapse min-w-max">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Client name</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Profile name</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Team</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Value</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Timeline</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockProjects.map((project, i) => (
                      <tr key={i} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-[13px] font-semibold text-[#0F172A]">{project.id}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{project.client}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{project.profile}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{project.team}</td>
                        <td className="px-6 py-4"><StatusBadge status={project.status} /></td>
                        <td className="px-6 py-4 text-[13px] font-semibold text-[#0F172A]">{project.value}</td>
                        <td className="px-6 py-4">
                          <div className="bg-[#06530B] text-white text-[10px] font-bold px-2 py-1 rounded inline-block">
                            {project.timeline}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Link href={`/super-admin/dashboard`} className="flex items-center gap-1 text-[#06530B] font-bold text-xs">
                            <Eye className="w-4 h-4" /> View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'team' && (
                <table className="w-full text-left border-collapse min-w-max">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Profile</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Emp ID</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Designation</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">E-mail</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Joining Date</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Last login</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTeamMembers.map((member, i) => (
                      <tr key={i} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                              <div className="text-[13px] font-bold text-[#0F172A] mb-0.5">{member.name}</div>
                              <div className="text-[11px] text-[#64748B]">{member.username}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.empId}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.designation}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.email}</td>
                        <td className="px-6 py-4"><StatusBadge status={member.status} /></td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.joined}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.lastLogin}</td>
                        <td className="px-6 py-4">
                          <button className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
                            <Eye className="w-4 h-4" /> View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'refunds' && (
                <div className="p-8 text-center text-gray-500">No refunds found.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
