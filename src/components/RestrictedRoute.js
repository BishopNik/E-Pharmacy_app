/** @format */

import { useMainContext } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
	const { userData } = useMainContext();

	return userData ? <Navigate to={redirectTo} /> : Component;
};
