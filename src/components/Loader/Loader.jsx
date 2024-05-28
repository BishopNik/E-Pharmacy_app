/** @format */

import { createPortal } from 'react-dom';
import { Watch } from 'react-loader-spinner';
import { LoaderBox, Overlay } from './Loader.styled';

const loaderPortal = document.querySelector('#loader-root');

const Loader = () => {
	return createPortal(
		<Overlay style={{ zIndex: '9999' }}>
			<LoaderBox>
				<Watch
					visible={true}
					height='200'
					width='200'
					radius='48'
					color='#59B17A'
					ariaLabel='watch-loading'
					wrapperStyle={{}}
					wrapperClass=''
				/>
			</LoaderBox>
		</Overlay>,
		loaderPortal
	);
};

export default Loader;
