/** @format */

import React from 'react';
import {
	ContainerFilter,
	ContainerInput,
	InputFilter,
	ButtonFilter,
	IconFilter,
	ClearButton,
	IconClear,
} from './Filter.styled';

function Filter({ name, handlerFilter, handleChange, clearFilter, searchValue }) {
	return (
		<ContainerFilter onSubmit={handlerFilter} onReset={clearFilter}>
			<ContainerInput>
				<InputFilter
					type='text'
					placeholder={name}
					name='searchName'
					value={searchValue}
					onChange={handleChange}
				/>
				{searchValue && (
					<ClearButton type='reset'>
						<IconClear name='close' />
					</ClearButton>
				)}
			</ContainerInput>
			<ButtonFilter type='submit'>
				<IconFilter name='filter' />
				<span>Filter</span>
			</ButtonFilter>
		</ContainerFilter>
	);
}

export default Filter;
