import React from 'react';
import DashboardContent from '../components/layouts/DashboardContent';

export default function AIReportPage() {
	return (
		<DashboardContent title="AI Report">
			<div className="col-span-2 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">
					AI Generated Reports
				</h2>
				<p className="text-gray-600">
					This is a placeholder for the AI-generated reports content.
				</p>
			</div>
		</DashboardContent>
	);
}
