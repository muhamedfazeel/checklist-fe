import { GoogleLogin } from '@react-oauth/google';
import useAuth from '../../main/hooks/useAuth';
import { httpService } from '../../main/services/httpService';
import { AUTH_KEY } from '../../main/constants/constants';
import { ENDPOINTS } from '../../main/constants/endpoints';
import './LoginPage.css';

const LoginPage = () => {
	const { setUserDataFromToken } = useAuth();

	const login = async (credentials: string) => {
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
	};
	const isUserLoggedIn = localStorage.getItem(AUTH_KEY);
	return (
		<>
			{!isUserLoggedIn ? (
				<div className='login-page'>
					<div className='login-bg'></div>
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
