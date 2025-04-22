'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
	icon: ReactNode;
	label: string;
	href: string;
	active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, active }) => {
	const pathname = usePathname();
	const isActive = active || pathname === href;

	return (
		<Link href={href}>
			<div
				className={`flex items-center px-3 py-2 my-1 rounded-md text-sm cursor-pointer transition-colors ${
					isActive
						? 'bg-indigo-700 text-white'
						: 'text-indigo-200 hover:bg-indigo-700/50'
				}`}
			>
				<span className="flex items-center justify-center">{icon}</span>
				<span className="ml-3">{label}</span>
			</div>
		</Link>
	);
};

export default NavItem;
