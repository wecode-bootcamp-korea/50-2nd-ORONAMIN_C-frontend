import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pay.scss';

const Pay = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [checked, setChecked] = useState(false);
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // fetch('/data/user.json');
    fetch('http://10.58.52.218:8000/users/info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);
  useEffect(() => {
    // fetch('/data/data.json')
    fetch('http://10.58.52.83:8000/users/order', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  const handleCheck = () => {
    setChecked(!checked);
    if (!checked) setAddress(user.address);
    else setAddress('');
  };

  const handlePay = () => {
    alert('hello!');
    navigate('/cart');
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
        <div id="row header">
          <div id="cell">물품명</div>
          <div id="cell">가격</div>
          <div id="cell">수량</div>
        </div>
        {cart.map(item => {
          return (
            <div key={item.product_id} id="row">
              <div id="cell">{item.product_name}</div>
              <div id="cell">{item.product_price}</div>
              <div id="cell">{item.basket_quantity}</div>
            </div>
          );
        })}
        <div>총액 : {cart.reduce((acc, v) => acc + v.price * v.count, 0)}</div>
      </div>
      <div>
        <button id="orderBtn" onClick={handlePay}>
          <p>결제하기</p>
        </button>
      </div>
    </div>
  );
};

export default Pay;
