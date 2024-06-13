/** @format */

import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from 'img/Logo/logo-main.png';
import logo2x from 'img/Logo/logo-main@2x.png';
import {
	HeaderMain,
	HeaderContainer,
	HeaderLogo,
	HeaderUserInfo,
	HeaderTitleContainer,
	HeaderTitleText,
	HeaderTitleInfo,
	HeaderTitleInfoSplit,
	HeaderLogout,
	HeaderIconLogout,
} from './Header.styled';
import { logout } from 'helpers';
import { useMainContext } from 'hooks';

function Header({ children }) {
	const {
		userData: { user },
		setIsLoading,
		setUserData,
	} = useMainContext();
	const location = useLocation();
	const page = location.pathname;

	const handlerLogout = async () => {
		setIsLoading(true);
		const res = await logout();
		setIsLoading(false);
		if (res) return;
		setUserData(res);
	};

	const pageTitle = page => {
		switch (page) {
			case '/dashboard':
				return 'Dashboard';

			case '/products':
				return 'All products';

			case '/orders':
				return 'All orders';

			case '/suppliers':
				return 'All suppliers';

			case '/customers':
				return 'All customers';
			default:
				break;
		}
	};

	return (
		<HeaderMain>
			<HeaderContainer>
				<HeaderLogo
					srcSet={`${logo} 1x, ${logo2x} 2x`}
					src={logo}
					alt='Logo'
					loading='lazy'
				/>
				<HeaderTitleContainer>
					<li>
						<HeaderTitleText>Medicine store</HeaderTitleText>
					</li>
					<li>
						<HeaderTitleInfo>
							<li>
								<HeaderUserInfo>{pageTitle(page)}</HeaderUserInfo>
							</li>
							<li>
								<HeaderTitleInfoSplit />
							</li>
							<li>
								<HeaderUserInfo>{user.email}</HeaderUserInfo>
							</li>
						</HeaderTitleInfo>
					</li>
				</HeaderTitleContainer>
				<HeaderLogout type='button' onClick={handlerLogout}>
					<HeaderIconLogout name='logout' />
				</HeaderLogout>
			</HeaderContainer>
			{children}
		</HeaderMain>
	);
}

export default Header;
