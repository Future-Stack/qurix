"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Users, User, UserX, Briefcase, Clock, Activity, TrendingUp, Download, Plus, Search, ChevronDown, Eye
} from 'lucide-react';

const mockEmployees = [
  { id: 1, name: 'Wrajakishore Loy', handle: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', serviceLine: 'FSD', team: 'CM', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Chintamani Pavithran', handle: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', serviceLine: 'Framer', team: 'FS', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Yashpal Patachli', handle: '@nisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', serviceLine: 'FSD', team: 'CM', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Supratik Chaudhry', handle: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', serviceLine: 'SM', team: 'CS', status: 'SUSPENDED', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Punyasloka Megana', handle: '@unitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', serviceLine: 'Squarespace', team: 'SM', status: 'INACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];

function StatCard({ icon: Icon, title, value, trend, hasDot }: any) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 flex flex-col justify-between w-full h-[140px] shadow-sm relative">
      <div className="flex justify-between items-start">
        <Icon className="w-6 h-6 text-[#94A3B8]" />
        {trend && (
          <div className="flex items-center gap-1 text-[13px] font-bold text-[#00AB0C]">
            <TrendingUp className="w-4 h-4" /> {trend}
          </div>
        )}
        {hasDot && (
          <div className="w-2.5 h-2.5 bg-[#00AB0C] rounded-full absolute top-6 right-6"></div>
        )}
      </div>
      <div>
        <div className="text-[13px] font-medium text-[#64748B] mb-1">{title}</div>
        <div className="text-[28px] font-bold text-[#00AB0C] leading-none">{value}</div>
      </div>
    </div>
  );
}

export default function EmployeesPage() {
  return (
    <div className="h-full max-w-full overflow-hidden m-4 mr-4">
      <div className="h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-y-auto no-scrollbar">
        <div className="p-8 pb-12 max-w-full mx-auto">

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
                <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Full Stack Development (FSD)</h1>
                <p className="text-sm text-[#64748B]">Monday, July 14, 2026 -</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 border border-[#E2E8F0] bg-white rounded-xl text-sm font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm">
                <Download className="w-4 h-4" /> Export
              </button>
              <Link 
                href="/service-line/employees/create"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> Create Employee
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-6 gap-4 mb-8">
            <StatCard icon={Users} title="Total Employees" value="1,248" trend="+2%" />
            <StatCard icon={User} title="Active" value="1,182" />
            <StatCard icon={UserX} title="Inactive" value="66" />
            <StatCard icon={Briefcase} title="Team Leaders" value="142" />
            <StatCard icon={Clock} title="New (Month)" value="24" />
            <StatCard icon={Activity} title="Online Now" value="856" hasDot />
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden flex flex-col">
            {/* Controls */}
            <div className="p-5 flex items-center justify-between border-b border-[#E2E8F0]">
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-[#06530B] text-white rounded-xl text-sm font-bold shadow-sm">
                  All Employees
                </button>
                <button className="px-5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                  All Departments <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                <button className="px-5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                  All Teams <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by Name or ID..." 
                  className="pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-64"
                />
              </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-max">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Profile</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Emp ID</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Designation</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">E-mail</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Service Line</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Team</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Last Login</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockEmployees.map((emp) => (
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
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.serviceLine}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.team}</td>
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
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.lastLogin}</td>
                      <td className="px-6 py-4">
                        <Link href={`/service-line/employees/${emp.id}`} className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
                          <Eye className="w-4 h-4" /> View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
