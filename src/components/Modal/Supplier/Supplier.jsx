/** @format */

import React, { useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import ModalWindow from '../Modal';
import { addSupplier, supplierSchema, statusList } from 'helpers';
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
	CategoryListContainer,
	CategoryList,
	CategoryItem,
	IconStatus,
	IconDate,
} from './Supplier.styled';

function SupplierModal({ isOpen, onRequestClose, supplierEdit }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isShowList, setIsShowList] = useState(false);
	const [status, setStatus] = useState('');
	const cancelAddSupplier = useRef(null);

	const handlerShowList = () => {
		setIsShowList(!isShowList);
	};

	const handleStatusSelect = (status, setFieldValue) => {
		setStatus(status);
		setFieldValue('status', status);
	};

	const handleFormSubmit = async values => {
		setIsLoading(true);
		const newSupplier = await addSupplier(values);
		if (newSupplier) onRequestClose();
		setIsLoading(false);
	};

	const handleCancel = () => {
		if (cancelAddSupplier.current) {
			cancelAddSupplier.current.resetForm();
		}
		handlerClose();
	};

	const handlerClose = () => {
		setStatus('');
		setIsShowList(false);
		onRequestClose();
	};

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
										type='text'
										name='date'
										placeholder='Delivery date'
										disabled
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
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.status && touched.status}
										onClick={handlerShowList}
										value={status}
										type='text'
										name='status'
										placeholder='Status'
									/>
									<IconStatus name='menu' $isOpen={isShowList} />
									{!isShowList && <ErrorMsg name='status' component='span' />}
									{isShowList && (
										<CategoryListContainer>
											<CategoryList>
												{statusList.map(st => (
													<CategoryItem
														key={st}
														onClick={() =>
															handleStatusSelect(st, setFieldValue)
														}
													>
														{st}
													</CategoryItem>
												))}
											</CategoryList>
										</CategoryListContainer>
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
