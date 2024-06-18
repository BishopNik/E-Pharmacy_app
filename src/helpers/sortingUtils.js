/** @format */

export const handleChangeSortingBy = (value, sortBy, setSortBy, reverse, setReverse, setPage) => {
	if (value !== sortBy) {
		setReverse(0);
		setSortBy(value);
	} else {
		setReverse(prevReverse => (prevReverse ? 0 : 1));
	}
	setPage(1);
};
