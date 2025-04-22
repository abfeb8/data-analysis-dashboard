'use client';

import React from 'react';
import NavItem from '../navigation/NavItem';
import SearchBar from '../navigation/SearchBar';
import UserProfileCard from '../navigation/UserProfileCard';

const Sidebar: React.FC = () => {
	return (
		<aside className="w-60 bg-indigo-800 text-white flex flex-col">
			<div className="p-5">
				<div className="flex items-center mb-6">
					<div className="bg-white rounded-md p-2 mr-2">
						<span className="sr-only">Logo</span>
						<div className="h-6 w-6 bg-indigo-500 rounded-full"></div>
					</div>
					<div>
						<h2 className="font-bold">Logo</h2>
						<p className="text-xs opacity-70">Subheading</p>
					</div>
				</div>

				<SearchBar />
			</div>

			<nav className="flex-1 px-2 py-4">
				<NavItem
					icon="dashboard"
					label="Dashboard"
					href="/"
					active
				/>
				<NavItem
					icon="reports"
					label="Reports"
					href="/reports"
				/>
				<NavItem
					icon="data"
					label="State Data"
					href="/state-data"
				/>
				<NavItem
					icon="projects"
					label="Projects"
					href="/projects"
				/>
				<NavItem
					icon="database"
					label="Worker Database"
					href="/worker-database"
				/>
				<NavItem
					icon="ai"
					label="AI Report"
					href="/ai-report"
				/>
				<NavItem
					icon="settings"
					label="Settings"
					href="/settings"
				/>
				<NavItem
					icon="support"
					label="Help & Support"
					href="/support"
				/>
			</nav>

			<div className="mt-auto p-3">
				<UserProfileCard
					name="Ram Prasad Mohan"
					role="Admin"
					avatarUrl="/avatar.png"
				/>
			</div>
		</aside>
	);
};

export default Sidebar;
