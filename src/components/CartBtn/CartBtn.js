import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartBtn.scss';

const CartBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const [cartNum, setCartNum] = useState();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/ProductDetail'); //장바구니에 상품추가 되는 기능 필요
  };
  // // useEffect(() => {
  // fetch('api주소', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //   },
  //   body: JSON.stringify({
  //     num: cartNum,
  //   }),
  // })
  //   .then(res => res.json())
  //   .then(result => setCartNum(result.data));
  // // }, []);

  return (
    <div
      className="cartButtonContainer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <button onClick={handleAddToCart}>장바구니 담기</button>}
    </div>
  );
};

export default CartBtn;
