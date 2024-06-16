/** @format */

import styled from 'styled-components';

export const TableContainer = styled.div`
	width: 335px;
	border: 1px solid var(--accent-disabled);
	border-radius: 8px;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 704px;
	}

	@media screen and (min-width: 1440px) {
		width: 630px;
	}
`;

export const TableTitle = styled.h2`
	padding: 14px;
	background: var(--background);
	font-weight: 600;
	font-size: 18px;
	line-height: 133%;
	color: var(--main-black);

	@media screen and (min-width: 768px) {
		padding: 20px;
	}
`;

export const TableBody = styled.table`
	width: 100%;
	padding: 0 14px;
	background: var(--background-3);
	border-spacing: 0;

	@media screen and (min-width: 768px) {
		padding: 0 20px;
	}
`;

export const TableTh = styled.th`
	padding: 14px;
	border-right: 1px solid var(--accent-disabled);
	border-bottom: 1px solid var(--accent-disabled);
	text-align: left;

	font-weight: 500;
	font-size: 14px;
	line-height: 129%;
	color: var(--text-grey);

	width: ${({ type }) => {
		switch (type) {
			case 'name':
				return '88px';
			case 'email':
				return '151px';
			case 'spent':
				return 'auto';

			default:
				break;
		}
	}};

	@media screen and (min-width: 768px) {
		padding: 20px;
		width: ${({ type }) => {
			switch (type) {
				case 'name':
					return '235px';
				case 'email':
					return '279px';
				case 'spent':
					return 'auto';

				default:
					break;
			}
		}};
	}

	@media screen and (min-width: 1440px) {
		width: ${({ type }) => {
			switch (type) {
				case 'name':
					return '203px';
				case 'email':
					return '269px';
				case 'spent':
					return 'auto';

				default:
					break;
			}
		}};
	}

	&:first-child {
		padding-left: 0;
		border-left: none;
	}
	&:last-child {
		padding-right: 0;
		border-right: none;
	}
`;

export const TableTd = styled.td`
	padding: 14px 0 14px 14px;
	border-right: 1px solid var(--accent-disabled);
	border-bottom: 1px solid var(--accent-disabled);
	text-align: left;

	font-weight: 500;
	font-size: 12px;
	line-height: 112%;
	color: var(--main-black);

	&:first-child {
		padding-left: 0;
		border-left: none;
	}

	&:last-child {
		padding-right: 0;
		border-right: none;
	}

	@media screen and (min-width: 768px) {
		font-size: 16px;
		padding: 20px 0 20px 20px;
	}
`;

export const TableTr = styled.tr`
	&:last-child td {
		border-bottom: none;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;
	gap: 8px;
	max-width: 84px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}

	@media screen and (min-width: 768px) {
		max-width: 235px;
	}

	@media screen and (min-width: 1440px) {
		max-width: 205px;
	}
`;

export const UserLogo = styled.img`
	border-radius: 50%;
	width: 36px;
	height: 36px;
`;

export const UserName = styled.p`
	width: 100%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const UserEmail = styled.p`
	max-width: 133px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		max-width: 259px;
	}
`;
