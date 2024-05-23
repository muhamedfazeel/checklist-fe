import { useLocation, useNavigate } from 'react-router-dom';

const useLoginRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    navigate('/login', { state: { prev: location.pathname } });
  };

  return logout;
};

export default useLoginRedirect;
