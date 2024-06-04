/** @format */

import { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { MainContext } from 'helpers';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
	const { userData } = useContext(MainContext);

	return userData ? (
		<>
			<Header />
			<Container>
				<SideMenu />
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</Container>
		</>
	) : (
		<Suspense fallback={<Loader />}>
			<Outlet />
		</Suspense>
	);
};

export default SharedLayout;
