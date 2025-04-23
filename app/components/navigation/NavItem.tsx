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

function NavItem({ icon, label, href, active }: NavItemProps) {
	const pathname = usePathname();
	const isActive = active || pathname === href;

	return (
		<Link href={href}>
			<div
				className={`flex items-center px-3 py-2 my-1 rounded-xl text-sm cursor-pointer transition-colors ${
					isActive
						? 'bg-accent text-primary font-semibold'
						: 'text-white hover:text-accent'
				}`}
			>
				<span className="flex items-center justify-center">{icon}</span>
				<span className="ml-3">{label}</span>
			</div>
		</Link>
	);
}

export default NavItem;
