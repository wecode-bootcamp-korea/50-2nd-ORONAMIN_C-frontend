import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repw, setRepw] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [nickname, setNickname] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');
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
  const handleNickname = e => {
    setNickname(e.target.value);
  };
  const handleAddress = e => {
    setAddress(e.target.value);
  };
  const handleSex = e => {
    setSex(e.target.value);
  };

  const user = {
    email,
    password,
    phone_number: phone,
    birthday: birth,
    nickname,
    address,
    gender: sex,
  };
  const tmp = {};
  for (const key in user) {
    if (user[key] !== '') {
      tmp[key] = user[key];
    }
  }
  const correctPw = () => {
    if (isValid()) {
      fetch('http://13.53.170.233:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(tmp),
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
  const isValid = () => {
    const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    const regExpBirth = /^\d{4}-\d{2}-\d{2}$/;
    const regExpEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (repw !== password) return false;
    if (password.length < 10) return false;
    if (!regExp.test(phone)) return false;
    if (!regExpEmail.test(email)) return false;
    if (!regExpBirth.test(birth)) return false;
    return true;
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
          type="password"
          onChange={handlePassword}
        />
      </div>
      <div className="inputWrap">
        <input
          className="input"
          placeholder="비밀번호 확인"
          type="password"
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
      <div className="inputWrap">
        <input
          className="input"
          onChange={handleNickname}
          placeholder="닉네임"
        />
      </div>
      <div className="inputWrap">
        <input className="input" onChange={handleAddress} placeholder="주소" />
      </div>
      <div className="inputWrap">
        <input className="input" placeholder="성별" onChange={handleSex} />
      </div>
      <div className="btn1">
        <button className="btn" onClick={correctPw}>
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default Signup;
