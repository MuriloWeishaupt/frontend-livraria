import { useEffect } from 'react';
import { GetUser } from './auth';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRouter({ children, roles }) {
  const navigate = useNavigate();
  const user = GetUser();

  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true });
      return;
    }

    if (roles && !roles.includes(user.typeUser)) {
      navigate('/home', { replace: true });
    }
  }, [user, roles, navigate]);


  if (!user) return null;

  return children;
}
