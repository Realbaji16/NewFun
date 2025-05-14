import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InfoIcon, TokenIcon, UsersIcon } from 'lucide-react';

export const MobileNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Fun org ifo',
      icon: <InfoIcon className="w-5 h-5" />,
      href: '/tokens',
      active: pathname === '/tokens'
    },
    {
      label: 'Token',
      icon: <TokenIcon className="w-5 h-5" />,
      href: '/tokens/chart',
      active: pathname === '/tokens/chart'
    },
    {
      label: 'Community',
      icon: <UsersIcon className="w-5 h-5" />,
      href: '/tokens/community',
      active: pathname === '/tokens/community'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#171717] md:hidden">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-1 ${
              item.active ? 'text-[#30EAF7]' : 'text-gray-400'
            }`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}; 