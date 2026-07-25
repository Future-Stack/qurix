"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  User, Hash, Phone, Briefcase, ChevronDown, Eye, EyeOff, 
  Settings, Users, ArrowLeft, Camera
} from 'lucide-react';

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-[#64748B]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function CreateEmployeePage() {
  const [showPassword, setShowPassword] = useState(false);

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
                <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Employee Information</h1>
                <p className="text-sm text-[#64748B]">Admin Panel</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/service-line/employees"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#E2E8F0] bg-white rounded-xl text-sm font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </Link>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm">
                Create Employee
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-8 space-y-10">

            {/* Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#E2E8F0] bg-gray-100">
                  <img
                    src="https://i.pravatar.cc/150?u=create"
                    alt="Employee Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-[#06530B] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <Camera className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            {/* Employee Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-[#00AB0C]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0F172A]">Employee Information</h3>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <FormField label="Full Name" required>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#00AB0C]" />
                    <input
                      type="text"
                      defaultValue="John Doe"
                      placeholder="Full name"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium"
                    />
                  </div>
                </FormField>

                <FormField label="Employee ID" required>
                  <div className="relative">
                    <Hash className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      defaultValue="EMP723"
                      placeholder="Employee ID"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-bold"
                    />
                  </div>
                </FormField>

                <FormField label="Username" required>
                  <input
                    type="text"
                    defaultValue="@shakil"
                    placeholder="Username"
                    className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium"
                  />
                </FormField>

                <FormField label="Phone Number" required>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      defaultValue="+1 (555) 865-8555"
                      placeholder="Phone number"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium"
                    />
                  </div>
                </FormField>

                <FormField label="Designation" required>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select className="w-full pl-9 pr-9 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer">
                      <option>UI/UX Designer</option>
                      <option>Node JS Developer</option>
                      <option>React JS Developer</option>
                      <option>Project Manager</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </FormField>

                <FormField label="Employment Type" required>
                  <div className="relative">
                    <select className="w-full px-3 pr-9 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer">
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Contract</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </FormField>
              </div>
            </div>

            {/* Organization Assignment */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
                  <Settings className="w-4 h-4 text-[#00AB0C]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0F172A]">Organization Assignment</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <FormField label="Service Line" required>
                  <div className="relative">
                    <select className="w-full px-3 pr-9 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer">
                      <option>FSD</option>
                      <option>Framer</option>
                      <option>SM</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </FormField>

                <FormField label="Team" required>
                  <div className="relative">
                    <select className="w-full px-3 pr-9 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer">
                      <option>Future Stack</option>
                      <option>Cyber Monks</option>
                      <option>Dev Ninja</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </FormField>
              </div>
            </div>

            {/* Role & Account */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#00AB0C]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0F172A]">Role & Account</h3>
              </div>

              <div className="grid grid-cols-3 gap-6 items-end">
                <FormField label="Login Email">
                  <input
                    type="email"
                    defaultValue="login@atobcopy.com"
                    placeholder="Login email"
                    className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium"
                  />
                </FormField>

                <FormField label="Password">
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      defaultValue="securepassword"
                      placeholder="Password"
                      className="w-full px-3 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </FormField>

                <div className="flex gap-4">
                  <button className="px-8 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm h-11">
                    Update
                  </button>
                  <div className="flex bg-[#F1F5F9] rounded-xl p-1 h-11 border border-[#E2E8F0]">
                    <button className="px-8 py-1.5 bg-white text-[#0F172A] rounded-lg text-sm font-bold shadow-sm">
                      Auto
                    </button>
                    <button className="px-8 py-1.5 text-[#64748B] hover:text-[#0F172A] rounded-lg text-sm font-bold transition-colors">
                      Manual
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
