/** @format */

import styled from 'styled-components';

export const StatisticsContainer = styled.ul`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const DataContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 40px;
	padding: 22px 40px;
`;

export const SectionTableContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media screen and (min-width: 1440px) {
		flex-direction: row;
	}
`;
