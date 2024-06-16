/** @format */

import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import Icon from 'components/Icon';

export const Main = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 375px;
	width: 100vw;
	min-height: 812px;
	height: 100vh;
	margin: 0 auto;
	padding: 24px 20px;
	background: var(--background-2);
	overflow: hidden;

	@media screen and (min-width: 768px) {
		min-width: 768px;
		min-height: 1024px;
		padding: 24px 32px;
	}

	@media screen and (min-width: 1440px) {
		min-width: 1440px;
		min-height: 800px;
		padding: 28px 100px;
	}
`;

export const MainContainer = styled.main`
	@media screen and (min-width: 1440px) {
		display: flex;
		align-items: center;
		gap: 150px;
	}
`;

export const Header = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 14px;
	margin-bottom: 148px;
	width: 335px;

	@media screen and (min-width: 768px) {
		width: 614px;
		margin-bottom: 204px;
	}

	@media screen and (min-width: 1440px) {
		width: 1087px;
	}
`;

export const TitleHeader = styled.p`
	font-weight: 600;
	font-size: 20px;
	letter-spacing: -0.03em;
	color: var(--main-black);
`;

export const MainTitle = styled.h1`
	width: 100%;
	margin-bottom: 40px;
	font-family: var(--font-family);
	font-weight: 600;
	font-size: 28px;
	line-height: 121%;
	color: var(--main-black);

	@media screen and (min-width: 768px) {
		margin-bottom: 50px;
		font-size: 54px;
		line-height: 111%;
	}

	@media screen and (min-width: 1440px) {
		margin-bottom: 0;
	}
`;

export const MainTitleExt = styled.span`
	color: var(--accent);
`;

export const TitleContainer = styled.div`
	position: relative;
	width: 335px;

	@media screen and (min-width: 768px) {
		width: 614px;
	}
`;

export const MainImg = styled.img`
	position: absolute;
	bottom: 99px;
	right: 20px;
	width: 95px;
	height: 93px;

	@media screen and (min-width: 768px) {
		width: 179px;
		height: 175px;
		bottom: 169px;
		right: 19px;
	}
`;

export const InputBox = styled.label`
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin-bottom: 40px;
`;

export const InputContainer = styled.label`
	position: relative;
	width: 335px;
	height: 44px;

	@media screen and (min-width: 768px) {
		width: 323px;
	}
`;

export const InputField = styled(Field)`
	border: ${({ error, touched }) =>
		error
			? '1px solid red'
			: touched
			? '1px solid var(--accent)'
			: '1px solid rgba(29, 30, 33, 0.1)'};
	border-radius: 60px;
	width: 335px;
	height: 44px;
	background: var(--background-3);

	padding: 13px 18px;
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: var(--main-black);

	&:placeholder-shown {
		color: rgba(29, 30, 33, 0.4);
	}

	&:focus {
		outline: 1px solid lightblue;
	}

	@media screen and (min-width: 768px) {
		width: 323px;
	}
`;

export const ButtonSubmit = styled.button`
	border-radius: 60px;
	padding: 13px 147px;
	width: 335px;
	height: 44px;
	background: var(--accent);
	border: none;
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 14px;
	line-height: 129%;
	color: var(--background-3);
	cursor: pointer;

	&:hover {
		background: var(--accent-hover);
	}

	&:disabled {
		background: var(--accent-disabled);
	}

	@media screen and (min-width: 768px) {
		width: 323px;
		padding: 13px 141px;
	}
`;

export const ErrorMess = styled(ErrorMessage)`
	position: absolute;
	left: 20px;
	bottom: 35px;
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: red;

	background: var(--background-3);
`;

export const ButtonViewPassword = styled.button`
	position: absolute;
	top: 13px;
	right: 18px;
	width: 18px;
	height: 18px;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;
`;

export const IconViewPassword = styled(Icon)`
	width: 18px;
	height: 18px;
	fill: transparent;
`;

export const IconDecor = styled(Icon)`
	position: absolute;
	width: 464px;
	height: 345px;
	top: 666px;
	right: -206px;
	fill: transparent;

	@media screen and (min-width: 768px) {
		top: 761px;
		right: -198px;
	}

	@media screen and (min-width: 1440px) {
		top: 543px;
		right: -185px;
	}
`;
