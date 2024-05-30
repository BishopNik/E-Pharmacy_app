/** @format */

import axios from 'axios';
import { toastError } from './toastwindow';

export const API = axios.create({
	baseURL: 'https://e-pharmacy-v77l.onrender.com/api',
});

export const login = async data => {
	try {
		const user = await API.post('/users/login', data);
		return user.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('User login error:', message);
		return null;
	}
};

export const refresh = async () => {
	try {
		const user = await API.get('/users/refresh');
		return user.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error refreshing user:', message);
		return null;
	}
};

export const logout = async () => {
	try {
		await API.get('/users/logout');
		return null;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Logout error:', message);
	}
};

export const getUserInfo = async () => {
	try {
		const user = await API.get('/users/user-info');
		return user.data;
	} catch ({
		response: {
			data: { message },
		},
	}) {
		toastError('Error fetching user info:', message);
		return message;
	}
};
