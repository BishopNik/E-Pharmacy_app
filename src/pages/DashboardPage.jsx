/** @format */

import React from 'react';
import DataView from 'components/DataView';
import {
	StatisticsContainer,
	DataContainer,
	SectionTableContainer,
} from 'components/styled.components/DashboardPage.styled';

function DashboardPage() {
	return (
		<DataContainer>
			<section>
				<StatisticsContainer>
					<DataView
						type={'products'}
						nameData={'All product'}
						countData={8000}
						iconName={'products'}
					/>
					<DataView
						nameData={'All suppliers'}
						countData={120}
						iconName={'stakeholders'}
					/>
					<DataView nameData={'All customers'} countData={80} iconName={'stakeholders'} />
				</StatisticsContainer>
			</section>
			<SectionTableContainer>
				<div>Recent Customers</div>
				<div>Income/Expenses</div>
			</SectionTableContainer>
		</DataContainer>
	);
}

export default DashboardPage;
