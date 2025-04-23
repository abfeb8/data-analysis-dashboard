'use client';

import React from 'react';
import Image from 'next/image';

interface UserProfileCardProps {
	name: string;
	role: string;
	avatarUrl: string;
	minimized?: boolean;
}

function UserProfileCard({
	name,
	role,
	avatarUrl,
	minimized = false,
}: UserProfileCardProps) {
	return (
		<div
			className={`flex items-center p-2 rounded-lg hover:bg-indigo-900 cursor-pointer transition-colors ${
				minimized ? 'justify-center' : ''
			}`}
		>
			<div
				className={`relative h-8 w-8 rounded-full overflow-hidden bg-indigo-700 ${
					!minimized && 'mr-2'
				}`}
			>
				{/* Use a fallback if avatar image fails to load */}
				<div className="h-full w-full flex items-center justify-center text-xs font-medium text-white">
					{name
						.split(' ')
						.map((n) => n[0])
						.join('')}
				</div>
				{avatarUrl && (
					<Image
						src={avatarUrl}
						alt={name}
						fill
						className="object-cover"
						onError={(e) => {
							// Hide the image if it fails to load
							(e.target as HTMLImageElement).style.display =
								'none';
						}}
					/>
				)}
			</div>
			{!minimized && (
				<>
					<div className="flex-1 min-w-0">
						<p className="text-sm font-medium text-white truncate">
							{name}
						</p>
						<p className="text-xs text-indigo-300 truncate">
							{role}
						</p>
					</div>
				</>
			)}
		</div>
	);
}

export default UserProfileCard;
