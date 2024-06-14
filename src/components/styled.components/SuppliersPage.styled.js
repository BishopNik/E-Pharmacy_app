/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	flex: 1;
	padding: 75px 40px 40px 40px;
`;

export const ContainerAction = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SupplierButtonAdd = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(89, 177, 122, 0.5);
	border-radius: 60px;
	width: 196px;
	height: 44px;
	font-weight: 500;
	font-size: 14px;
	line-height: 129%;
	color: var(--main-black);
	background: var(--background-2);
	cursor: pointer;

	&:hover {
		color: var(--background-3);
		background: var(--accent-hover);
	}
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
				return '191px';
			case 'address':
				return '188px';
			case 'company':
				return '166px';
			case 'date':
				return '215px';
			case 'amount':
				return '162px';
			case 'status':
				return '189px';

			default:
				break;
		}
	}};

	${({ type }) => type === 'action' && `cursor: default;`}

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

export const SupplierButtonEdit = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	border: 1px solid rgba(89, 177, 122, 0.5);
	border-radius: 30px;
	padding: 8px 17px;
	width: 82px;
	height: 34px;
	background-color: transparent;
	font-weight: 500;
	font-size: 16px;
	line-height: 112%;
	color: var(--accent);
	stroke: var(--accent);
	cursor: pointer;

	&:hover {
		color: var(--background-3);
		stroke: var(--background-3);
		background: var(--accent-hover);
	}
`;

export const IconEdit = styled(Icon)`
	width: 16px;
	height: 16px;
	fill: transparent;
	stroke: inherit;
`;

export const Status = styled.p`
	border-radius: 40px;
	padding: 4px 0;
	width: 89px;
	height: 25px;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: -0.05em;
	text-align: center;
	color: ${({ type }) => {
		switch (type) {
			case 'Active':
				return 'var(--accent)';
			case 'Deactive':
				return 'var(--accent-2)';

			default:
				return 'var(--main-black)';
		}
	}};
	background-color: ${({ type }) => {
		switch (type) {
			case 'Active':
				return 'rgba(89, 177, 122, 0.1)';
			case 'Deactive':
				return 'rgba(232, 80, 80, 0.1)';

			default:
				return 'var(--background-3)';
		}
	}};
`;
