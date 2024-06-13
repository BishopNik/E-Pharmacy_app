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

export const ContainerAction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ContainerAddButton = styled.li`
	display: flex;
	align-items: center;
	gap: 14px;
`;

export const ButtonAdd = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const RoundAdd = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 60px;
	width: 42px;
	height: 42px;
	background: var(--accent);
	border: none;

	button:hover & {
		background: var(--accent-hover);
	}
`;

export const IconAdd = styled(Icon)`
	fill: transparent;
	width: 12px;
	height: 12px;
`;

export const TextAdd = styled.span`
	font-weight: 500;
	font-size: 14px;
	line-height: 129%;
	color: var(--main-black);
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
				return '296px';
			case 'category':
				return '230px';
			case 'stock':
				return '199px';
			case 'suppliers':
				return '226px';
			case 'price':
				return '163px';

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

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const ButtonAction = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
	border: ${({ name }) => {
		switch (name) {
			case 'edit':
				return '1px solid rgba(89, 177, 122, 0.5)';
			case 'delete':
				return '1px solid rgba(232, 80, 80, 0.5)';

			default:
				break;
		}
	}};
	border-radius: 30px;
	padding: 8px;
	width: 32px;
	height: 32px;
	cursor: pointer;

	&:hover {
		background: ${({ name }) => {
			switch (name) {
				case 'edit':
					return 'rgba(89, 177, 122, 0.1)';
				case 'delete':
					return 'rgba(232, 80, 80, 0.1)';

				default:
					break;
			}
		}};
	}
`;

export const IconAction = styled(Icon)`
	fill: transparent;
	width: 16px;
	height: 16px;
	stroke: ${({ name }) => {
		switch (name) {
			case 'edit':
				return 'var(--accent)';
			case 'delete':
				return 'var(--accent-2)';

			default:
				break;
		}
	}};
`;
