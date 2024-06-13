/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from 'components/App';
import { Context } from 'hooks';
import { GlobalStyle } from 'helpers/GlobalStyle';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename='/'>
			<Context>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
				<Toaster
					position='top-right'
					reverseOrder={false}
					gutter={8}
					toastOptions={{
						duration: 5000,
						style: {
							background: '#fdfbea',
							color: '#000000',
						},
					}}
				/>
				<GlobalStyle />
			</Context>
		</BrowserRouter>
	</React.StrictMode>
);
