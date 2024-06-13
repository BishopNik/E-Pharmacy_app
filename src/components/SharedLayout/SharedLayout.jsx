/** @format */

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';
import { Container } from './SharedLayout.styled';
import { useMainContext } from 'hooks';

const SharedLayout = () => {
	const { userData } = useMainContext();

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
