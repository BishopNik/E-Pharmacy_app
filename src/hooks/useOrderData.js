/** @format */

import { useQuery } from 'react-query';
import { getOrders } from 'helpers';
import { useMainContext } from 'hooks';

export const useGetOrders = (sortBy, reverse, searchName, page, perPage) => {
	const { setUserData } = useMainContext();
	return useQuery({
		queryKey: ['orders'],
		queryFn: () => getOrders(sortBy, reverse, searchName, page, perPage),
		onError: error => {
			if (error.message === '401') {
				setUserData(null);
				window.location.reload();
			}
		},
		keepPreviousData: true,
	});
};
