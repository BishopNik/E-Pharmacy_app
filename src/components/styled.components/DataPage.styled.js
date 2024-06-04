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

export const ContainerFilter = styled.li`
	display: flex;
	align-items: center;
	gap: 14px;
`;

export const InputFilter = styled.input`
	border: 1px solid rgba(29, 30, 33, 0.1);
	border-radius: 60px;
	width: 224px;
	height: 44px;
	padding: 13px 18px;
	box-shadow: 0 -1px 5px 0 rgba(71, 71, 71, 0.05);
	background: var(--background-3);
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: rgba(29, 30, 33, 0.4);
`;

export const ButtonFilter = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 60px;
	border: none;
	width: 116px;
	height: 44px;
	background: var(--accent);
	font-weight: 500;
	font-size: 14px;
	line-height: 129%;
	color: var(--background-3);
	cursor: pointer;

	&:hover {
		background: var(--accent-hover);
	}
`;

export const IconFilter = styled(Icon)`
	fill: transparent;
	width: 14px;
	height: 12px;
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
	width: 630px;
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
