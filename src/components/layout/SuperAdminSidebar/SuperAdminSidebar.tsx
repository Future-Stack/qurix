"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  MessageCircle, 
  Users, 
  Phone, 
  Target, 
  UserPlus, 
  Bookmark, 
  BookOpen, 
  Settings 
} from 'lucide-react';

export default function SuperAdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutGrid, path: '/super-admin/dashboard', id: 'dashboard' },
    { icon: MessageCircle, path: '/super-admin/messages', id: 'messages' },
    { icon: Users, path: '/super-admin/all-users', id: 'users' },
    { icon: Phone, path: '/super-admin/calls', id: 'phone' },
    { icon: Target, path: '/super-admin/service-line-management', id: 'target' },
    { icon: UserPlus, path: '#', id: 'userplus' },
    { icon: Bookmark, path: '#', id: 'bookmark' },
    { icon: BookOpen, path: '#', id: 'book' },
  ];

  return (
    <div className="w-[88px] h-[calc(100vh-32px)] bg-white rounded-3xl flex flex-col items-center py-6 shadow-sm shrink-0 mt-4 ml-4">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-10 h-10 bg-[#06530B] rounded-xl flex items-center justify-center text-white font-bold text-xl">
          Q
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex-1 w-full flex flex-col items-center gap-2 overflow-y-auto no-scrollbar px-3">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.path) && item.path !== '#';
          return (
            <Link 
              key={item.id} 
              href={item.path}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                isActive 
                  ? 'bg-[#E6F4EA] text-[#06530B]' 
                  : 'text-[#64748B] hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
            </Link>
          );
        })}
      </div>

      {/* Bottom Settings */}
      <div className="w-full px-4 pt-4 flex flex-col items-center mt-auto">
        <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[#00AB0C] to-transparent opacity-80 mb-4 shadow-[0_0_6px_rgba(0,171,12,0.8)]"></div>
        <Link 
          href="/super-admin/settings"
          className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
            pathname?.startsWith('/super-admin/settings')
              ? 'bg-[#E6F4EA] text-[#06530B]' 
              : 'text-[#64748B] hover:bg-gray-50'
          }`}
        >
          <Settings className="w-5 h-5" strokeWidth={pathname?.startsWith('/super-admin/settings') ? 2 : 1.5} />
        </Link>
      </div>
    </div>
  );
}
