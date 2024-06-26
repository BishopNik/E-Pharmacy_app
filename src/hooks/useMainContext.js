/** @format */

import React, { createContext, useEffect, useState, useContext } from 'react';
import { API, refresh } from 'helpers';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!userData) return;
		localStorage.setItem('token', userData.token);
		API.interceptors.request.use(
			config => {
				config.headers.Authorization = `Bearer ${userData.token}`;
				return config;
			},
			error => {
				return Promise.reject(error);
			}
		);
	}, [userData]);

	useEffect(() => {
		const requestInterceptor = API.interceptors.request.use(
			config => {
				const token = localStorage.getItem('token');
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}
				return config;
			},
			error => {
				return Promise.reject(error);
			}
		);

		const token = localStorage.getItem('token');
		if (token) {
			(async () => {
				setIsLoading(true);
				try {
					const userData = await refresh();
					if (userData.user) setUserData(userData);
				} catch (error) {
					console.error('Failed to refresh token:', error);
				} finally {
					setIsLoading(false);
				}
			})();
		}

		return () => {
			API.interceptors.request.eject(requestInterceptor);
		};
	}, []);

	return (
		<MainContext.Provider
			value={{
				userData,
				setUserData,
				isLoading,
				setIsLoading,
				error,
				setError,
				page,
				setPage,
				totalPages,
				setTotalPages,
				isOpen,
				setIsOpen,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => {
	return useContext(MainContext);
};
