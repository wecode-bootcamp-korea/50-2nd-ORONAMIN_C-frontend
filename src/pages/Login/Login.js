import React from 'react';
import { useEffect, useState } from 'react';
import './Login.scss';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [color, setColor] = useState('red');

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePw = e => {
    setPassword(e.target.value);
  };
  const handleColor = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.token);
        } else {
          alert('error');
        }
      });
  };

  // useEffect(() => {
  //   const isCorrect = email.includes('@') && password.length >= 5;
  //   if (isCorrect) {
  //     setColor('blue');
  //   } else {
  //     setColor('red');
  //   }
  // }, [email, password]);
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
            onchange={handleEmail}
            // onchange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="inputTitle">비밀번호</div>
        <div className="inputWrap">
          <input
            className="input"
            placeholder="비밀번호"
            type="password"
            onchange={handlePw}
          />
        </div>
      </div>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <div className="go">회원가입</div>
      </Link>
      <div>
        <button className="btn" onclick={handleColor}>
          로그인
        </button>
      </div>
    </div>
  );
};
export default Login;
