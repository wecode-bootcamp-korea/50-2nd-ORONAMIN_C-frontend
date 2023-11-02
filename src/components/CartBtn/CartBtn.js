import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartBtn.scss';

const CartBtn = ({ productId }) => {
  const navigate = useNavigate();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrYWthb2RkZGRkQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoi7J287JqU7J28IOuwpOydmCDsi6zsi6ztlZwg6rOg7Iq064-E7LmYIiwic3RhdHVzIjowLCJpYXQiOjE2OTgzOTA2MzcsImV4cCI6MTczNDM5MDYzN30.FzeJQLsft8Z8nWsleGXGwWuqLsB6u-HzLNA-PsZ0pCA';

  const handleAddToCart = e => {
    e.stopPropagation();
    if (token) {
      fetch('http://10.58.52.220:8000/users/addBusket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: productId,
        }),
      }).then(res => {
        if (res.ok) {
          alert('장바구니 담기 완료!');
          navigate(`/product-list/detail/${productId}`);
        }
      });
    } else {
      alert('로그인 후에 이용가능합니다!');
      navigate('/Login');
    }
  };

  return (
    <div className="cartButtonContainer">
      <button className="btn" onClick={handleAddToCart}>
        카트에 추가하기
      </button>
    </div>
  );
};

export default CartBtn;
