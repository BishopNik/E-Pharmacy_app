/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

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

export const ContainerAction = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 18px;
	width: 375px;

	@media screen and (min-width: 768px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		width: 728px;
	}

	@media screen and (min-width: 1024px) {
		width: 940px;
	}

	@media screen and (min-width: 1440px) {
		width: 1280px;
	}
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
	margin-bottom: 20px;
	width: calc(100vw - 20px);
	overflow: scroll;

	@media screen and (max-width: 768px) {
		max-width: 511px;
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
	width: 525px;

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
	width: 511px;
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
	position: relative;
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
				return '126px';
			case 'category':
				return '78px';
			case 'stock':
				return '57px';
			case 'suppliers':
				return '78px';
			case 'price':
				return '69px';

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
					return '260px';
				case 'category':
					return '150px';
				case 'stock':
					return '119px';
				case 'suppliers':
					return '150px';
				case 'price':
					return '140px';

				default:
					break;
			}
		}};
	}

	@media screen and (min-width: 1440px) {
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
	}

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
	padding: 14px;
	border-right: 1px solid var(--accent-disabled);
	border-bottom: 1px solid var(--accent-disabled);
	text-align: left;

	font-weight: 500;
	font-size: 12px;
	line-height: 117%;
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
		line-height: 112%;
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
	width: 28px;
	height: 28px;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		width: 32px;
		height: 32px;
	}

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

export const NameContainer = styled.p`
	width: 97px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 220px;
	}

	@media screen and (min-width: 1440px) {
		width: 256px;
	}
`;

export const CategoryContainer = styled.p`
	width: 49px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 110px;
	}

	@media screen and (min-width: 1440px) {
		width: 190px;
	}
`;

export const StockContainer = styled.p`
	width: 28px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 78px;
	}

	@media screen and (min-width: 1440px) {
		width: 158px;
	}
`;

export const SupplersContainer = styled.p`
	width: 49px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 110px;
	}

	@media screen and (min-width: 1440px) {
		width: 185px;
	}
`;

export const PriceContainer = styled.p`
	width: 40px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 100px;
	}

	@media screen and (min-width: 1440px) {
		width: 123px;
	}
`;

export const IconSort = styled(Icon)`
	position: absolute;
	right: 0;
	width: 16px;
	height: 16px;
	stroke: var(--main-black);
	fill: transparent;
	display: ${({ $sortBy }) => ($sortBy ? 'block' : 'none')};
	transform: ${({ $isRevers }) => ($isRevers ? 'rotateX(0deg)' : 'rotateX(180deg)')};

	@media screen and (min-width: 768px) {
		right: 10px;
	}

	@media screen and (min-width: 1440px) {
		right: 20px;
	}
`;
