'use client';

import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="flex h-screen bg-gray-50">
			<Sidebar />
			<main className="flex-1 overflow-auto p-6">{children}</main>
		</div>
	);
};

export default MainLayout;
