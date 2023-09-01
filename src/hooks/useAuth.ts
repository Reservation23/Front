import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';

export default function useAuth(option: boolean | null) {
  /*
    null : 자유롭게 접근 가능
    true :  로그인한 유저만 출입 가능
    false : 로그인한 유저는 출입 불가능
    */
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (option) {
      if (!isLogin) {
        navigate('/signin');
      }
    } else {
      if (isLogin) {
        navigate('/');
      }
    }
  }, [isLogin]);
}
