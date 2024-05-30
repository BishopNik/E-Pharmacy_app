/** @format */

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
	AsideContainer,
	ContainerLink,
	ContainerIconPage,
	LinkStyled,
	IconPage,
} from './SideMenu.styled';

function SideMenu() {
	const location = useLocation();
	const page = location.pathname;

	return (
		<AsideContainer>
			<ContainerLink>
				<ContainerIconPage>
					<LinkStyled to='/dashboard'>
						<IconPage
							name='dashboard'
							active={(page === '/dashboard').toString()}
							width={12}
							height={12}
						/>
					</LinkStyled>
				</ContainerIconPage>
				<ContainerIconPage>
					<LinkStyled to='/orders'>
						<IconPage
							name='order'
							active={(page === '/orders').toString()}
							width={14}
							height={14}
						/>
					</LinkStyled>
				</ContainerIconPage>
				<ContainerIconPage>
					<LinkStyled to='/products'>
						<IconPage
							name='product'
							active={(page === '/products').toString()}
							width={12}
							height={14}
						/>
					</LinkStyled>
				</ContainerIconPage>
				<ContainerIconPage>
					<LinkStyled to='/suppliers'>
						<IconPage
							name='supplier'
							active={(page === '/suppliers').toString()}
							width={12}
							height={14}
						/>
					</LinkStyled>
				</ContainerIconPage>
				<ContainerIconPage>
					<LinkStyled to='/customers'>
						<IconPage
							name='customer'
							active={(page === '/customers').toString()}
							width={14}
							height={11}
						/>
					</LinkStyled>
				</ContainerIconPage>
			</ContainerLink>
		</AsideContainer>
	);
}

export default SideMenu;
