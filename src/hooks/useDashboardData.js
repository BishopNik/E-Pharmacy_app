/** @format */

import { useQuery } from 'react-query';
import { fetchDataDashboard } from 'helpers';
import { useMainContext } from 'hooks';

export const useDashboardData = () => {
	const { setUserData } = useMainContext();
	return useQuery({
		queryKey: ['dashboardData'],
		queryFn: fetchDataDashboard,
		onError: error => {
			if (error.message === '401') {
				setUserData(null);
				window.location.reload();
			}
		},
	});
};
