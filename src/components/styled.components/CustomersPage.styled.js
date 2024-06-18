/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	flex: 1;
	padding: 40px 0 20px 20px;

	@media screen and (min-width: 768px) {
		width: 960px;
		padding-top: 50px;
		padding-left: 32px;
	}

	@media screen and (min-width: 1440px) {
		padding-top: 75px;
		padding-left: 40px;
	}
`;

export const TableContainer = styled.div`
	border: 1px solid var(--accent-disabled);
	border-radius: 8px;
	margin-bottom: 20px;
	width: calc(100vw - 20px);
	overflow: scroll;

	@media screen and (max-width: 768px) {
		max-width: 673px;
	}

	@media screen and (min-width: 768px) {
		width: 768px;
		overflow: scroll;
	}

	@media screen and (min-width: 1024px) {
		width: 962px;
	}

	@media screen and (min-width: 1440px) {
		width: 1282px;
	}
`;

export const TableTitle = styled.h2`
	padding: 14px;
	background: var(--background);
	font-weight: 600;
	font-size: 16px;
	line-height: 133%;
	color: var(--main-black);
	width: 671px;

	@media screen and (min-width: 768px) {
		width: 960px;
		font-size: 18px;
		padding: 20px;
	}

	@media screen and (min-width: 1440px) {
		width: 1280px;
	}
`;

export const TableBody = styled.table`
	width: 671px;
	padding: 0 14px;
	background: var(--background-3);
	border-spacing: 0;

	@media screen and (min-width: 768px) {
		width: 960px;
		padding: 0 20px;
	}

	@media screen and (min-width: 1440px) {
		width: 1280px;
	}
`;

export const TableTh = styled.th`
	padding: 14px;
	border-right: 1px solid var(--accent-disabled);
	border-bottom: 1px solid var(--accent-disabled);
	text-align: left;

	font-weight: 500;
	font-size: 12px;
	line-height: 117%;
	color: var(--text-grey);
	cursor: ${({ $reverse, $sortBy, type }) =>
		$sortBy === type ? ($reverse ? 's-resize' : 'n-resize') : 'pointer'};

	width: ${({ type }) => {
		switch (type) {
			case 'name':
				return '94px';
			case 'email':
				return '161px';
			case 'address':
				return '120px';
			case 'phone':
				return '148px';
			case 'register_date':
				return 'auto';

			default:
				break;
		}
	}};

	@media screen and (min-width: 768px) {
		font-size: 14px;
		line-height: 129%;
		padding: 20px;
		width: ${({ type }) => {
			switch (type) {
				case 'name':
					return '195px';
				case 'email':
					return '223px';
				case 'address':
					return '148px';
				case 'phone':
					return '198px';
				case 'register_date':
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
					return '240px';
				case 'email':
					return '299px';
				case 'address':
					return '213px';
				case 'phone':
					return '263px';
				case 'register_date':
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
	height: 76px;
	padding: 14px;
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
		padding: 20px;
		font-size: 16px;
	}
`;

export const TableTr = styled.tr`
	&:last-child td {
		border-bottom: none;
	}
`;

export const EmailContainer = styled.p`
	width: 132px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 193px;
	}

	@media screen and (min-width: 1440px) {
		width: 258px;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;
	gap: 8px;
	width: 93px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}

	@media screen and (min-width: 768px) {
		width: 175px;
	}

	@media screen and (min-width: 1440px) {
		width: 220px;
	}
`;

export const UserLogo = styled.img`
	border-radius: 50%;
	width: 24px;
	height: 24px;

	@media screen and (min-width: 768px) {
		width: 36px;
		height: 36px;
	}
`;

export const UserName = styled.p`
	width: 80px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: auto;
	}

	@media screen and (min-width: 1440px) {
		width: auto;
	}
`;

export const AddressContainer = styled.p`
	width: 91px;

	@media screen and (min-width: 768px) {
		width: 108px;
	}

	@media screen and (min-width: 1440px) {
		width: 172px;
	}
`;

export const PhoneContainer = styled.p`
	width: 119px;

	@media screen and (min-width: 768px) {
		width: 157px;
	}

	@media screen and (min-width: 1440px) {
		width: 222px;
	}
`;
