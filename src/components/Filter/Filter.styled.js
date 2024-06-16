/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const ContainerFilter = styled.form`
	display: flex;
	align-items: center;
	gap: 14px;
`;

export const ContainerInput = styled.div`
	position: relative;
`;

export const InputFilter = styled.input`
	border: 1px solid rgba(29, 30, 33, 0.1);
	border-radius: 60px;
	width: 215px;
	height: 44px;
	padding: 13px 18px;
	box-shadow: 0 -1px 5px 0 rgba(71, 71, 71, 0.05);
	background: var(--background-3);
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: rgba(29, 30, 33, 0.4);

	@media screen and (min-width: 768px) {
		width: 224px;
	}
`;

export const ButtonFilter = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 60px;
	border: none;
	width: 112px;
	height: 44px;
	background: var(--accent);
	font-weight: 500;
	font-size: 12px;
	line-height: 129%;
	color: var(--background-3);
	cursor: pointer;

	&:hover {
		background: var(--accent-hover);
	}

	@media screen and (min-width: 768px) {
		width: 116px;
		font-size: 14px;
	}
`;

export const IconFilter = styled(Icon)`
	fill: transparent;
	width: 14px;
	height: 12px;
`;

export const ClearButton = styled.button`
	position: absolute;
	top: 50%;
	right: 14px;
	transform: translateY(-50%);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 16px;
	height: 16px;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const IconClear = styled(Icon)`
	width: 16px;
	height: 16px;
	stroke: var(--main-black);

	&:hover {
		stroke: var(--accent-hover);
	}
`;
