/** @format */

import styled from 'styled-components';

export const TooltipContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 100%;
	&:hover p {
		opacity: 1;
	}
`;

export const TooltipText = styled.p`
	visibility: visible;
	width: 120px;
	background-color: var(--main-black);
	color: #fff;
	text-align: center;
	font-size: 12px;
	border-radius: 6px;
	padding: 5px;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;
`;
