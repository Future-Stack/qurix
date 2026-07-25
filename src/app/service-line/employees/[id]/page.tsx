"use client";

import React from 'react';
import { Building2, Lock, Edit2, Ban } from 'lucide-react';
import Link from 'next/link';

export default function EmployeeInformationPage() {
  return (
    <div className="p-8 pb-12 w-full max-w-full mx-auto h-full overflow-y-auto no-scrollbar">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full border border-[#E2E8F0] p-1 flex items-center justify-center shrink-0 bg-white shadow-sm">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold text-[8px] overflow-hidden">
              <span className="tracking-widest">dyson</span>
            </div>  
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Employee Information</h1>
            <p className="text-sm text-[#64748B]">Admin Panel</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/service-line/employees" className="flex items-center gap-2 px-6 py-2.5 border border-[#E2E8F0] bg-white rounded-xl text-sm font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm">
            Back
          </Link>
          <Link href="/service-line/employees/create" className="flex items-center gap-2 px-6 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm">
            <Edit2 className="w-4 h-4" /> Edit information
          </Link>
        </div>
      </div>

      <div className="flex gap-6 max-w-full mx-auto">
        
        {/* Left Content (Details) */}
        <div className="flex-1 space-y-6">
          
          {/* Personal Information */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="text-[15px] font-bold text-[#0F172A] mb-6">Personal information</h3>
            <div className="grid grid-cols-3 gap-y-6 gap-x-4">
              <div>
                <p className="text-xs text-[#64748B] mb-1">Full Name</p>
                <p className="text-sm font-bold text-[#00AB0C]">John Doe</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Employee ID</p>
                <p className="text-sm font-bold text-[#00AB0C]">E00123</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Designation</p>
                <p className="text-sm font-bold text-[#00AB0C]">UI/UX Designer</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Work Email</p>
                <p className="text-sm font-bold text-[#00AB0C]">john.doe@collabcorp.com</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Phone Number</p>
                <p className="text-sm font-bold text-[#00AB0C]">+1 (555) 012-3456</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Joining Date</p>
                <p className="text-sm font-bold text-[#00AB0C]">Oct 12, 2021</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Username</p>
                <p className="text-sm font-bold text-[#00AB0C]">johndoe</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Employment Type</p>
                <p className="text-sm font-bold text-[#00AB0C]">Full-Time Permanent</p>
              </div>
            </div>
          </div>

          {/* Organization & hierarchy */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center">
                <Building2 className="w-4 h-4 text-[#00AB0C]" />
              </div>
              <h3 className="text-[15px] font-bold text-[#0F172A]">Organization & hierarchy</h3>
            </div>
            <div className="grid grid-cols-3 gap-y-6 gap-x-4">
              <div>
                <p className="text-xs text-[#64748B] mb-1">Service Line</p>
                <p className="text-sm font-bold text-[#00AB0C]">FSD</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Team</p>
                <p className="text-sm font-bold text-[#00AB0C]">FS</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Team Leader</p>
                <p className="text-sm font-bold text-[#00AB0C]">Sarah Jenkins</p>
              </div>
            </div>
          </div>

          {/* Account security */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center">
                <Lock className="w-4 h-4 text-[#00AB0C]" />
              </div>
              <h3 className="text-[15px] font-bold text-[#0F172A]">Account security</h3>
            </div>
            <div className="grid grid-cols-3 gap-y-6 gap-x-4">
              <div>
                <p className="text-xs text-[#64748B] mb-1">Login Email</p>
                <p className="text-sm font-bold text-[#00AB0C]">john.doe@collabcorp.com</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Last Login</p>
                <p className="text-sm font-bold text-[#00AB0C]">2 hours ago | San Jose, ...</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-1">Password Status</p>
                <p className="text-sm font-bold text-[#00AB0C]">Strong</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Content (Profile Card) */}
        <div className="w-[320px] shrink-0">
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden flex flex-col">
            
            {/* Top Green Background */}
            <div className="h-24 bg-[#06530B] w-full"></div>
            
            <div className="px-6 pb-6 flex flex-col items-center -mt-12">
              <img src="https://i.pravatar.cc/150?u=30" alt="MD SHAKIL" className="w-24 h-24 rounded-full border-4 border-white shadow-sm object-cover bg-white mb-3" />
              
              <h2 className="text-lg font-bold text-[#0F172A] uppercase mb-0.5">MD SHAKIL</h2>
              <p className="text-[11px] text-[#64748B] mb-1">Quote/Bid</p>
              
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#00AB0C] bg-[#F0FDF4] px-2.5 py-1 rounded-md mb-6">
                <span className="w-3 h-3 flex items-center justify-center bg-[#00AB0C] text-white rounded-[3px] text-[8px]">H</span> 15/14
              </div>

              <div className="w-full border-t border-dashed border-[#E2E8F0] mb-5"></div>

              <div className="w-full grid grid-cols-2 gap-y-5 mb-8">
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-bold uppercase mb-1">ROLE</p>
                  <p className="text-sm font-bold text-[#0F172A]">Employee</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-bold uppercase mb-1">STATUS</p>
                  <div className="flex items-center gap-1.5 font-bold text-sm text-[#00AB0C]">
                    <span className="w-2 h-2 rounded-full bg-[#00AB0C]"></span> Active
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-bold uppercase mb-1">SERVICE LINE</p>
                  <p className="text-sm font-bold text-[#0F172A]">FSD</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-bold uppercase mb-1">TEAM</p>
                  <p className="text-sm font-bold text-[#0F172A]">Future Stack</p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 border border-red-200 bg-red-50 text-red-500 rounded-xl text-sm font-bold hover:bg-red-100 transition-colors">
                <Ban className="w-4 h-4" /> Suspend Account
              </button>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
