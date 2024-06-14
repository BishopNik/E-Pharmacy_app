/** @format */

import styled from 'styled-components';

export const ButtonContainer = styled.ul`
	display: flex;
	justify-content: center;
	gap: 8px;
`;

export const ButtonBox = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 19px;
	height: 19px;
`;

export const Button = styled.button`
	width: 12px;
	height: 12px;
	border-radius: 100%;
	background: var(--background);
	border: none;
	cursor: pointer;

	&:disabled {
		background: var(--accent);
	}
`;
