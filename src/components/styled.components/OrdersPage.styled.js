/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	flex: 1;
	padding: 75px 40px 40px 40px;
`;

export const TableContainer = styled.div`
	border: 1px solid var(--accent-disabled);
	border-radius: 8px;
	overflow: hidden;
`;

export const TableTitle = styled.h2`
	padding: 20px;
	background: var(--background);
	font-weight: 600;
	font-size: 18px;
	line-height: 133%;
	color: var(--main-black);
`;

export const TableBody = styled.table`
	width: 100%;
	padding: 0 20px;
	background: var(--background-3);
	border-spacing: 0;
`;

export const TableTh = styled.th`
	padding: 20px;
	border-right: 1px solid var(--accent-disabled);
	border-bottom: 1px solid var(--accent-disabled);
	text-align: left;

	font-weight: 500;
	font-size: 14px;
	line-height: 129%;
	color: var(--text-grey);
	cursor: ${({ $reverse, $sortBy, type }) =>
		$sortBy === type ? ($reverse ? 's-resize' : 'n-resize') : 'pointer'};

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
	padding: 20px;
	border-right: 1px solid var(--accent-disabled);
	border-bottom: 1px solid var(--accent-disabled);
	text-align: left;

	font-weight: 500;
	font-size: 16px;
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
`;

export const UserLogo = styled.img`
	border-radius: 50%;
	width: 36px;
	height: 36px;
`;

export const UserName = styled.span`
	white-space: nowrap;
`;

export const Status = styled.p`
	border-radius: 40px;
	width: 92px;
	height: 25px;
	padding: 4px 0;
	font-weight: 500;
	font-size: 14px;
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
`;
