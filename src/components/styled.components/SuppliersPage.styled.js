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

export const ContainerAction = styled.ul`
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

export const SupplierButtonAdd = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(89, 177, 122, 0.5);
	border-radius: 60px;
	width: 177px;
	height: 44px;
	font-weight: 500;
	font-size: 12px;
	line-height: 129%;
	color: var(--main-black);
	background: var(--background-2);
	cursor: pointer;

	&:hover {
		color: var(--background-3);
		background: var(--accent-hover);
	}

	@media screen and (min-width: 768px) {
		width: 196px;
		font-size: 14px;
		line-height: 150%;
	}
`;

export const TableContainer = styled.div`
	border: 1px solid var(--accent-disabled);
	border-radius: 8px;
	margin-bottom: 20px;
	width: calc(100vw - 14px);
	overflow: scroll;

	@media screen and (max-width: 768px) {
		max-width: 678px;
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
	width: 685px;

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
				return '108px';
			case 'address':
				return '94px';
			case 'company':
				return '83px';
			case 'date':
				return '115px';
			case 'amount':
				return '88px';
			case 'status':
				return '90px';

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
				case 'address':
					return '128px';
				case 'company':
					return '108px';
				case 'date':
					return '157px';
				case 'amount':
					return '121px';
				case 'status':
					return '129px';

				default:
					break;
			}
		}};
	}

	@media screen and (min-width: 1440px) {
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

export const SupplierButtonEdit = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	border: 1px solid rgba(89, 177, 122, 0.5);
	border-radius: 30px;
	background-color: transparent;
	width: 69px;
	height: 26px;
	font-size: 12px;
	line-height: 117%;
	font-weight: 500;
	color: var(--accent);
	stroke: var(--accent);
	cursor: pointer;

	&:hover {
		color: var(--background-3);
		stroke: var(--background-3);
		background: var(--accent-hover);
	}

	@media screen and (min-width: 768px) {
		width: 82px;
		height: 34px;
		font-size: 16px;
		line-height: 112%;
	}
`;

export const IconEdit = styled(Icon)`
	width: 14px;
	height: 14px;
	fill: transparent;
	stroke: inherit;
`;

export const Status = styled.p`
	border-radius: 40px;
	padding: 4px 0;
	width: 62px;
	height: 23px;
	font-weight: 500;
	font-size: 12px;
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

	@media screen and (min-width: 768px) {
		width: 89px;
		height: 25px;
		font-size: 14px;
	}
`;

export const NameContainer = styled.p`
	width: 93px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 154px;
	}

	@media screen and (min-width: 1440px) {
		width: 170px;
	}
`;

export const AddressContainer = styled.p`
	width: 63px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 87px;
	}

	@media screen and (min-width: 1440px) {
		width: 147px;
	}
`;

export const CompanyContainer = styled.p`
	width: 54px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 67px;
	}

	@media screen and (min-width: 1440px) {
		width: 121px;
	}
`;

export const DateContainer = styled.p`
	width: 86px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 116px;
	}

	@media screen and (min-width: 1440px) {
		width: 174px;
	}
`;

export const AmountContainer = styled.p`
	width: 59px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 80px;
	}

	@media screen and (min-width: 1440px) {
		width: 121px;
	}
`;

export const StatusContainer = styled.div`
	width: 61px;

	@media screen and (min-width: 768px) {
		width: 88px;
	}

	@media screen and (min-width: 1440px) {
		width: 148px;
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
