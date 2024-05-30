/** @format */

import { MainContext } from 'helpers';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const { userData } = useContext(MainContext);

	return !userData ? <Navigate to={redirectTo} /> : Component;
};
