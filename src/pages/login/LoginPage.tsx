import { GoogleLogin } from '@react-oauth/google';
import useAuth from '../../main/hooks/useAuth';
import { httpService } from '../../main/services/httpService';
import { AUTH_KEY } from '../../main/constants/constants';
import { ENDPOINTS } from '../../main/constants/endpoints';
import './LoginPage.css';
import { useState } from 'react';
import Loader from '../../components/atoms/loader/Loader';

const LoginPage = () => {
	const { setUserDataFromToken } = useAuth();
	const [isLoading, setIsLoading] = useState(false);

	const login = async (credentials: string) => {
		setIsLoading(true);
		const { data } = await httpService.post(
			ENDPOINTS.auth.login,
			{},
			{
				headers: {
					'x-user-auth-token': credentials,
				},
			}
		);
		const token = data.data.accessToken;

		setUserDataFromToken(token);
		setIsLoading(false);
	};
	const isUserLoggedIn = localStorage.getItem(AUTH_KEY);
	return (
		<>
			{!isUserLoggedIn ? (
				<div className='login-page'>
					<div className='login-bg'></div>
					{isLoading && <Loader />}
					{!isLoading && (
						<div className='btn-container'>
							<button className='login-btn'>
								<GoogleLogin
									onSuccess={(response) => {
										if (response?.credential) {
											login(response.credential);
										}
									}}
									onError={() => {
										console.log('Login Failed');
									}}
									width={'100%'}
								/>
							</button>
						</div>
					)}
				</div>
			) : (
				<div>
					<h1>Signed In</h1>
				</div>
			)}
		</>
	);
};
export default LoginPage;
