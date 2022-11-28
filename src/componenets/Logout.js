import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.loginCallback(false);
    navigate('/');
  }, [navigate, props]);

  return null;
}
