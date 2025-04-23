import React from 'react';
import Sidebar from './Sidebar';
import ScrollIndicator from '../ui/ScrollIndicator';

interface MainLayoutProps {
	children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="flex h-screen bg-primary border-4 border-solid border-primary">
			<Sidebar />
			<div className="flex-1 relative">
				<main className="h-full overflow-auto bg-white p-6 m-1 border rounded-xl scrollbar-hide">
					{children}
				</main>
				<ScrollIndicator />
			</div>
		</div>
	);
}

export default MainLayout;
