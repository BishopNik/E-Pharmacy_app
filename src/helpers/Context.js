/** @format */

import React, { createContext, useEffect, useState } from 'react';
import { API, refresh } from 'helpers';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		if (!user) return;
		localStorage.setItem('token', user.token);
		API.interceptors.request.use(
			config => {
				config.headers.Authorization = `Bearer ${user.token}`;
				return config;
			},
			error => {
				return Promise.reject(error);
			}
		);
	}, [user]);

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

		(async () => {
			setIsLoading(true);
			const user = await refresh();
			setUser(user);
			setIsLoading(false);
		})();

		return () => {
			API.interceptors.request.eject(requestInterceptor);
		};
	}, []);

	return (
		<MainContext.Provider
			value={{
				user,
				setUser,
				isLoading,
				setIsLoading,
				error,
				setError,
				page,
				setPage,
				totalPages,
				setTotalPages,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};
