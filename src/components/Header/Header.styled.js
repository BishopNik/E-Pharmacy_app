/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const HeaderMain = styled.header`
	border-bottom: 1px solid var(--accent-disabled);
	width: 375px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		width: 768px;
	}

	@media screen and (min-width: 1440px) {
		width: 100vw;
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 335px;
	margin-right: auto;
	padding: 17px 20px;
	font-family: var(--font-family);

	@media screen and (min-width: 768px) {
		width: 768px;
		padding: 15px 32px;
	}

	@media screen and (min-width: 1440px) {
		width: 1440px;
		padding: 15px 20px;
		margin-left: auto;
	}
`;

export const HeaderBurgerMenu = styled(Icon)`
	width: 32px;
	height: 32px;
	stroke: var(--main-black);
	margin-right: 20px;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		margin-right: 16px;
	}

	@media screen and (min-width: 1440px) {
		display: none;
	}
`;

export const HeaderLogo = styled.img`
	width: 32px;
	margin-right: 20px;

	@media screen and (min-width: 768px) {
		width: 40px;
		margin-right: 32px;
	}

	@media screen and (min-width: 1440px) {
		margin-right: 60px;
	}
`;

export const HeaderTitleContainer = styled.ul`
	margin-right: 1063px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 4px;

	@media screen and (max-width: 1440px) {
		margin-right: 0;
	}
`;

export const HeaderTitleInfo = styled.ul`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const HeaderTitleInfoSplit = styled.div`
	width: 1px;
	height: 12px;
	background: var(--text-grey);
`;

export const HeaderTitleText = styled.h1`
	font-weight: 600;
	font-size: 20px;
	line-height: 117%;
	color: var(--main-black);

	@media screen and (min-width: 768px) {
		font-size: 24px;
	}
`;

export const HeaderUserInfo = styled.span`
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: var(--text-grey);
`;

export const HeaderLogout = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	padding: 15px;
	border-radius: 50%;
	border: none;
	background: var(--accent);
	box-shadow: 0 -1px 7px 0 rgba(71, 71, 71, 0.05);
	cursor: pointer;

	&:hover {
		background: var(--accent-hover);
	}

	@media screen and (max-width: 1440px) {
		display: none;
	}
`;

export const HeaderIconLogout = styled(Icon)`
	width: 13px;
	height: 14px;
`;
