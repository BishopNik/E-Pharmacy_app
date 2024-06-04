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

export const addProduct = async data => {
	try {
		const results = await API.post('/products', data);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error add product:', message);
		return null;
	}
};

export const addSupplier = async data => {
	try {
		const results = await API.post('/suppliers', data);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error add supplier:', message);
		return null;
	}
};
