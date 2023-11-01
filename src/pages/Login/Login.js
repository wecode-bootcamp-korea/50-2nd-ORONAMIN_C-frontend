import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    fetch('http://10.58.52.212:8000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SIGNIN_SUCCESS') {
          localStorage.setItem('token', data.token);
          navigate('/cart');
        }
      });
  };
  return (
    <>
      <input onChange={e => setEmail(e.target.value)} />
      <input onChange={e => setPw(e.target.value)} />
      <button onClick={handleClick}>LOGIN</button>
    </>
  );
};

export default Login;
