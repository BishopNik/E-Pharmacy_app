/** @format */

import toast from 'react-hot-toast';
import styled from 'styled-components';
import Icon from 'components/Icon';

const Message = styled.div`
	display: flex;
	align-items: center;
`;

const MessBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const ButtonClose = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
	padding: 2px;
	background-color: transparent;
	border: 0.5px solid black;
	border-radius: 6px;
	cursor: pointer;
	font-size: 14px;
`;

const IconClose = styled(Icon)`
	width: 16px;
	height: 16px;
	cursor: pointer;
	stroke: black;
	transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
	&:hover {
		stroke: red;
	}
	&:focus {
		stroke: red;
	}
`;

export function toastError(mes, err) {
	toast(
		t => (
			<Message>
				<MessBox>
					<p>{mes}</p>
					<p>{err}</p>
				</MessBox>
				<ButtonClose onClick={() => toast.dismiss(t.id)}>
					<IconClose name='close' />
				</ButtonClose>
			</Message>
		),
		{
			icon: '❌',
			duration: 4000,
		}
	);
}

export function toastSuccess(mes) {
	toast(
		t => (
			<Message>
				{mes}
				<ButtonClose onClick={() => toast.dismiss(t.id)}>
					<IconClose name='close' />
				</ButtonClose>
			</Message>
		),
		{
			icon: '✅',
			duration: 2000,
		}
	);
}
