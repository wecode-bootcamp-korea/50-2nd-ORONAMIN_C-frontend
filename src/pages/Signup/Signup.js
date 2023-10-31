import React from 'react';
import './Signup.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repw, setRepw] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

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
      fetch('', {
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
        .then(data => console.log(data));
    } else {
      alert('비밀번호가 다릅니다');
    }
  };
  return (
    <div className="signup">
      <input onChange={handleEmail} />
      <input placeholder="비밀번호" onChange={handlePassword} />
      <input placeholder="비밀번호 확인" onChange={handleRepw} />
      <input onChange={handleBirth} />
      <input onChange={handlePhone} />
      <button onClick={correctPw}>sad</button>
    </div>
  );
};

export default Signup;

// set~~이 함수는 input에 값을 입력해줄때마다 저장하는 역할을 handle~~함수에 넣어줘서 onchange이벤트에 handle을 넣어주면

// if (confirmPassword === password) {
//   fetch()
//     .then()
//     .then(data => console.log(data));
// } else {
//   alert();
// }

// input 5개 (이메일,패스워드,생일,폰번호,패스워드 확인) 각각 usestate 만들고 onchange  패스워드 ,패스워드 확인 조건문으로
// 두개가 같으면 fetch 보내고 아닐시 alert 이걸 변수로 만들어서 button onclick함수에 넣어준다 토큰은 필요없다
// button 태그 하나
