/** @format */

import { createPortal } from 'react-dom';
import { Bars } from 'react-loader-spinner';
import { LoaderBox } from './MiniLoader.styled';

const loaderPortal = document.querySelector('#loader-root');

const MiniLoader = () => {
	return createPortal(
		<>
			<LoaderBox>
				<Bars
					height='80'
					width='80'
					color='var(--accent-hover)'
					ariaLabel='bars-loading'
					wrapperStyle={{}}
					wrapperClass=''
					visible={true}
				/>
			</LoaderBox>
		</>,
		loaderPortal
	);
};

export default MiniLoader;
