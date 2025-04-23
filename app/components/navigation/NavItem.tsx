'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
	icon: ReactNode;
	label: string;
	href: string;
	active?: boolean;
	minimized?: boolean;
}

function NavItem({
	icon,
	label,
	href,
	active,
	minimized = false,
}: NavItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href}>
			<div
				className={`flex items-center px-3 py-2 my-1 rounded-xl text-sm cursor-pointer transition-all duration-300 ease-in-out ${
					isActive
						? 'bg-accent text-primary font-semibold'
						: 'text-white hover:text-accent'
				} ${minimized ? 'justify-center' : ''}`}
				title={minimized ? label : undefined}
			>
				<span className="flex items-center justify-center transition-all duration-300 ease-in-out">
					{icon}
				</span>
				<span
					className={`ml-3 whitespace-nowrap transition-all duration-300 ease-in-out ${
						minimized
							? 'opacity-0 absolute w-0 overflow-hidden'
							: 'opacity-100 relative w-auto'
					}`}
				>
					{label}
				</span>
			</div>
		</Link>
	);
}

export default NavItem;
