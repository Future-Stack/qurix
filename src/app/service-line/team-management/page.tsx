"use client";

import React, { useState } from 'react';
import { 
  Plus, Search, Filter, Eye, Edit2, Trash2, Upload, User, ChevronDown, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const mockTeams = [
  { id: 1, name: 'Future Stack', logo: 'https://logo.clearbit.com/mcdonalds.com', createDate: '2020-08-08', teamLeader: '4 Teams', members: '42 Members', workload: '$3615', projects: '35 Projects', updated: '2025-12-12' },
  { id: 2, name: 'Cyber Monks', logo: 'https://logo.clearbit.com/starbucks.com', createDate: '2021-01-01', teamLeader: '4 Teams', members: '42 Members', workload: '$4640', projects: '35 Projects', updated: '2021-01-01' },
  { id: 3, name: 'Dev Ninja', logo: 'https://logo.clearbit.com/dyson.com', createDate: '2022-10-10', teamLeader: '4 Teams', members: '42 Members', workload: '$6461', projects: '35 Projects', updated: '2022-10-10' },
];

export default function TeamManagementPage() {
  const [isCreatePanelOpen, setIsCreatePanelOpen] = useState(false);

  return (
    <div className="flex h-full max-w-full bg-[#F8FAFC] overflow-hidden m-4 mr-4">
      
      {/* Main Dashboard Area */}
      <div className="flex-1 flex flex-col h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-hidden overflow-y-auto no-scrollbar">
        <div className="p-8 pb-12 w-full max-w-full mx-auto h-full">
          
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
            <div>
              <button 
                onClick={() => setIsCreatePanelOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> Create Team
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5  gap-2  mb-8  divide-x divide-[#E2E8F0]">
            <div className="flex-1 p-8 flex bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm flex-col justify-center">
              <div className="text-[32px] font-bold text-[#0F172A] mb-2 leading-none">04</div>
              <div className="text-[13px] font-medium text-[#64748B]">Total Team</div>
            </div>
            <div className="flex-1 p-8 flex bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm flex-col justify-center">
              <div className="text-[32px] font-bold text-[#0F172A] mb-2 leading-none">70</div>
              <div className="text-[13px] font-medium text-[#64748B]">Total Employees</div>
            </div>
            <div className="flex-1 p-8 flex bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm flex-col justify-center">
              <div className="text-[32px] font-bold text-[#0F172A] mb-2 leading-none">12</div>
              <div className="text-[13px] font-medium text-[#64748B]">Running Projects</div>
            </div>
            <div className="flex-1 p-8 flex bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm flex-col justify-center">
              <div className="text-[32px] font-bold text-[#0F172A] mb-2 leading-none">8</div>
              <div className="text-[13px] font-medium text-[#64748B]">Team Leader</div>
            </div>
            <div className="flex-1 p-8 flex bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm flex-col justify-center">
              <div className="text-[32px] font-bold text-[#0F172A] mb-2 leading-none">43</div>
              <div className="text-[13px] font-medium text-[#64748B]">Total Project Completed</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2 bg-white rounded-xl">
              <button className="px-6 py-2.5 bg-[#06530B] text-white rounded-xl text-[13px] font-bold shadow-sm">
                Team
              </button>
              <button className="px-6 py-2.5 text-[#475569] hover:bg-gray-50 rounded-xl text-[13px] font-bold transition-colors">
                Employee
              </button>
              <button className="px-6 py-2.5 text-[#475569] hover:bg-gray-50 rounded-xl text-[13px] font-bold transition-colors">
                All Projects
              </button>
            </div>
            
            <div className="flex gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by Service Name" 
                  className="pl-9 pr-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500 w-64 shadow-sm"
                />
              </div>
              <button className="px-4 py-2 bg-white border border-[#E2E8F0] text-[#475569] rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                <Filter className="w-4 h-4" /> Service line Filte
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto bg-white rounded-2xl">
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Team Name</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Create Date</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Team Leader</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Total Members</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Workload</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Active Projects</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Last Updated</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-[#0F172A]">Action Menu</th>
                </tr>
              </thead>
              <tbody>
                {mockTeams.map((team) => (
                  <tr key={team.id} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-gray-200 p-0.5 bg-white shrink-0 overflow-hidden">
                           <img src={team.logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[13px] font-bold text-[#0F172A]">{team.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.createDate}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.teamLeader}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.members}</td>
                    <td className="px-6 py-4 text-[13px] font-bold text-[#0F172A]">{team.workload}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.projects}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.updated}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/service-line/teams/${team.id}`} className="w-8 h-8 rounded-full flex items-center justify-center text-[#00AB0C] hover:bg-green-50 transition-colors">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button className="w-8 h-8 rounded-full  flex items-center justify-center text-[#00AB0C] hover:bg-green-50 transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full  flex items-center justify-center text-[#00AB0C] hover:bg-green-50 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* Create Team Modal */}
      {isCreatePanelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-[480px] bg-white rounded-[24px] shadow-xl p-8 overflow-y-auto max-h-[90vh] no-scrollbar relative">
            <div className="flex flex-col items-center justify-center mb-8 mt-2">
              <div className="w-14 h-14 rounded-[16px] bg-[#F8FAFC] flex items-center justify-center text-[#64748B] mb-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <Upload className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">Team Icon / Brand Identity</h3>
              <p className="text-[10px] text-[#94A3B8] text-center max-w-[200px]">
                Recommended dimensions: 256x256px. Formats: PNG, SVG or JPG (Max 2MB).
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label className="block text-xs font-medium text-[#64748B]">Team Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#00AB0C]" />
                    <input type="text" defaultValue="Future Stack" className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-bold text-[#00AB0C] focus:outline-none focus:border-green-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="block text-xs font-medium text-[#64748B]">Team Code <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="FSD - FO41BD" className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-bold text-[#00AB0C] focus:outline-none focus:border-green-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium text-[#64748B]">Service Line <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full pl-3 pr-9 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-bold text-[#00AB0C] appearance-none focus:outline-none focus:border-green-500">
                    <option>CUSTOM-FSD</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label className="block text-xs font-bold text-[#00AB0C]">Team Leader <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search by name or user ID.." className="w-full pl-8 pr-2 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[11px] font-medium text-[#64748B] focus:outline-none focus:border-green-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="block text-xs font-medium text-[#64748B]">CO-Leader</label>
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search by name or user ID.." className="w-full pl-8 pr-2 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[11px] font-medium text-[#64748B] focus:outline-none focus:border-green-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button 
                onClick={() => setIsCreatePanelOpen(false)}
                className="w-12 h-12 flex items-center justify-center border border-[#E2E8F0] rounded-full hover:bg-gray-50 transition-colors shrink-0"
              >
                <ArrowLeft className="w-4 h-4 text-[#475569]" />
              </button>
              <button className="flex-1 h-12 bg-[#06530B] hover:bg-[#05290b] text-white rounded-lg text-[13px] font-bold transition-colors shadow-sm flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Create Team
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
