/** @format */

import React, { useState } from 'react';
import { TooltipContainer, TooltipText } from './Tooltip.styled';

function Tooltip({ text, children }) {
	const [visible, setVisible] = useState(false);

	return (
		<TooltipContainer
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
		>
			{children}
			{visible && <TooltipText>{text}</TooltipText>}
		</TooltipContainer>
	);
}

export default Tooltip;
