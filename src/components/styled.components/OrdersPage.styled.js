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
	white-space: nowrap;

	font-weight: 500;
	font-size: 12px;
	line-height: 117%;
	color: var(--text-grey);
	cursor: ${({ $reverse, $sortBy, type }) =>
		$sortBy === type ? ($reverse ? 's-resize' : 'n-resize') : 'pointer'};

	width: ${({ type }) => {
		switch (type) {
			case 'name':
				return '104px';
			case 'address':
				return '110px';
			case 'products':
				return '96px';
			case 'order_date':
				return '121px';
			case 'price':
				return '85px';

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
					return '205px';
				case 'address':
					return '158px';
				case 'products':
					return '131px';
				case 'order_date':
					return '172px';
				case 'price':
					return '125px';

				default:
					break;
			}
		}};
	}

	@media screen and (min-width: 1440px) {
		width: ${({ type }) => {
			switch (type) {
				case 'name':
					return '285px';
				case 'address':
					return '216px';
				case 'products':
					return '191px';
				case 'order_date':
					return '232px';
				case 'price':
					return '184px';

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

export const UserInfo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;
	gap: 8px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
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
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const UserAddress = styled.p`
	@media screen and (max-width: 768px) {
		width: 82px;
	}
`;

export const UserDate = styled.p`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const Status = styled.p`
	border-radius: 40px;
	width: 83px;
	height: 23px;
	padding: 4px 0;
	font-weight: 500;
	font-size: 12px;
	letter-spacing: -0.05em;
	text-align: center;
	color: ${({ type }) => {
		switch (type) {
			case 'Completed':
				return 'var(--accent)';
			case 'Confirmed':
				return 'rgba(128, 89, 228, 1)';
			case 'Pending':
				return 'rgba(247, 144, 66, 1)';
			case 'Cancelled':
				return 'var(--accent-2)';
			case 'Processing':
				return 'rgba(112, 166, 232, 1)';
			case 'Delivered':
				return 'rgba(42, 133, 132, 1)';
			case 'Shipped':
				return 'rgba(112, 45, 113, 1)';
			default:
				return 'var(--main-black)';
		}
	}};
	background-color: ${({ type }) => {
		switch (type) {
			case 'Completed':
				return 'rgba(89, 177, 122, 0.1)';
			case 'Confirmed':
				return 'rgba(128, 89, 228, 0.1)';
			case 'Pending':
				return 'rgba(247, 144, 66, 0.1)';
			case 'Cancelled':
				return 'rgba(232, 80, 80, 0.1)';
			case 'Processing':
				return 'rgba(112, 166, 232, 0.1)';
			case 'Delivered':
				return 'rgba(42, 133, 232, 0.1)';
			case 'Shipped':
				return 'rgba(112, 45, 113, 0.1)';
			default:
				return 'var(--background-3)';
		}
	}};

	@media screen and (min-width: 768px) {
		font-size: 14px;
		width: 92px;
		height: 25px;
	}
`;
