/** @format */

import { API } from './auth';
import { toastError } from './toastwindow';

export const fetchDataDashboard = async () => {
	try {
		const results = await API.get('/dashboard');
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error fetching data:', message);
	}
};
