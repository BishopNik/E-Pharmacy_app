/** @format */

import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import Icon from 'components/Icon';

export const MainContainer = styled.div`
	width: 536px;
	padding: 40px;
`;

export const ModalTitle = styled.h1`
	margin-bottom: 40px;
	font-weight: 600;
	font-size: 24px;
	line-height: 117%;
	color: var(--main-black);
`;

export const FormFieldsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 14px;
	column-gap: 8px;
	margin-bottom: 40px;
`;

export const FieldContainer = styled.label`
	position: relative;
	width: 224px;
	height: 44px;
	background: var(--background-3);
`;

export const FieldStyled = styled(Field)`
	width: 100%;
	height: 100%;
	border-radius: 60px;
	border: 1px solid rgba(29, 30, 33, 0.1);
	border-color: ${({ $statusError }) =>
		$statusError ? 'rgba(89, 177, 122, 0.4)' : 'var(--accent-disabled)'};
	padding: 13px 18px;
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: rgba(29, 30, 33, 1);

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	& {
		-moz-appearance: textfield;
	}

	&[name='status'],
	&[name='date'] {
		cursor: pointer;
	}

	&:disabled {
		background: var(--background-3);
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 26px;
	height: 26px;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const IconClose = styled(Icon)`
	width: 26px;
	height: 26px;
	stroke: var(--main-black);

	&:hover {
		stroke: var(--accent-hover);
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const AddButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 60px;
	border: none;
	width: 133px;
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

export const CancelButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 60px;
	border: none;
	width: 133px;
	height: 44px;
	background: rgba(29, 30, 33, 0.1);
	font-weight: 500;
	font-size: 14px;
	line-height: 129%;
	color: rgba(29, 30, 33, 0.4);
	cursor: pointer;

	&:hover {
		background: var(--accent-hover);
		color: var(--background-3);
	}
`;

export const ErrorMsg = styled(ErrorMessage)`
	position: absolute;
	left: 20px;
	bottom: 35px;
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: red;

	background: var(--background-3);
`;

export const CategoryListContainer = styled.div`
	position: relative;
	top: 8px;
	z-index: 100;
	border-radius: 15px;
	width: 224px;
	height: 140px;
	padding: 13px 8px 13px 18px;
	background: var(--accent);
`;

export const CategoryList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 6px;
	width: 198px;
	height: 114px;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 6px;
		border-radius: 12px;
	}
	&::-webkit-scrollbar-thumb {
		height: 52px;
		background-color: rgba(255, 255, 255, 0.4);
		border-radius: 12px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background-color: rgba(255, 255, 255, 0.8);
	}
`;

export const CategoryItem = styled.li`
	width: 100%;
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: var(--background-3);
	cursor: pointer;
`;

export const IconStatus = styled(Icon)`
	position: absolute;
	top: 14px;
	right: 18px;
	width: 16px;
	height: 16px;
	stroke: var(--main-black);
	fill: transparent;
	transform: ${({ $isOpen }) => ($isOpen ? 'rotateX(0deg)' : 'rotateX(180deg)')};
	cursor: pointer;

	&:hover {
		stroke: var(--accent-hover);
	}
`;

export const IconDate = styled(Icon)`
	position: absolute;
	top: 14px;
	right: 18px;
	width: 16px;
	height: 16px;
	background: transparent;
	stroke: var(--accent);
	fill: transparent;
	cursor: pointer;

	&:hover {
		stroke: var(--accent-hover);
	}
`;
