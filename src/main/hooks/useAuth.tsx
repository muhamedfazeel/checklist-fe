import { useRecoilState, useRecoilValue } from 'recoil';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { userState, userValue } from '../auth';
import { ILoginResponse } from '../types/common.types';
import { httpService } from '../services/httpService';
import { AUTH_KEY } from '../constants/constants';

const useAuth = () => {
  const [userData, setUserData] = useRecoilState(userState);
  const userValues = useRecoilValue(userValue);

  const navigate = useNavigate();

  const setUserDataFromToken = (token: string) => {
    const payload = jwtDecode<ILoginResponse>(token);

    httpService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem(AUTH_KEY, token);
    setUserData({ user: payload.user });

    navigate('/');
  };

  const logout = () => {
    setUserData({ user: null });
    localStorage.setItem(AUTH_KEY, '');
    navigate('/');
  };

  return {
    ...userData,
    isAuthenticated: userValues.isAuthenticated,
    setUserDataFromToken,
    logout,
  };
};

export default useAuth;
