// MGNREGA API Response Types

// State names enum
export enum MgnregaState {
	ANDAMAN_AND_NICOBAR = 'ANDAMAN AND NICOBAR',
	ANDHRA_PRADESH = 'ANDHRA PRADESH',
	ARUNACHAL_PRADESH = 'ARUNACHAL PRADESH',
	ASSAM = 'ASSAM',
	BIHAR = 'BIHAR',
	CHHATTISGARH = 'CHHATTISGARH',
	DN_HAVELI_AND_DD = 'DN HAVELI AND DD',
	GOA = 'GOA',
	GUJARAT = 'GUJARAT',
	HARYANA = 'HARYANA',
	HIMACHAL_PRADESH = 'HIMACHAL PRADESH',
	JAMMU_AND_KASHMIR = 'JAMMU AND KASHMIR',
	JHARKHAND = 'JHARKHAND',
	KARNATAKA = 'KARNATAKA',
	KERALA = 'KERALA',
	LADAKH = 'LADAKH',
	LAKSHADWEEP = 'LAKSHADWEEP',
	MADHYA_PRADESH = 'MADHYA PRADESH',
	MAHARASHTRA = 'MAHARASHTRA',
	MANIPUR = 'MANIPUR',
	MEGHALAYA = 'MEGHALAYA',
	MIZORAM = 'MIZORAM',
	NAGALAND = 'NAGALAND',
	ODISHA = 'ODISHA',
	PUDUCHERRY = 'PUDUCHERRY',
	PUNJAB = 'PUNJAB',
	RAJASTHAN = 'RAJASTHAN',
	SIKKIM = 'SIKKIM',
	TAMIL_NADU = 'TAMIL NADU',
	TELANGANA = 'TELANGANA',
	TRIPURA = 'TRIPURA',
	UTTAR_PRADESH = 'UTTAR PRADESH',
	UTTARAKHAND = 'UTTARAKHAND',
	WEST_BENGAL = 'WEST BENGAL',
}

// Financial years enum
export enum MgnregaFinYear {
	FY_2018_2019 = '2018-2019',
	FY_2019_2020 = '2019-2020',
	FY_2020_2021 = '2020-2021',
	FY_2021_2022 = '2021-2022',
	FY_2022_2023 = '2022-2023',
	FY_2023_2024 = '2023-2024',
	FY_2024_2025 = '2024-2025',
}

// Months enum
export enum MgnregaMonth {
	JAN = '01',
	FEB = '02',
	MAR = '03',
	APR = '04',
	MAY = '05',
	JUN = '06',
	JUL = '07',
	AUG = '08',
	SEP = '09',
	OCT = '10',
	NOV = '11',
	DEC = '12',
}

// Field definition interface
export interface MGNREGAField {
	name: string;
	id: string;
	type: string;
}

// Target bucket interface
export interface TargetBucket {
	index: string;
	type: string;
}

// Order interface
export interface OrderField {
	name: string;
	id: string;
}

// Aggregation item interface
export interface AggregationItem {
	[key: string]: string;
}

// Field exposed interface (same structure as MGNREGAField)
export interface FieldExposed {
	name: string;
	id: string;
	type: string;
}

// District record interface
export interface MGNREGARecord {
	fin_year: string;
	month: string;
	state_code: string;
	state_name: string;
	district_code: string;
	district_name: string;
	Approved_Labour_Budget: string;
	Average_Wage_rate_per_day_per_person: string;
	Average_days_of_employment_provided_per_Household: string;
	Differently_abled_persons_worked: string;
	Material_and_skilled_Wages: string;
	Number_of_Completed_Works: string;
	Number_of_GPs_with_NIL_exp: string;
	Number_of_Ongoing_Works: string;
	Persondays_of_Central_Liability_so_far: string;
	SC_persondays: string;
	SC_workers_against_active_workers: string;
	ST_persondays: string;
	ST_workers_against_active_workers: string;
	Total_Adm_Expenditure: string;
	Total_Exp: string;
	Total_Households_Worked: string;
	Total_Individuals_Worked: string;
	Total_No_of_Active_Job_Cards: string;
	Total_No_of_Active_Workers: string;
	Total_No_of_HHs_completed_100_Days_of_Wage_Employment: string;
	Total_No_of_JobCards_issued: string;
	Total_No_of_Workers: string;
	Total_No_of_Works_Takenup: string;
	Wages: string;
	Women_Persondays: string;
	percent_of_Category_B_Works: string;
	percent_of_Expenditure_on_Agriculture_Allied_Works: string;
	percent_of_NRM_Expenditure: string;
	percentage_payments_gererated_within_15_days: string;
	Remarks: string;
}

// Main MGNREGA API response interface
export interface MGNREGAApiResponse {
	index_name: string;
	title: string;
	desc: string;
	org_type: string;
	org: string[];
	sector: string[];
	source: string;
	catalog_uuid: string;
	visualizable: string;
	active: string;
	created: number;
	updated: number;
	created_date: string;
	updated_date: string;
	external_ws: number;
	external_ws_url: string;
	target_bucket: TargetBucket;
	field: MGNREGAField[];
	field_dependent: any[]; // Empty array in the example
	order: OrderField[];
	aggregation: AggregationItem[];
	field_exposed: FieldExposed[];
	message: string;
	version: string;
	status: string;
	total: number;
	count: number;
	limit: string;
	offset: string;
	records: MGNREGARecord[];
}
