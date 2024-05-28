/** @format */

import { MainContext } from 'helpers';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
	const { user } = useContext(MainContext);

	return user ? <Navigate to={redirectTo} /> : Component;
};
