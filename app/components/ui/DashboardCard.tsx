'use client';

import React from 'react';

interface DashboardCardProps {
	children: React.ReactNode;
	title: string;
	className?: string;
}

function DashboardCard({
	children,
	title,
	className = '',
}: DashboardCardProps) {
	return (
		<div
			className={`bg-white p-5 rounded-lg shadow-sm border border-gray-100 ${className}`}
		>
			<h3 className="text-sm font-semibold text-gray-900 pb-2 mb-4 border-b border-gray-100">
				{title}
			</h3>
			<div className="h-[300px]">{children}</div>
		</div>
	);
}

export default DashboardCard;
