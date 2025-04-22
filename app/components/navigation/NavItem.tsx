'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icons mapping component
const Icon: React.FC<{ name: string }> = ({ name }) => {
	// This is a placeholder. In a real implementation, you would use an icon library or SVG icons
	return (
		<div className="h-5 w-5 flex items-center justify-center rounded-md bg-indigo-700">
			<span className="sr-only">{name} icon</span>
		</div>
	);
};

interface NavItemProps {
	icon: string;
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
				<Icon name={icon} />
				<span className="ml-3">{label}</span>
			</div>
		</Link>
	);
};

export default NavItem;
