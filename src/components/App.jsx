/** @format */

import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const LoginPage = lazy(() => import('pages/LoginPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage'));
const DataPage = lazy(() => import('pages/DataPage'));
const UnknownPage = lazy(() => import('pages/UnknownPage'));

function App() {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route
					index
					element={<RestrictedRoute component={<LoginPage />} redirectTo='/dashboard' />}
				/>
				<Route
					path='/dashboard'
					element={<PrivateRoute component={<DashboardPage />} redirectTo='/' />}
				/>
				<Route
					path='/orders'
					element={<PrivateRoute component={<DataPage />} redirectTo='/' />}
				/>
				<Route
					path='/products'
					element={<PrivateRoute component={<DataPage />} redirectTo='/' />}
				/>
				<Route
					path='/suppliers'
					element={<PrivateRoute component={<DataPage />} redirectTo='/' />}
				/>
				<Route
					path='/customers'
					element={<PrivateRoute component={<DataPage />} redirectTo='/' />}
				/>
				<Route path='*' element={<UnknownPage />} />
			</Route>
		</Routes>
	);
}

export default App;
