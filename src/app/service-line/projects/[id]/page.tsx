"use client";

import React from 'react';
import { 
  FileText, User, Hash, ChevronDown, Calendar, Clock, Search, ShieldCheck, 
  Upload, Paperclip, Link as LinkIcon, FilePlus2, HardDrive, PenTool, Code
} from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailsPage() {
  return (
    <div className="h-full max-w-full overflow-hidden m-4 mr-4">
      <div className="h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-y-auto no-scrollbar">
      <div className="p-8 pb-12 w-full max-w-full mx-auto">
      
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
              <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Omega Force</h1>
              <p className="text-sm text-[#64748B]">Admin Panel</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center px-4 py-2 bg-[#00AB0C] text-white rounded-lg text-xs font-bold shadow-sm">
              3D 9H 25M 53S
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#06530B] text-white rounded-lg text-xs font-bold shadow-sm">
              PLANING <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-[#E2E8F0] text-[#64748B] rounded-lg text-xs font-bold shadow-sm">
              <Clock className="w-3.5 h-3.5" /> URGENT
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-sm max-w-5xl mx-auto space-y-10">
          
          {/* Project Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
                <FilePlus2 className="w-4 h-4 text-[#00AB0C]" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#0F172A]">Project Information</h3>
                <p className="text-[11px] text-[#94A3B8]">Core project details and metadata</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="space-y-1.5">
                <label htmlFor="clientName" className="block text-xs font-bold text-[#475569]">
                  Client Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-green-700" />
                  <input 
                    id="clientName"
                    type="text" 
                    defaultValue="alexjlauis"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="orderId" className="block text-xs font-bold text-[#475569]">
                  Fiverr Order ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Hash className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    id="orderId"
                    type="text" 
                    defaultValue="FO2354BC7EA142"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-bold" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="profileName" className="block text-xs font-bold text-[#475569]">
                  Profile Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select id="profileName" className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer">
                    <option>code_tribe_fiverr</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="serviceLine" className="block text-xs font-bold text-[#475569]">
                  Service Line <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select id="serviceLine" className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer">
                    <option>CUSTOM-FSD</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="team" className="block text-xs font-bold text-[#475569]">
                  Team <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select id="team" className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer">
                    <option>Future Stack</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="status" className="block text-xs font-bold text-[#475569]">
                  Project Status <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select id="status" className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer">
                    <option>Planing</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="startDate" className="block text-xs font-bold text-[#475569]">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    id="startDate"
                    type="text" 
                    defaultValue="18 July 2026"
                    className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium" 
                  />
                  <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="deadline" className="block text-xs font-bold text-[#475569]">
                  Delivery Deadline <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    id="deadline"
                    type="text" 
                    defaultValue="30 July 2026"
                    className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium" 
                  />
                  <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="deadlineTime" className="block text-xs font-bold text-[#475569]">
                  Deadline Time
                </label>
                <div className="relative">
                  <input 
                    id="deadlineTime"
                    type="text" 
                    defaultValue="4:57 PM"
                    className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium" 
                  />
                  <Clock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Remaining Timeline */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#00AB0C]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0F172A] mb-0.5">Remaining Timeline</p>
                  <p className="text-sm font-bold text-[#00AB0C]">3D 9H 25M 53S</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-[#0F172A] mb-1">Timeline Health</p>
                <div className="w-32 h-1.5 bg-[#DCFCE7] rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-[#00AB0C] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="border border-[#E2E8F0] rounded-2xl overflow-hidden p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E2E8F0] p-0.5 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-[8px] overflow-hidden">
                    <span className="tracking-tighter">SOFTVENCE</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">Softvence</h4>
                  <p className="text-[11px] text-[#64748B]">Platform Admin · @dev_shakil · EMP001</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F0FDF4] text-[#00AB0C] rounded-md text-[10px] font-bold">
                <ShieldCheck className="w-3 h-3" /> Cannot be changed
              </div>
            </div>

            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by name, username, or Employee ID..." 
                className="w-full pl-9 pr-3 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div className="space-y-4 mb-6 pl-2">
              {[
                { name: 'Kathryn Murphy', role: 'Lead Designer', handle: '@alex.chen', id: 'EMP002', avatar: 'https://i.pravatar.cc/150?u=41' },
                { name: 'Annette Black', role: 'UI/UX Designer', handle: '@sarah.rhim', id: 'EMP003', avatar: 'https://i.pravatar.cc/150?u=42' },
                { name: 'Courtney Henry', role: 'Backend Engineer', handle: '@mike.t', id: 'EMP004', avatar: 'https://i.pravatar.cc/150?u=43' },
                { name: 'Robert Fox', role: 'Product Manager', handle: '@james.liu', id: 'EMP005', avatar: 'https://i.pravatar.cc/150?u=44' },
                { name: 'Kristin Watson', role: 'QA Lead', handle: '@emily.park', id: 'EMP006', avatar: 'https://i.pravatar.cc/150?u=45' },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg p-1 -ml-1 transition-colors">
                  <div className="flex items-center gap-3">
                    <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <h4 className="text-[13px] font-bold text-[#0F172A]">{member.name}</h4>
                      <p className="text-[11px] text-[#64748B]">{member.role} · {member.handle} · {member.id}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-[#CBD5E1] mr-2"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-[10px] font-medium text-[#94A3B8]">
              <span>9 members selected (Including owner)</span>
              <span>Members can leave this group but not the Admin</span>
            </div>
          </div>

          {/* Project Requirements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#0F172A]">Project Requirements</h3>
                <p className="text-[11px] text-[#94A3B8]">Attach files, links, and resources for the project</p>
              </div>
            </div>

            <div className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#F8FAFC]">
              <div className="border-2 border-dashed border-[#CBD5E1] rounded-2xl bg-white p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors mb-6">
                <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center mb-4">
                  <Upload className="w-5 h-5 text-[#64748B]" />
                </div>
                <p className="text-sm font-bold text-[#0F172A] mb-1">Drag & drop files here</p>
                <p className="text-[11px] text-[#64748B] mb-4">or click to browse from your computer</p>
                <div className="flex items-center gap-2">
                  {['PDF', 'DOC', 'XLSX', 'PPTX', 'ZIP', 'PNG', 'MP4'].map(ext => (
                    <span key={ext} className="text-[9px] font-bold text-[#94A3B8] bg-[#F1F5F9] px-2 py-1 rounded">
                      {ext}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 border-t border-[#E2E8F0]"></div>
                <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">Or Add Link</span>
                <div className="flex-1 border-t border-[#E2E8F0]"></div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm">
                  <PenTool className="w-3.5 h-3.5 text-pink-500" /> Figma <span className="text-[#94A3B8]">+</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm">
                  <HardDrive className="w-3.5 h-3.5 text-blue-500" /> Google Drive <span className="text-[#94A3B8]">+</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm">
                  <Code className="w-3.5 h-3.5 text-gray-700" /> GitHub <span className="text-[#94A3B8]">+</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm">
                  <LinkIcon className="w-3.5 h-3.5 text-gray-500" /> External URL <span className="text-[#94A3B8]">+</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}
