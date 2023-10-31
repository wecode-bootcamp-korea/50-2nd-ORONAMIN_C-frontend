import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartBtn.scss';

const CartBtn = ({ productId }) => {
  const navigate = useNavigate();

  const handleAddToCart = e => {
    e.stopPropagation();

    alert('장바구니 담기 완료!');

    // fetch('http://10.58.52.234:8000/cart', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     product_id: productId,
    //   }),
    // }).then(res => {
    //   if (res.ok) {
    //     navigate('/cart'); //장바구니에 상품추가 되는 기능 필요
    //   }
    // });
  };

  return (
    <div className="cartButtonContainer">
      <button className="btn" onClick={handleAddToCart}>
        장바구니 담기
      </button>
    </div>
  );
};

export default CartBtn;
