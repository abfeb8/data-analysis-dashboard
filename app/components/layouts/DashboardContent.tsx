'use client';

import React from 'react';

interface DashboardContentProps {
	children: React.ReactNode;
	title: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({
	children,
	title,
}) => {
	return (
		<div className="h-full">
			<header className="mb-6">
				<h1 className="text-2xl font-semibold text-gray-900">
					{title}
				</h1>
			</header>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{children}
			</div>
		</div>
	);
};

export default DashboardContent;
