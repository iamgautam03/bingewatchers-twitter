import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../apis/auth';

export default function Logout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout();
    props.loginCallback(false);
    navigate('/');
  }, [navigate, props]);

  return null;
}
