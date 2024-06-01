/** @format */

import React from 'react';
import { Container } from 'components/styled.components/DataPage.styled';

function DataPage() {
	return (
		<Container>
			<div>
				<input type='text' />
				<button type='button'>
					<span>F</span>
					<span>Filter</span>
				</button>
			</div>
			<button type='button'>
				<span>+</span>
				<span>Add a new product</span>
			</button>
			<h2>Name table</h2>
			<table>
				<thead>
					<tr>
						<th>Header1</th>
						<th>Header2</th>
						<th>Header3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Row1</td>
						<td>Data1</td>
						<td>Data1</td>
					</tr>
					<tr>
						<td>Row2</td>
						<td>Data2</td>
						<td>Data2</td>
					</tr>
					<tr>
						<td>Row3</td>
						<td>Data3</td>
						<td>Data3</td>
					</tr>
					<tr>
						<td>Row4</td>
						<td>Data4</td>
						<td>Data4</td>
					</tr>
					<tr>
						<td>Row5</td>
						<td>Data5</td>
						<td>Data5</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}

export default DataPage;
