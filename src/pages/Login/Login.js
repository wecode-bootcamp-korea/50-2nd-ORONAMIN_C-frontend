import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToMain = () => {
    navigate('/main');
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePw = e => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    if (isValid()) {
      fetch('http://10.58.52.218:8000/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'SIGNIN_SUCCESS') {
            localStorage.setItem('token', data.token);
            navigate('/signup');
          } else {
            alert('error');
          }
        });
    }
  };
  const isValid = () => {
    const regExpEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (password.length < 10) return false;
    if (!regExpEmail.test(email)) return false;
    return true;
  };
  return (
    <div className="Login">
      <div className="titleWrap">로그인</div>
      <div>
        <hr />
      </div>
      <div className="content">
        <div className="inputTitle">이메일</div>
        <div className="inputWrap">
          <input
            className="input"
            placeholder="이메일"
            type="text"
            onChange={handleEmail}
          />
        </div>
        <div className="inputTitle">비밀번호</div>
        <div className="inputWrap">
          <input
            className="input"
            placeholder="비밀번호"
            type="password"
            onChange={handlePw}
          />
        </div>
      </div>
      <div className="btn1">
        <button className="btn" onClick={handleClick}>
          로그인
        </button>
      </div>
    </div>
  );
};
export default Login;
