import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';

export default function useAuth() {
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/signin');
    }
  }, [isLogin]);
}
