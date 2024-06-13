/** @format */

import { API } from './auth';
import { toastError } from './toastwindow';

const generateQueryString = params =>
	Object.entries(params)
		.filter(([key, value]) => value !== undefined && value !== null && value !== '')
		.map(([key, value]) => `${key}=${value}`)
		.join('&');

//Dashboard
export const fetchDataDashboard = async () => {
	try {
		const results = await API.get(`/dashboard`);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error fetching data:', message);
	}
};

//Orders
export const getOrders = async params => {
	const queryString = generateQueryString(params);

	try {
		const results = await API.get(`/orders?${queryString}`);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error fetching orders:', message);
		return null;
	}
};

//Customers
export const getCustomers = async params => {
	const queryString = generateQueryString(params);

	try {
		const results = await API.get(`/customers?${queryString}`);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error fetching customers:', message);
		return null;
	}
};

export const getCustomerById = async customerId => {
	try {
		const results = await API.get(`/customers/${customerId}`);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error fetching customer:', message);
		return null;
	}
};

//Products
export const getProducts = async params => {
	const queryString = generateQueryString(params);

	try {
		const results = await API.get(`/products?${queryString}`);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error fetching product:', message);
		return null;
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
		toastError('Error adding product:', message);
		return null;
	}
};

export const editProductById = async (data, productId) => {
	try {
		const results = await API.put(`/products/${productId}`, data);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error editing product:', message);
		return null;
	}
};

export const deleteProductById = async productId => {
	try {
		const results = await API.delete(`/products/${productId}`);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error deleting product:', message);
		return null;
	}
};

//Suppliers
export const getSuppliers = async params => {
	const queryString = generateQueryString(params);

	try {
		const results = await API.get(`/suppliers?${queryString}`);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error fetching suppliers:', message);
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
		toastError('Error adding supplier:', message);
		return null;
	}
};

export const editSupplierById = async (data, supplierId) => {
	try {
		const results = await API.put(`/suppliers/${supplierId}`, data);
		return results.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error editing supplier:', message);
		return null;
	}
};
