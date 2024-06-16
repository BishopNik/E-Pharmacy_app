/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';

export const AsideContainer = styled.aside`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	background: var(--background-2);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	height: 100%;
	scale: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
	padding-bottom: 20px;
	outline: 1px solid var(--accent-disabled);

	@media screen and (min-width: 1440px) {
		position: relative;
		border-right: 1px solid var(--accent-disabled);
		height: calc(100vh - 82px);
		scale: 1;
		outline: none;
	}
`;

export const ContainerLink = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 14px;
	padding: 92px 18px 20px 18px;

	@media screen and (min-width: 768px) {
		padding: 100px 20px 20px 20px;
	}

	@media screen and (min-width: 1440px) {
		padding: 40px 18px;
	}
`;

export const ContainerIconPage = styled.li`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background: var(--background-3);

	@media screen and (min-width: 768px) {
		width: 44px;
		height: 44px;
	}
`;

export const LinkStyled = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	fill: ${({ active }) => (active === 'true' ? 'var(--accent)' : 'var(--text)')};

	&:hover {
		fill: var(--accent);
	}
`;

export const IconPage = styled(Icon)`
	fill: inherit;
`;

export const HeaderLogout = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 38px;
	height: 38px;
	padding: 15px;
	border-radius: 50%;
	border: none;
	background: var(--accent);
	box-shadow: 0 -1px 7px 0 rgba(71, 71, 71, 0.05);
	cursor: pointer;

	&:hover {
		background: var(--accent-hover);
	}

	@media screen and (min-width: 768px) {
		width: 44px;
		height: 44px;
	}

	@media screen and (min-width: 1440px) {
		display: none;
	}
`;

export const HeaderIconLogout = styled(Icon)`
	width: 13px;
	height: 14px;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media screen and (min-width: 1440px) {
		display: none;
	}
`;

export const IconClose = styled(Icon)`
	width: 32px;
	height: 32px;
	stroke: var(--main-black);

	&:hover {
		stroke: var(--accent-hover);
	}
`;

export const BackDrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 50;
	background: rgba(29, 30, 33, 0.3);

	scale: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;
