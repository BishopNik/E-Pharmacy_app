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
import Tooltip from 'components/Tooltip';

function SideMenu() {
	const location = useLocation();
	const page = location.pathname;

	return (
		<AsideContainer>
			<ContainerLink>
				<ContainerIconPage>
					<Tooltip text='Dashboard'>
						<LinkStyled to='/dashboard' active={(page === '/dashboard').toString()}>
							<IconPage name='dashboard' width={12} height={12} />
						</LinkStyled>
					</Tooltip>
				</ContainerIconPage>
				<ContainerIconPage>
					<Tooltip text='Orders'>
						<LinkStyled to='/orders' active={(page === '/orders').toString()}>
							<IconPage name='order' width={14} height={14} />
						</LinkStyled>
					</Tooltip>
				</ContainerIconPage>
				<ContainerIconPage>
					<Tooltip text='Products'>
						<LinkStyled to='/products' active={(page === '/products').toString()}>
							<IconPage name='product' width={12} height={14} />
						</LinkStyled>
					</Tooltip>
				</ContainerIconPage>
				<ContainerIconPage>
					<Tooltip text='Suppliers'>
						<LinkStyled to='/suppliers' active={(page === '/suppliers').toString()}>
							<IconPage name='supplier' width={12} height={14} />
						</LinkStyled>
					</Tooltip>
				</ContainerIconPage>
				<ContainerIconPage>
					<Tooltip text='Customers'>
						<LinkStyled to='/customers' active={(page === '/customers').toString()}>
							<IconPage name='customer' width={14} height={11} />
						</LinkStyled>
					</Tooltip>
				</ContainerIconPage>
			</ContainerLink>
		</AsideContainer>
	);
}

export default SideMenu;
