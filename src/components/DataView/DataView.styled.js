/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const Main = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: ${({ type }) =>
		type === 'products' ? '1px solid var(--accent)' : '1px solid var(--accent-disabled)'};
	border-radius: 8px;
	padding: 14px 18px;
	width: 158px;
	height: 108px;
	background: var(--background-3);
	color: var(--main-black);

	@media screen and (min-width: 768px) {
		width: 221px;
	}

	@media screen and (min-width: 1440px) {
		width: 240px;
	}
`;

export const DataTitleContainer = styled.ul`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const DataName = styled.span`
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: rgba(29, 30, 33, 0.4);
`;

export const DataCount = styled.p`
	font-family: var(--font-family);
	font-weight: 600;
	font-size: 24px;
	line-height: 133%;
`;

export const DataIcon = styled(Icon)`
	width: 20px;
	height: 20px;
	fill: transparent;
`;
