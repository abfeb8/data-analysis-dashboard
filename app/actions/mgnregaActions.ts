'use server';

import {
	MGNREGAApiResponse,
	MgnregaState,
	MgnregaFinYear,
} from '@/types/mgnrega';

// Get API configuration from environment variables
const API_KEY = process.env.MGNREGA_API_KEY;
const API_URL = process.env.MGNREGA_API_URL;
const API_RESOURCE = process.env.MGNREGA_API_RESOURCE;

// Get cache duration from environment variables (default to 12 hours in seconds if not set)
const CACHE_REVALIDATION_TIME = parseInt(
	process.env.MGNREGA_CACHE_REVALIDATION_TIME || '43200',
	10
);

/**
 * Fetches MGNREGA district-wise data from data.gov.in API
 * @param limit Optional parameter to limit the number of records (default: 10)
 * @param offset Optional parameter for pagination offset (default: 0)
 * @returns Promise with MGNREGAApiResponse data
 */
export async function getData(
	limit: number = 10,
	offset: number = 0
): Promise<MGNREGAApiResponse> {
	try {
		const url = `${API_URL}/${API_RESOURCE}?api-key=${API_KEY}&format=json&limit=${limit}&offset=${offset}`;

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			next: { revalidate: CACHE_REVALIDATION_TIME },
		});

		if (!response.ok) {
			throw new Error(
				`MGNREGA API Error: ${response.status} ${response.statusText}`
			);
		}

		return (await response.json()) as MGNREGAApiResponse;
	} catch (error) {
		console.error('MGNREGA API fetch error:', error);
		throw error;
	}
}

/**
 * Fetches MGNREGA data with filter by state name
 * @param state The state enum value to filter results
 * @param limit Optional parameter to limit the number of records (default: 10)
 * @param offset Optional parameter for pagination offset (default: 0)
 * @returns Promise with MGNREGAApiResponse data filtered by state
 */
export async function getDataByState(
	state: MgnregaState,
	limit: number = 10,
	offset: number = 0
): Promise<MGNREGAApiResponse> {
	try {
		// URL encode the state name parameter
		const encodedStateName = encodeURIComponent(state);
		const url = `${API_URL}/${API_RESOURCE}?api-key=${API_KEY}&format=json&limit=${limit}&offset=${offset}&filters[state_name]=${encodedStateName}`;

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			next: { revalidate: CACHE_REVALIDATION_TIME },
		});

		if (!response.ok) {
			throw new Error(
				`MGNREGA API Error: ${response.status} ${response.statusText}`
			);
		}

		return (await response.json()) as MGNREGAApiResponse;
	} catch (error) {
		console.error('MGNREGA API fetch error:', error);
		throw error;
	}
}

/**
 * Fetches MGNREGA data with filter by both state name and financial year
 * @param state The state enum value to filter results
 * @param finYear The financial year enum value to filter results
 * @param limit Optional parameter to limit the number of records (default: 10)
 * @param offset Optional parameter for pagination offset (default: 0)
 * @returns Promise with MGNREGAApiResponse data filtered by state and financial year
 */
export async function getDataByStateAndFinYear(
	state: MgnregaState,
	finYear: MgnregaFinYear,
	limit: number = 10,
	offset: number = 0
): Promise<MGNREGAApiResponse> {
	try {
		// URL encode the parameters
		const encodedStateName = encodeURIComponent(state);
		const encodedFinYear = encodeURIComponent(finYear);

		const url = `${API_URL}/${API_RESOURCE}?api-key=${API_KEY}&format=json&limit=${limit}&offset=${offset}&filters[state_name]=${encodedStateName}&filters[fin_year]=${encodedFinYear}`;

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			next: { revalidate: CACHE_REVALIDATION_TIME },
		});

		if (!response.ok) {
			throw new Error(
				`MGNREGA API Error: ${response.status} ${response.statusText}`
			);
		}

		return (await response.json()) as MGNREGAApiResponse;
	} catch (error) {
		console.error('MGNREGA API fetch error:', error);
		throw error;
	}
}
