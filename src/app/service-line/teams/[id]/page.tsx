"use client";

import React, { useState } from 'react';
import { 
  Folder, AlertTriangle, CheckCircle, Calendar, MessageSquare, 
  Search, Filter, Eye, Plus
} from 'lucide-react';
import Link from 'next/link';

const mockProjects = [
  { id: 1, orderId: 'FO2D9BC6E142', client: 'lawalx', profile: 'bits_wise', team: 'FS', status: 'Urgent', value: '$3615', timeline: '3D 9H 25M 53S' },
  { id: 2, orderId: 'FO2D9BC6E142', client: 'Wade Warren', profile: 'bits_wise', team: 'CM', status: 'WIP', value: '$4640', timeline: '3D 9H 25M 53S' },
  { id: 3, orderId: 'FO2D9BC6E142', client: 'Dianne Russell', profile: 'bits_wise', team: 'FS', status: 'Late', value: '$6461', timeline: '3D 9H 25M 53S' },
  { id: 4, orderId: 'FO2D9BC6E142', client: 'Ronald Richards', profile: 'bits_wise', team: 'FS', status: 'Delivered', value: '$10176', timeline: '3D 9H 25M 53S' },
  { id: 5, orderId: 'FO2D9BC6E142', client: 'Leslie Alexander', profile: 'bits_wise', team: 'FS', status: 'Urgent', value: '$5969', timeline: '3D 9H 25M 53S' },
  { id: 6, orderId: 'FO2D9BC6E142', client: 'Guy Hawkins', profile: 'bits_wise', team: 'FS', status: 'Urgent', value: '$7188', timeline: '3D 9H 25M 53S' },
  { id: 7, orderId: 'FO2D9BC6E142', client: 'Jenny Wilson', profile: 'bits_wise', team: 'FS', status: 'Urgent', value: '$5860', timeline: '3D 9H 25M 53S' },
];

const mockMembers = [
  { id: 1, name: 'Vrajakishore Loy', handle: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', status: 'ACTIVE', joinDate: '2020-08-08', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Chintamani Pavithran', handle: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', status: 'ACTIVE', joinDate: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Yashpal Patachli', handle: '@nisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', status: 'ACTIVE', joinDate: '2025-12-12', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Supratik Chaudhry', handle: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', status: 'SUSPENDED', joinDate: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Punyasloka Megana', handle: '@unitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', status: 'INACTIVE', joinDate: '2021-01-01', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];

function StatCard({ icon: Icon, number, label, iconBg, iconColor }: any) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 flex flex-col justify-between shadow-sm h-[130px] relative overflow-hidden">
      <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center mb-2`}>
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <div>
        <div className="text-[28px] font-bold text-[#0F172A] leading-none mb-1">{number}</div>
        <div className="text-[12px] font-medium text-[#64748B]">{label}</div>
      </div>
      <div className="absolute right-4 top-4">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L10 12L14 16L20 10" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
      </div>
    </div>
  );
}

export default function TeamDetailsPage() {
  const [activeTab, setActiveTab] = useState('All Project');

  return (
    <div className="h-full max-w-full overflow-hidden m-4 mr-4">
      <div className="h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-y-auto no-scrollbar">
      <div className="p-8 pb-12 max-w-full mx-auto h-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full border-4 border-green-500 p-0.5 flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
              <span className="z-10">C</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">FSD-Future Stack</h1>
            <p className="text-sm text-[#64748B]">Admin, July 14, 2026 -</p>
          </div>
        </div>
        <div>
          <Link 
            href="/service-line/projects/create"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" /> New Project
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <StatCard icon={Folder} number="24" label="Active Projects" iconBg="bg-blue-50" iconColor="text-blue-500" />
        <StatCard icon={AlertTriangle} number="7" label="Urgent Projects" iconBg="bg-red-50" iconColor="text-red-500" />
        <StatCard icon={CheckCircle} number="12" label="Total Delivered" iconBg="bg-green-50" iconColor="text-green-500" />
        <StatCard icon={Calendar} number="8" label="Upcoming Deadlines" iconBg="bg-orange-50" iconColor="text-orange-500" />
        <StatCard icon={MessageSquare} number="43" label="Unread Messages" iconBg="bg-purple-50" iconColor="text-purple-500" />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2 bg-white rounded-xl">
          {['All Project', 'Team Member', 'Refunds and Cancellations'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-[13px] font-bold transition-colors ${
                activeTab === tab 
                  ? 'bg-[#06530B] text-white shadow-sm' 
                  : 'text-[#475569] hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by Name or Order ID..." 
              className="pl-9 pr-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500 w-64 shadow-sm"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-[#E2E8F0] text-[#475569] rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4" /> Order Filtering
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto p-2">
          
          {activeTab === 'All Project' && (
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Order ID</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Client name</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Profile name</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Team</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Status</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Value</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Timeline</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockProjects.map((proj) => (
                  <tr key={proj.id} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{proj.orderId}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{proj.client}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{proj.profile}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{proj.team}</td>
                    <td className="px-6 py-4">
                      {proj.status === 'Urgent' && <span className="bg-red-50 text-red-600 px-3 py-1 rounded-md text-[11px] font-bold">Urgent</span>}
                      {proj.status === 'WIP' && <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-[11px] font-bold">WIP</span>}
                      {proj.status === 'Late' && <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-md text-[11px] font-bold">Late</span>}
                      {proj.status === 'Delivered' && <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-md text-[11px] font-bold">Delivered</span>}
                    </td>
                    <td className="px-6 py-4 text-[13px] font-bold text-[#0F172A]">{proj.value}</td>
                    <td className="px-6 py-4">
                      <div className="bg-[#00AB0C] text-white px-3 py-1 rounded-md text-[11px] font-bold inline-block">
                        {proj.timeline}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/service-line/projects/${proj.id}`} className="flex items-center gap-1.5 text-[#00AB0C] font-bold text-xs hover:text-green-700 transition-colors">
                        <Eye className="w-4 h-4" /> View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'Team Member' && (
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
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
                {mockMembers.map((emp) => (
                  <tr key={emp.id} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <div className="text-[13px] font-bold text-[#0F172A] mb-0.5">{emp.name}</div>
                          <div className="text-[11px] text-[#64748B]">{emp.handle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.empId}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.designation}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.email}</td>
                    <td className="px-6 py-4">
                      {emp.status === 'ACTIVE' && (
                        <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#00AB0C]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00AB0C]"></span> ACTIVE
                        </div>
                      )}
                      {emp.status === 'SUSPENDED' && (
                        <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#EF4444]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></span> SUSPENDED
                        </div>
                      )}
                      {emp.status === 'INACTIVE' && (
                        <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#475569]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#475569]"></span> INACTIVE
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.joinDate}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.lastLogin}</td>
                    <td className="px-6 py-4">
                      <Link href={`/service-line/employees/${emp.id}`} className="flex items-center gap-1.5 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
                        <Eye className="w-4 h-4" /> View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>
      </div>

    </div>
    </div>
    </div>
  );
}
