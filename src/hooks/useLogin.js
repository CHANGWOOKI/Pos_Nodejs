import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();  // 페이지 이동을 위한 훅

  const handleLogin = (id, pw) => {
    if (id && pw) {
      navigate('/index');
    } else {
      alert('ID와 PW를 입력하세요.');
    }
  };

  return { handleLogin };
};

export default useLogin;