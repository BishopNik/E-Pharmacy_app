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
	margin-bottom: 20px;
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
				return '260px';
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

export const EmailContainer = styled.p`
	width: 258px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
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
