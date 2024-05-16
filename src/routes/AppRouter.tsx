import { Route, Routes } from 'react-router-dom';
import Home from '../pages/homepage/Home';
import LoginPage from '../pages/login/LoginPage';
import Layout from '../main/layout/Layout';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route
				path='/'
				element={
					<Layout>
						<Home />
					</Layout>
				}
			/>
		</Routes>
	);
};

export default AppRouter;
