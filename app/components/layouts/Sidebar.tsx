import React from 'react';
import NavItem from '../navigation/NavItem';
import SearchBar from '../navigation/SearchBar';
import UserProfileCard from '../navigation/UserProfileCard';
import {
	FiHome,
	FiFileText,
	FiMap,
	FiFolder,
	FiDatabase,
	FiCpu,
	FiSettings,
	FiHelpCircle,
} from 'react-icons/fi';

function Sidebar() {
	return (
		<aside className="w-60 bg-primary text-white flex flex-col">
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

			<nav className="flex-1 px-5">
				<NavItem
					icon={<FiHome size={18} />}
					label="Dashboard"
					href="/"
				/>
				<NavItem
					icon={<FiFileText size={18} />}
					label="Reports"
					href="/reports"
				/>
				<NavItem
					icon={<FiMap size={18} />}
					label="State Data"
					href="/state-data"
				/>
				<NavItem
					icon={<FiFolder size={18} />}
					label="Projects"
					href="/projects"
				/>
				<NavItem
					icon={<FiDatabase size={18} />}
					label="Worker Database"
					href="/worker-database"
				/>
				<NavItem
					icon={<FiCpu size={18} />}
					label="AI Report"
					href="/ai-report"
				/>
				<NavItem
					icon={<FiHelpCircle size={18} />}
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
}

export default Sidebar;
