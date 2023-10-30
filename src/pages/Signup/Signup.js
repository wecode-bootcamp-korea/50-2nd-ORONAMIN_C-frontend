import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');
  const navigate = useNavigate();

  const user = {
    email,
    password,
    phone_number: phone,
    birthday: birth,
  };

  const handleClick = () => {
    if (password === confirmPassword) {
      fetch('http://10.58.52.240:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'SIGNUP_SUCCESS') {
            alert('SUCCESS');
            navigate('/login');
          }
        });
    }
  };

  return (
    <>
      <input onChange={e => setEmail(e.target.value)} />
      <input onChange={e => setPassword(e.target.value)} />
      <input onChange={e => setConfirmPassword(e.target.value)} />
      <input onChange={e => setPhone(e.target.value)} />
      <input onChange={e => setBirth(e.target.value)} />
      <button onClick={handleClick}>회원가입</button>
    </>
  );
};

export default Signup;
