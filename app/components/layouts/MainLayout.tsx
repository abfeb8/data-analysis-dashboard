'use client';

import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="flex h-screen bg-primary border-4 border-solid border-primary">
			<Sidebar />
			<main className="flex-1 overflow-auto bg-white p-6 m-1 border rounded-4xl">
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
