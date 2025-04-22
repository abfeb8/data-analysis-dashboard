'use client';

import React, { useState } from 'react';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		// Implement search functionality
	};

	return (
		<form
			onSubmit={handleSearch}
			className="mb-4"
		>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						className="h-4 w-4 text-indigo-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
				<input
					type="search"
					className="block w-full bg-indigo-700/50 text-indigo-100 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder:text-indigo-300"
					placeholder="Search"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<div className="absolute inset-y-0 right-0 flex items-center pr-2">
					<kbd className="bg-indigo-700 px-1.5 rounded text-xs text-indigo-300">
						K
					</kbd>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
