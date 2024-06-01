/** @format */

import React from 'react';
import EllipsisText from 'react-ellipsis-text';
import {
	TableContainer,
	TableTitle,
	TableBody,
	TableTh,
	TableTr,
	TableTdType,
	TableTdSum,
	TableTdName,
	TypeTransaction,
	SumColor,
} from './TableIncomeExpenses.styled';

function TableIncomeExpenses({ dataIncomeExpenses }) {
	return (
		<TableContainer>
			<TableTitle>Income/Expenses</TableTitle>
			<TableBody>
				<thead>
					<tr>
						<TableTh>Today</TableTh>
					</tr>
				</thead>
				<tbody>
					{dataIncomeExpenses &&
						dataIncomeExpenses.map(item => (
							<TableTr>
								<TableTdType>
									<TypeTransaction type={item.type}>{item.type}</TypeTransaction>
								</TableTdType>
								<TableTdName>
									<EllipsisText text={item.name} length={40} />
								</TableTdName>
								<TableTdSum>
									<SumColor type={item.type}>
										{item.amount > 0 ? '+' : null}
										{item.amount.toLocaleString('en-US', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}
									</SumColor>
								</TableTdSum>
							</TableTr>
						))}
				</tbody>
			</TableBody>
		</TableContainer>
	);
}

export default TableIncomeExpenses;
