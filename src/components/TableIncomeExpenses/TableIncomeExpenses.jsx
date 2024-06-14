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
						dataIncomeExpenses?.map(({ type, name, amount, _id }) => (
							<TableTr key={_id}>
								<TableTdType>
									<TypeTransaction type={type}>{type}</TypeTransaction>
								</TableTdType>
								<TableTdName>
									<EllipsisText text={name} length={40} />
								</TableTdName>
								<TableTdSum>
									<SumColor type={type}>
										{amount > 0 ? '+' : null}
										{amount.toLocaleString('en-US', {
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
