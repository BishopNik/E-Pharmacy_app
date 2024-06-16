/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	width: 375px;

	@media screen and (min-width: 768px) {
		width: 768px;
	}

	@media screen and (min-width: 1440px) {
		width: 1440px;
	}
`;
