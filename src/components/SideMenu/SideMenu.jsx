/** @format */

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMainContext } from 'hooks';
import Tooltip from 'components/Tooltip';
import { logout } from 'helpers';
import {
	AsideContainer,
	ContainerLink,
	ContainerIconPage,
	LinkStyled,
	IconPage,
	HeaderLogout,
	HeaderIconLogout,
	CloseButton,
	IconClose,
	BackDrop,
} from './SideMenu.styled';

function SideMenu() {
	const { setIsLoading, setUserData, isOpen, setIsOpen } = useMainContext();
	const location = useLocation();
	const page = location.pathname;

	const handlerLogout = async () => {
		setIsLoading(true);
		const res = await logout();
		setIsLoading(false);
		if (res) return;
		setUserData(null);
	};

	const handlerClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<AsideContainer $isOpen={isOpen}>
				<CloseButton type='button' onClick={handlerClose}>
					<IconClose name='close' />
				</CloseButton>
				<ContainerLink>
					<ContainerIconPage>
						<Tooltip text='Dashboard'>
							<LinkStyled
								to='/dashboard'
								active={(page === '/dashboard').toString()}
								onClick={handlerClose}
							>
								<IconPage name='dashboard' width={12} height={12} />
							</LinkStyled>
						</Tooltip>
					</ContainerIconPage>
					<ContainerIconPage>
						<Tooltip text='Orders'>
							<LinkStyled
								to='/orders'
								active={(page === '/orders').toString()}
								onClick={handlerClose}
							>
								<IconPage name='order' width={14} height={14} />
							</LinkStyled>
						</Tooltip>
					</ContainerIconPage>
					<ContainerIconPage>
						<Tooltip text='Products'>
							<LinkStyled
								to='/products'
								active={(page === '/products').toString()}
								onClick={handlerClose}
							>
								<IconPage name='product' width={12} height={14} />
							</LinkStyled>
						</Tooltip>
					</ContainerIconPage>
					<ContainerIconPage>
						<Tooltip text='Suppliers'>
							<LinkStyled
								to='/suppliers'
								active={(page === '/suppliers').toString()}
								onClick={handlerClose}
							>
								<IconPage name='supplier' width={12} height={14} />
							</LinkStyled>
						</Tooltip>
					</ContainerIconPage>
					<ContainerIconPage>
						<Tooltip text='Customers'>
							<LinkStyled
								to='/customers'
								active={(page === '/customers').toString()}
								onClick={handlerClose}
							>
								<IconPage name='customer' width={14} height={11} />
							</LinkStyled>
						</Tooltip>
					</ContainerIconPage>
				</ContainerLink>
				<HeaderLogout type='button' onClick={handlerLogout}>
					<HeaderIconLogout name='logout' />
				</HeaderLogout>
			</AsideContainer>
			<BackDrop $isOpen={isOpen} onClick={handlerClose} />
		</>
	);
}

export default SideMenu;
