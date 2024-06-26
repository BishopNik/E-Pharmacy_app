/** @format */

import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(29, 30, 33, 0.3)',
		zIndex: '999',
	},
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		overflow: 'visible',
		width: 'fit-content',
		height: 'fit-content',
		padding: 0,
		borderRadius: 12,
		border: 'none',
		backgroundColor: 'var(--background-3)',
		boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
	},
};

const ModalWindow = ({ children, isOpen, onRequestClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={customStyles}
			contentLabel='onRequestClose'
		>
			{children}
		</Modal>
	);
};

export default ModalWindow;
