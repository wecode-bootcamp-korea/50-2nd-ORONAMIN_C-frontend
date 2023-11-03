import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartBtn.scss';

const CartBtn = ({ productId }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleAddToCart = e => {
    e.stopPropagation();
    if (token) {
      fetch('http://13.53.170.233:8000/orders/productBusket', {
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
