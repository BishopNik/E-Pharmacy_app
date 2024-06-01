/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';

export const AsideContainer = styled.aside`
	display: flex;
	align-items: flex-start;
	gap: 20px;
	border-right: 1px solid var(--accent-disabled);
`;

export const ContainerLink = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 14px;
	padding: 40px 18px;
`;

export const ContainerIconPage = styled.li`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background: var(--background-3);
`;

export const LinkStyled = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	fill: ${({ active }) => (active === 'true' ? 'var(--accent)' : 'var(--text)')};

	&:hover {
		fill: var(--accent);
	}
`;

export const IconPage = styled(Icon)`
	fill: inherit;
`;
