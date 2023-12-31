import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pay.scss';

const Pay = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [sum, setSum] = useState(0);
  const [checked, setChecked] = useState(false);
  const [cart, setCart] = useState([]);
  const [point, setPoint] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    // fetch('/data/user.json')
    fetch('http://13.53.170.233:8000/users/info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        let tmp = data.point;
        let result = tmp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        setPoint(result);
      });
  }, []);
  useEffect(() => {
    fetch('/data/data.json')
      // fetch('http://13.53.170.233:8000/orders/', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8',
      //     authorization: `Bearer ${token}`,
      //   },
      // })
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);
  useEffect(() => {
    setSum(
      cart.reduce((acc, v) => acc + v.product_price * v.basket_quantity, 0),
    );
  }, [cart]);
  const handleCheck = () => {
    setChecked(!checked);
    if (!checked) setAddress(user.address);
    else setAddress('');
  };

  const handlePay = () => {
    const tmp = cart.map(item => {
      return { ...item, id: item.product_id, quantity: item.basket_quantity };
    });
    fetch('http://13.53.170.233:8000/orders/paymentBasket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        order_number: '1234',
        total_price: sum,
        address,
        products: tmp,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'PAYMENT COMPLETE!') {
          alert('결제가 정상 처리되었습니다!');
          navigate('/login');
        } else {
          alert('결제 도중 오류가 발생했습니다.');
        }
      });
  };

  return (
    <div className="Pay">
      <div className="userDB">
        <div className="userText">주문자 정보</div>
        <p>주문자 : {user.nickname}</p>
        <p>주소 : {user.address}</p>
        <p>전화번호 : {user.phone}</p>
      </div>
      <div className="addressBox">
        <div className="addressText">배송 주소 :</div>
        <input
          className="address"
          value={address}
          placeholder="주소를 입력해 주세요"
          onChange={e => setAddress(e.target.value)}
        />
        <div>
          <span>위 주소와 동일한 주소를 사용합니다.</span>
          <input type="checkbox" onChange={handleCheck} />
        </div>
      </div>
      <div className="cartDB">
        {/* <div className="row header">
          <div className="cell">물품명</div>
          <div className="cell">가격</div>
          <div className="cell">수량</div>
        </div>
        {cart.map(item => {
          return (
            <div key={item.product_id} className="row">
              <div className="cell">{item.product_name}</div>
              <div className="cell">{item.product_price}</div>
              <div className="cell">{item.basket_quantity}</div>
            </div>
          );
        })} */}
        <div className="container">
          <div className="headerCell">물품명</div>
          <div className="headerCell">가격</div>
          <div className="headerCell">수량</div>
          {cart.map(item => {
            return (
              <>
                <div className="cell">
                  <span>{item.product_name}</span>
                  <img className="img" src={item.product_img} />
                </div>
                <div className="cell">{item.product_price}</div>
                <div className="cell">{item.basket_quantity}</div>
              </>
            );
          })}
        </div>
        <p>총액 :{sum}</p>
        <p>현재 포인트 : {point}</p>
      </div>
      <div>
        <button className="orderBtn" onClick={handlePay}>
          <p>결제하기</p>
        </button>
      </div>
    </div>
  );
};

export default Pay;
