/** @format */

import { useQuery } from 'react-query';
import { getSuppliers } from 'helpers';
import { useMainContext } from 'hooks';

export const useGetSuppliers = (sortBy, reverse, searchName, page, perPage) => {
	const { setUserData } = useMainContext();
	return useQuery({
		queryKey: ['suppliers'],
		queryFn: () => getSuppliers(sortBy, reverse, searchName, page, perPage),
		onError: error => {
			if (error.message === '401') {
				setUserData(null);
				window.location.reload();
			}
		},
		keepPreviousData: true,
	});
};
