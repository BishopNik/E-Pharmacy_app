/** @format */

import { handleApiError } from './handleApiError';
import { API } from './auth';

const generateQueryString = params =>
	Object.entries(params)
		.filter(([key, value]) => value !== undefined && value !== null && value !== '')
		.map(([key, value]) => `${key}=${value}`)
		.join('&');

export const getResource = async (resource, params) => {
	const resourceString = params ? `/${resource}?${generateQueryString(params)}` : `/${resource}`;

	try {
		const results = await API.get(resourceString);
		return results.data;
	} catch (error) {
		handleApiError(error, `fetching ${resource}`);
	}
};
