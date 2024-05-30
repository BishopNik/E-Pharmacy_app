/** @format */

import React from 'react';
import { Main, DataTitleContainer, DataName, DataCount, DataIcon } from './DataView.styled';

function DataView({ type, nameData, countData, iconName }) {
	return (
		<Main type={type}>
			<DataTitleContainer>
				<li>
					<DataIcon name={iconName} />
				</li>
				<li>
					<DataName>{nameData}</DataName>
				</li>
			</DataTitleContainer>
			<DataCount>{countData.toLocaleString('en-US')}</DataCount>
		</Main>
	);
}

export default DataView;
