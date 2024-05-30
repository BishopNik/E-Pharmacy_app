/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const HeaderMain = styled.header`
	border-bottom: 1px solid var(--accent-disabled);
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 1440px;
	margin-left: auto;
	margin-right: auto;
	padding: 15px 20px;
	font-family: var(--font-family);
`;

export const HeaderLogo = styled.img`
	width: 40px;
	margin-right: 60px;
`;

export const HeaderTitleContainer = styled.ul`
	margin-right: 1063px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 4px;
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
	font-size: 24px;
	line-height: 117%;
	color: var(--main-black);
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
`;

export const HeaderIconLogout = styled(Icon)`
	width: 13px;
	height: 14px;
`;
