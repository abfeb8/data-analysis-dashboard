import React from 'react';
import DashboardContent from '@/components/layouts/DashboardContent';

export default function WorkerDatabasePage() {
	return (
		<DashboardContent title="Worker Database">
			<div className="col-span-2 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">
					Worker Database
				</h2>
				<p className="text-gray-600">
					This is a placeholder for the Worker Database content.
				</p>
			</div>
		</DashboardContent>
	);
}
