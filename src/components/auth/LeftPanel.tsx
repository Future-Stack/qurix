import { Zap, CheckCircle2, MessageSquare, Video, Clock, FileLock, Bell } from 'lucide-react';
import React from 'react';
import LeftPanelBg from '../../assets/leftpanelBg.jpg';

export default function LeftPanel() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-between text-white p-12 lg:p-16 xl:p-20">
        <img className="absolute inset-0 w-full h-full object-cover" src={LeftPanelBg.src} alt="" />
        {/* Subtle radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-[700px]">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-base text-white tracking-tight">Softvence.Agency</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm border border-[#16A34A47] mb-5 shadow-md shadow-[16A34A1F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
            <span className="text-xs font-medium text-[#4ADE80]">Trusted by 5,000+ Employees</span>
          </div>

          {/* Headings */}
          <h1 className="text-[24px] lg:text-[32px] xl:text-[48px] font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            Connect. Collaborate. Deliver.
          </h1>
          <p className="text-[#C6D2FF] text-lg mb-6 max-w-[660px] font-normal leading-relaxed drop-shadow-sm">
            A secure internal communication and project collaboration platform built for modern software teams and Fiverr agency workflow.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
            {[
              { label: 'Verified Employees', value: '5,000+' },
              { label: 'Active Projects', value: '1,200+' },
              { label: 'Messages Today', value: '25K+' },
              { label: 'On-Time Delivery', value: '98%' },
            ].map((stat, i) => (
              <div key={i} className={`p-4 rounded-[16px] bg-transparent backdrop-blur-sm border border-white/9 flex flex-col justify-center items-center text-center `}>
                <div className="text-base font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[12px] text-[#FFFFFF6B] font-normal leading-[15px]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {[
              { icon: MessageSquare, label: 'Project-Based Messaging' },
              { icon: Clock, label: 'Live Project Timeline' },
              { icon: Video, label: 'HD Voice & Video Calls' },
              { icon: FileLock, label: 'Secure File Sharing' },
              { icon: Bell, label: 'Smart Notifications', fullWidth: true },
            ].map((feature, i) => (
              <div key={i} className={`flex items-center justify-between p-3.5 rounded-xl bg-transparent backdrop-blur-sm border border-white/9 ${feature.fullWidth ? 'lg:col-span-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="bg-[#16A34A2E] rounded-[10px] p-1.5 flex items-center justify-center">
                    <feature.icon className="w-3.5 h-3.5 text-[#05DF72]" />
                  </div>
                  <span className="text-xs font-normal text-[#FFFFFFB8]">{feature.label}</span>
                </div>
                <CheckCircle2 className="w-3 h-3 text-[#05DF72]" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-xs text-white font-normal mt-12 drop-shadow-sm">
          © 2026 Softvence. All rights reserved.
        </div>
      </div>
  );
}