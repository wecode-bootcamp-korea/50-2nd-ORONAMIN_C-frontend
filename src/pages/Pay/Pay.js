import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pay.scss';

const Pay = () => {
  const [user, setUser] = useState({
    nickname: 'boo',
    address: 'abc abcd abcde',
    phone: '010-111-1234',
    point: 10000,
  });
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    if (!checked) setAddress(user.address);
    else setAddress('');
  };
  return (
    <div id="Pay">
      <div id="userDB">
        <p>주문자 : {user.nickname}</p>
        <p>주소 : {user.address}</p>
        <p>전화번호 : {user.phone}</p>
      </div>
      <div id="addressBox">
        <p>배송 주소 :</p>
        <input
          id="address"
          value={address}
          placeholder="주소를 입력해 주세요"
          onChange={e => setAddress(e.target.value)}
        />
        <div>
          <span>위 주소와 동일한 주소를 사용합니다.</span>
          <input type="checkbox" onChange={handleCheck} />
        </div>
      </div>
      <div id="cartDB">
        <p>현재 포인트 : {user.point}</p>
        <p>이거 : 얼마</p>
        <p>저거 : 얼마</p>
        <p>그거 : 얼마</p>
      </div>
      <div>
        <button
          id="orderBtn"
          onClick={() => {
            alert('hello!');
            navigate('/cart');
          }}
        >
          <p>결제하기</p>
        </button>
      </div>
    </div>
  );
};

export default Pay;
