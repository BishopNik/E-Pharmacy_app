/** @format */

import React from 'react';
import DataView from 'components/DataView';
import { Loader } from 'components/Loader';
import TableCustomers from 'components/TableCustomers';
import TableIncomeExpenses from 'components/TableIncomeExpenses';
import { useDashboardData } from 'hooks';
import {
	StatisticsContainer,
	DataContainer,
	SectionTableContainer,
} from 'components/styled.components/DashboardPage.styled';

function DashboardPage() {
	const { data: dataDashboard, isLoading } = useDashboardData();

	return (
		<DataContainer>
			<section>
				<StatisticsContainer>
					<DataView
						type={'products'}
						nameData={'All product'}
						countData={dataDashboard?.totalProducts || 0}
						iconName={'products'}
					/>
					<DataView
						nameData={'All suppliers'}
						countData={dataDashboard?.totalSuppliers || 0}
						iconName={'stakeholders'}
					/>
					<DataView
						nameData={'All customers'}
						countData={dataDashboard?.totalCustomers || 0}
						iconName={'stakeholders'}
					/>
				</StatisticsContainer>
			</section>
			<SectionTableContainer>
				<TableCustomers dataCustomers={dataDashboard?.customers} />
				<TableIncomeExpenses dataIncomeExpenses={dataDashboard?.income_expenses} />
			</SectionTableContainer>
			{isLoading && <Loader />}
		</DataContainer>
	);
}

export default DashboardPage;
