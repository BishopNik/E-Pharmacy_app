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
	padding: 20px;
	background: var(--background);
	font-weight: 600;
	font-size: 18px;
	line-height: 133%;
	color: var(--main-black);
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
	padding: 14px 0;
	text-align: left;

	font-weight: 500;
	font-size: 14px;
	line-height: 129%;
	color: var(--text-grey);

	@media screen and (min-width: 768px) {
		padding: 20px 0;
	}
`;

export const TableTr = styled.tr`
	margin: 0;
	padding: 0;
`;

export const TableTdType = styled.td`
	padding: 14px 14px 14px 0;
	border-top: 1px solid var(--accent-disabled);
	text-align: left;
	vertical-align: top;

	font-weight: 500;
	font-size: 16px;
	line-height: 112%;
	color: var(--main-black);

	@media screen and (min-width: 768px) {
		padding: 19px 0;
	}
`;

export const TableTdName = styled.td`
	padding: 14px 0 14px 14px;
	border-top: 1px solid var(--accent-disabled);
	text-align: left;

	font-weight: 500;
	font-size: 12px;
	line-height: 112%;
	color: var(--main-black);

	@media screen and (min-width: 768px) {
		padding: 19px 0 19px 20px;
		font-size: 16px;
	}
`;

export const TableTdSum = styled.td`
	padding: 14px 0 14px 14px;
	border-top: 1px solid var(--accent-disabled);
	text-align: right;

	font-weight: 500;
	font-size: 12px;
	line-height: 112%;
	color: var(--main-black);

	@media screen and (min-width: 768px) {
		font-size: 16px;
		padding: 19px 0 19px 20px;
	}
`;

export const TypeTransaction = styled.p`
	width: 80px;
	height: 25px;
	border-radius: 40px;
	padding: 4px;
	color: ${({ type }) => {
		switch (type) {
			case 'Expense':
				return 'var(--accent-2)';
			case 'Error':
				return 'var(--main-black)';
			case 'Income':
				return 'var(--accent)';
			default:
				return 'var(--main-black)';
		}
	}};
	background-color: ${({ type }) => {
		switch (type) {
			case 'Expense':
				return 'rgba(232, 80, 80, 0.1)';
			case 'Error':
				return 'rgba(29, 30, 33, 0.1)';
			case 'Income':
				return 'rgba(89, 177, 122, 0.1)';
			default:
				return 'rgba(29, 30, 33, 0.1)';
		}
	}};
	font-weight: 500;
	font-size: 12px;
	letter-spacing: -0.05em;
	text-align: center;

	@media screen and (min-width: 768px) {
		font-size: 14px;
	}
`;

export const SumColor = styled.p`
	color: ${({ type }) => {
		switch (type) {
			case 'Expense':
				return 'var(--accent-2)';
			case 'Error':
				return 'var(--main-black)';
			case 'Income':
				return 'var(--accent)';
			default:
				return 'var(--main-black)';
		}
	}};
	text-decoration: ${({ type }) => {
		switch (type) {
			case 'Expense':
				return 'auto';
			case 'Error':
				return 'line-through';
			case 'Income':
				return 'auto';
			default:
				return 'auto';
		}
	}};
`;
