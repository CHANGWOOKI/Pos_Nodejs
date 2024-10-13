import React, { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import '../../components/css/Login.scss';

const Login = () => {
  const { handleLogin } = useLogin();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>로그인 페이지</h1>
        <label>ID</label>
        <input 
          type="text" 
          placeholder="아이디 입력" 
          value={id} 
          onChange={(e) => setId(e.target.value)}
        />
        <label>PW</label>
        <input 
          type="password" 
          placeholder="비밀번호 입력" 
          value={pw} 
          onChange={(e) => setPw(e.target.value)}
        />
        <button onClick={() => handleLogin(id, pw)}>로그인</button>
      </div>
    </div>
  );
}

export default Login;