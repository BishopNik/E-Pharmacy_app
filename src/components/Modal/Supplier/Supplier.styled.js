/** @format */

import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import Icon from 'components/Icon';
import 'react-datepicker/dist/react-datepicker.css';

export const MainContainer = styled.div`
	width: 335px;
	padding: 40px 20px;

	@media screen and (min-width: 768px) {
		width: 536px;
		padding: 40px;
	}
`;

export const ModalTitle = styled.h1`
	margin-bottom: 20px;
	font-weight: 600;
	font-size: 20px;
	line-height: 120%;
	color: var(--main-black);

	@media screen and (min-width: 768px) {
		margin-bottom: 40px;
		font-size: 24px;
		line-height: 117%;
	}
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
	width: 295px;
	height: 44px;
	background: var(--background-3);

	@media screen and (min-width: 768px) {
		width: 224px;
	}
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
	color: rgba(29, 30, 33, 0.8);

	&[name='status'],
	&[name='date'] {
		cursor: pointer;
	}

	&[name='status'] {
		color: ${({ $status }) => ($status === 'Active' ? 'var(--accent-hover)' : 'red')};
		cursor: pointer;
	}

	&[name='date'] {
		padding-right: 40px;
	}

	&:disabled {
		background: var(--background-3);
	}

	&::placeholder {
		color: var(--text-grey);
	}

	&:focus {
		outline: 1px solid lightblue;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		width: 26px;
		height: 26px;
	}
`;

export const IconClose = styled(Icon)`
	width: 24px;
	height: 24px;
	stroke: var(--main-black);

	&:hover {
		stroke: var(--accent-hover);
	}

	@media screen and (min-width: 768px) {
		width: 26px;
		height: 26px;
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
	width: 146px;
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
		width: 133px;
		font-size: 14px;
		line-height: 129%;
	}
`;

export const CancelButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 60px;
	border: none;
	width: 140px;
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

	@media screen and (min-width: 768px) {
		width: 133px;
		font-size: 14px;
		line-height: 129%;
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

	@media screen and (min-width: 768px) {
		font-size: 12px;
	}
`;

export const StatusList = styled.ul`
	position: relative;
	top: 8px;
	z-index: 100;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 6px;
	border-radius: 15px;
	border: 1px solid var(--accent);
	width: 295px;
	padding: 13px 18px;
	background: var(--background-3);

	@media screen and (min-width: 768px) {
		width: 224px;
	}
`;

export const StatusItem = styled.li`
	width: 100%;
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: ${({ $status }) => ($status === 'Active' ? 'var(--accent-hover)' : 'red')};
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

	&:hover,
	${FieldContainer}:hover & {
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

	&:hover,
	${FieldContainer}:hover & {
		stroke: var(--accent-hover);
	}
`;
