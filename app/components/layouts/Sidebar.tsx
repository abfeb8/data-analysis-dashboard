'use client';

import React, { useState } from 'react';
import NavItem from '@/components/navigation/NavItem';
import UserProfileCard from '@/components/navigation/UserProfileCard';
import {
	FiHome,
	FiFileText,
	FiMap,
	FiFolder,
	FiDatabase,
	FiCpu,
	FiHelpCircle,
	FiChevronLeft,
	FiChevronRight,
} from 'react-icons/fi';

function Sidebar() {
	const [minimized, setMinimized] = useState(false);

	const toggleSidebar = () => {
		setMinimized(!minimized);
	};

	return (
		<aside
			className={`${
				minimized ? 'w-16' : 'w-60'
			} bg-primary text-white flex flex-col relative transition-[width] duration-300 ease-in-out`}
		>
			<div
				className={`p-5 ${
					minimized ? 'items-center justify-center' : ''
				} flex flex-col transition-all duration-300 ease-in-out`}
			>
				<div
					className={`flex items-center mb-6 ${
						minimized ? 'justify-center' : ''
					} transition-all duration-300 ease-in-out`}
				>
					<div className="bg-white rounded-md p-2 mr-2">
						<span className="sr-only">Logo</span>
						<div className="h-6 w-6 bg-indigo-500 rounded-full"></div>
					</div>
					<div
						className={`${
							minimized ? 'opacity-0 absolute' : 'opacity-100'
						} transition-opacity duration-300 ease-in-out`}
					>
						<h2 className="font-bold">Logo</h2>
						<p className="text-xs opacity-70">Subheading</p>
					</div>
				</div>

				{/* {!minimized && <SearchBar />} */}
			</div>

			<nav
				className={`flex-1 ${
					minimized ? 'px-2' : 'px-5'
				} transition-all duration-300 ease-in-out`}
			>
				<NavItem
					icon={<FiHome size={18} />}
					label="Dashboard"
					href="/"
					minimized={minimized}
				/>
				<NavItem
					icon={<FiFileText size={18} />}
					label="Reports"
					href="/reports"
					minimized={minimized}
				/>
				<NavItem
					icon={<FiMap size={18} />}
					label="State Data"
					href="/state-data"
					minimized={minimized}
				/>
				<NavItem
					icon={<FiFolder size={18} />}
					label="Projects"
					href="/projects"
					minimized={minimized}
				/>
				<NavItem
					icon={<FiDatabase size={18} />}
					label="Worker Database"
					href="/worker-database"
					minimized={minimized}
				/>
				<NavItem
					icon={<FiCpu size={18} />}
					label="AI Report"
					href="/ai-report"
					minimized={minimized}
				/>
				<NavItem
					icon={<FiHelpCircle size={18} />}
					label="Help & Support"
					href="/support"
					minimized={minimized}
				/>
			</nav>

			<div className="mt-auto p-3 transition-all duration-300 ease-in-out">
				<UserProfileCard
					name="Ram Prasad Mohan"
					role="Admin"
					avatarUrl="/user.png"
					minimized={minimized}
				/>
			</div>

			<button
				onClick={toggleSidebar}
				className="absolute -right-3 top-1/2 transform -translate-y-84 bg-primary text-white p-0 rounded-full border-2 border-white shadow-md z-10 transition-transform duration-300 ease-in-out"
				aria-label={minimized ? 'Expand sidebar' : 'Collapse sidebar'}
			>
				{minimized ? (
					<FiChevronRight size={16} />
				) : (
					<FiChevronLeft size={16} />
				)}
			</button>
		</aside>
	);
}

export default Sidebar;
