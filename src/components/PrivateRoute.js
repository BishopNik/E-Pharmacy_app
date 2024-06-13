/** @format */

import { useMainContext } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const { userData } = useMainContext();

	return !userData ? <Navigate to={redirectTo} /> : Component;
};
