import { Zap, ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function WelcomeForm() {
  return (
    <>
       <div className="flex lg:hidden items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-xl flex items-center justify-center">
                                 <Zap className="w-5 h-5 text-white" />
                               </div>
              <span className="font-bold text-lg tracking-tight text-[#101828]">Softvence.Agency</span>
            </div>
      
            <div className="hidden lg:flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-xl flex items-center justify-center">
                                 <Zap className="w-5 h-5 text-white" />
                               </div>
              <span className="font-bold text-lg tracking-tight text-[#101828]">Softvence.Agency</span>
            </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
      <p className="text-sm text-gray-500 mb-8">Sign in to your workspace or create a new account to join your team.</p>

      <Link href="/employee-verification">
        <button
          className="w-full bg-[#06530B] hover:bg-[#05290b] text-white py-3 px-3 lg:py-3.5 lg:px-4 rounded-xl text-xs lg:text-[15px] font-bold flex items-center justify-center gap-2 transition-all mt-2 cursor-pointer"
        >
          Login to Your Account
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>

      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
        <p className="text-[10px] lg:text-xs text-[#94A3B8] leading-relaxed">
          Restricted to verified Softvence Agency employees only.<br/>
          Unauthorized access is prohibited.
        </p>
      </div>
    </>
  );
}
