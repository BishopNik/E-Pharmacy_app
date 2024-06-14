/** @format */

import { API } from './auth';
import { handleApiError, getResource } from 'helpers';

//Dashboard
export const fetchDataDashboard = async () => {
	return getResource('dashboard');
};

//Orders
export const getOrders = async params => {
	return getResource('orders', params);
};

//Customers
export const getCustomers = async params => {
	return getResource('customers', params);
};

export const getCustomerById = async customerId => {
	try {
		const results = await API.get(`/customers/${customerId}`);
		return results.data;
	} catch (error) {
		handleApiError(error, 'fetching customer');
	}
};

//Products
export const getProducts = async params => {
	return getResource('products', params);
};

export const addProduct = async data => {
	try {
		const results = await API.post('/products', data);
		return results.data;
	} catch (error) {
		handleApiError(error, 'adding product');
	}
};

export const editProductById = async (data, productId) => {
	try {
		const results = await API.put(`/products/${productId}`, data);
		return results.data;
	} catch (error) {
		handleApiError(error, 'editing product');
	}
};

export const deleteProductById = async productId => {
	try {
		const results = await API.delete(`/products/${productId}`);
		return results.data;
	} catch (error) {
		handleApiError(error, 'deleting product');
	}
};

//Suppliers
export const getSuppliers = async params => {
	return getResource('suppliers', params);
};

export const addSupplier = async data => {
	try {
		const results = await API.post('/suppliers', data);
		return results.data;
	} catch (error) {
		handleApiError(error, 'adding supplier');
	}
};

export const editSupplierById = async (data, supplierId) => {
	try {
		const results = await API.put(`/suppliers/${supplierId}`, data);
		return results.data;
	} catch (error) {
		handleApiError(error, 'editing supplier');
	}
};
