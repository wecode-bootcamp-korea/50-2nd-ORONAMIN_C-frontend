import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repw, setRepw] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleRepw = e => {
    setRepw(e.target.value);
  };
  const handleBirth = e => {
    setBirth(e.target.value);
  };
  const handlePhone = e => {
    setPhone(e.target.value);
  };
  const correctPw = () => {
    if (repw === password) {
      fetch('http://10.58.52.218:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email,
          password,
          phone_number: phone,
          birthday: birth,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'SIGNUP_SUCCESS') {
            alert('회원가입이 성공했습니다');
            goToLogin();
          } else {
            alert('회원가입의 실패했습니다');
          }
        });
    }
  };
  return (
    <div className="signup">
      <div className="titleWrap">회원 가입</div>
      <div className="sub">기본정보</div>
      <div className="inputWrap">
        <input className="input" placeholder="이메일" onChange={handleEmail} />
      </div>
      <div className="inputWrap">
        <input
          className="input"
          placeholder="비밀번호"
          onChange={handlePassword}
        />
      </div>
      <div className="inputWrap">
        <input
          className="input"
          placeholder="비밀번호 확인"
          onChange={handleRepw}
        />
      </div>
      <div className="inputWrap">
        <input className="input" placeholder="생일" onChange={handleBirth} />
      </div>
      <div className="inputWrap">
        <input
          className="input"
          placeholder="휴대폰번호"
          onChange={handlePhone}
        />
      </div>
      <button className="btn" onClick={correctPw}>
        회원 가입
      </button>
    </div>
  );
};

export default Signup;
