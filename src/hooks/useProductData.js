/** @format */

import { useQuery } from 'react-query';
import { getProducts } from 'helpers';
import { useMainContext } from 'hooks';

export const useGetProducts = (sortBy, reverse, searchName, page, perPage) => {
	const { setUserData } = useMainContext();
	return useQuery({
		queryKey: ['products'],
		queryFn: () => getProducts(sortBy, reverse, searchName, page, perPage),
		onError: error => {
			if (error?.status === 401) {
				setUserData(null);
				window.location.reload();
			}
		},
		keepPreviousData: true,
	});
};
