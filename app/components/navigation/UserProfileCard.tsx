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
				minimized ? 'justify-center px-0' : ''
			}`}
		>
			<div
				className={`relative h-8 w-8 rounded-full overflow-hidden bg-white ${
					!minimized && 'mr-2'
				}`}
			>
				<Image
					src={avatarUrl ?? '/user.png'}
					alt={name}
					fill
					className="object-cover"
				/>
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
