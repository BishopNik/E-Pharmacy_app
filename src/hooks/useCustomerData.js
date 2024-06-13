/** @format */

import { useQuery } from 'react-query';
import { getCustomers, getCustomerById } from 'helpers';
import { useMainContext } from 'hooks';

export const useGetCustomers = (sortBy, reverse, searchName, page, perPage) => {
	const { setUserData } = useMainContext();
	return useQuery({
		queryKey: ['customers'],
		queryFn: () => getCustomers(sortBy, reverse, searchName, page, perPage),
		onError: error => {
			if (error.message === '401') {
				setUserData(null);
				window.location.reload();
			}
		},
		keepPreviousData: true,
	});
};

export const useGetCustomer = customerId => {
	const { setUserData } = useMainContext();
	return useQuery({
		queryKey: ['customer'],
		queryFn: () => getCustomerById(customerId),
		onError: error => {
			if (error.message === '401') {
				setUserData(null);
				window.location.reload();
			}
		},
		keepPreviousData: true,
	});
};
