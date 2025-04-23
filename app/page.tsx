import React from 'react';
import DashboardContent from './components/layouts/DashboardContent';
import DashboardCard from './components/ui/DashboardCard';

export default function Home() {
	return (
		<DashboardContent title="Dashboard">
			<DashboardCard title="Budget Allocation">
				<div className="flex items-center justify-center h-full text-gray-500">
					Budget Allocation Chart will be here
				</div>
			</DashboardCard>

			<DashboardCard title="Beneficiaries">
				<div className="flex items-center justify-center h-full text-gray-500">
					Beneficiaries Chart will be here
				</div>
			</DashboardCard>

			<DashboardCard title="State-wise Fund Utilization Rate">
				<div className="flex items-center justify-center h-full text-gray-500">
					State-wise Utilization Chart will be here
				</div>
			</DashboardCard>

			<DashboardCard title="Growth in Pending Liabilities">
				<div className="flex items-center justify-center h-full text-gray-500">
					Growth in Liabilities Chart will be here
				</div>
			</DashboardCard>

			<DashboardCard
				title="Trends in Wage Payments"
				className="col-span-1 lg:col-span-2"
			>
				<div className="flex items-center justify-center h-full text-gray-500">
					Wage Payments Trend Chart will be here
				</div>
			</DashboardCard>
		</DashboardContent>
	);
}
