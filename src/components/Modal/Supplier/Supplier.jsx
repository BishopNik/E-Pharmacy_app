/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import { useQueryClient, useMutation } from 'react-query';
import DatePicker from 'react-datepicker';
import { formatISO } from 'date-fns';
import ModalWindow from '../Modal';
import { addSupplier, editSupplierById, supplierSchema, statusList } from 'helpers';
import { MiniLoader } from 'components/Loader';
import {
	MainContainer,
	ModalTitle,
	FormFieldsContainer,
	FieldContainer,
	FieldStyled,
	CloseButton,
	IconClose,
	ButtonContainer,
	AddButton,
	CancelButton,
	ErrorMsg,
	StatusList,
	StatusItem,
	IconStatus,
	IconDate,
} from './Supplier.styled';

function SupplierModal({ isOpen, onRequestClose, supplierEdit }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isShowList, setIsShowList] = useState(false);
	const [status, setStatus] = useState(supplierEdit?.status);
	const [startDate, setStartDate] = useState(supplierEdit?.date);
	const cancelAddSupplier = useRef(null);
	const datePickerRef = useRef(null);
	const listRef = useRef(null);

	const queryClient = useQueryClient();

	const mutation = useMutation(
		supplierEdit
			? values => editSupplierById(values, supplierEdit._id)
			: values => addSupplier(values),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('suppliers');
				setIsLoading(false);
			},
			onMutate: () => {
				setIsLoading(true);
			},
		}
	);

	const handlerShowList = () => {
		setIsShowList(!isShowList);
	};

	const handleStatusSelect = (status, setFieldValue) => {
		setStatus(status);
		setFieldValue('status', status);
	};

	const handleDateSelect = (date, setFieldValue) => {
		setStartDate(date);
		setFieldValue('date', date);
	};

	const handleFormSubmit = async values => {
		const newSupplier = await mutation.mutateAsync(values);
		if (newSupplier) handlerClose();
	};

	const handleCancel = () => {
		if (cancelAddSupplier.current) {
			cancelAddSupplier.current.resetForm();
		}
		handlerClose();
	};

	const handlerClose = () => {
		setStatus('');
		setStartDate('');
		setIsShowList(false);
		onRequestClose();
	};

	const handleFieldClick = () => {
		if (datePickerRef.current) {
			datePickerRef.current.setOpen(true);
		}
	};

	useEffect(() => {
		if (supplierEdit) {
			setStatus(supplierEdit?.status);
			setStartDate(supplierEdit?.date);
		}
	}, [supplierEdit]);

	useEffect(() => {
		if (!isShowList) return;
		const handlerOnCloseList = ({ target }) => {
			if (listRef.current && !listRef.current.contains(target)) {
				setIsShowList(false);
			}
		};

		window.addEventListener('click', handlerOnCloseList);

		return () => {
			window.removeEventListener('click', handlerOnCloseList);
		};
	}, [isShowList]);

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={handlerClose}>
			<MainContainer>
				<CloseButton type='button' onClick={handlerClose}>
					<IconClose name='close' />
				</CloseButton>
				<ModalTitle>{!!supplierEdit ? 'Edit' : 'Add a new'} supplier</ModalTitle>
				<Formik
					initialValues={{
						name: supplierEdit?.name || '',
						address: supplierEdit?.address || '',
						date: supplierEdit?.date || '',
						company: supplierEdit?.company || '',
						amount: supplierEdit?.amount || '',
						status: supplierEdit?.status || '',
					}}
					validationSchema={supplierSchema}
					onSubmit={handleFormSubmit}
					innerRef={cancelAddSupplier}
				>
					{({ setFieldValue, errors, touched, isSubmitting }) => (
						<Form autoComplete='off'>
							<FormFieldsContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.name && touched.name}
										type='text'
										name='name'
										placeholder='Supplier Info'
										autoFocus
									/>
									<ErrorMsg name='name' component='span' />
								</FieldContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.address && touched.address}
										type='text'
										name='address'
										placeholder='Address'
									/>
									<ErrorMsg name='address' component='span' />
								</FieldContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.company && touched.company}
										type='text'
										name='company'
										placeholder='Company'
									/>
									<ErrorMsg name='company' component='span' />
								</FieldContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.date && touched.date}
										onChange={date => handleDateSelect(date, setFieldValue)}
										value={startDate ? formatISO(startDate) : ''}
										type='text'
										name='date'
										placeholder='Delivery date'
										onClick={handleFieldClick}
										readOnly
									/>
									<DatePicker
										selected={startDate}
										openToDate={startDate ? new Date(startDate) : ''}
										onChange={date => handleDateSelect(date, setFieldValue)}
										customInput={<div />}
										showTimeSelect
										timeFormat='HH:mm'
										timeIntervals={15}
										timeCaption='time'
										dateFormat='MMMM d, yyyy h:mm aa'
										ref={datePickerRef}
									/>
									<IconDate name='date' />
									<ErrorMsg name='date' component='span' />
								</FieldContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.amount && touched.amount}
										type='number'
										name='amount'
										placeholder='Amount'
									/>
									<ErrorMsg name='amount' component='span' />
								</FieldContainer>
								<FieldContainer ref={listRef}>
									<FieldStyled
										$statusError={!errors.status && touched.status}
										onClick={handlerShowList}
										value={status}
										$status={status}
										type='text'
										name='status'
										placeholder='Status'
										readOnly
									/>
									<IconStatus name='menu' $isOpen={isShowList} />
									{!isShowList && <ErrorMsg name='status' component='span' />}
									{isShowList && (
										<StatusList>
											{statusList.map(st => (
												<StatusItem
													key={st}
													$status={st}
													onClick={() =>
														handleStatusSelect(st, setFieldValue)
													}
												>
													{st}
												</StatusItem>
											))}
										</StatusList>
									)}
								</FieldContainer>
							</FormFieldsContainer>

							<ButtonContainer>
								<AddButton type='submit' disabled={isSubmitting}>
									{!!supplierEdit ? 'Save' : 'Add'}
								</AddButton>
								<CancelButton
									type='reset'
									onClick={handleCancel}
									disabled={isSubmitting}
								>
									Cancel
								</CancelButton>
							</ButtonContainer>
						</Form>
					)}
				</Formik>
			</MainContainer>
			{isLoading && <MiniLoader />}
		</ModalWindow>
	);
}

export default SupplierModal;
