import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(data => setCartItems(data));
  }, []);

  const handleCheck = (checked, id) => {
    if (checked) {
      setSelected(prev => [...prev, id]);
    } else {
      setSelected(selected.filter(ele => ele !== id));
    }
  };

  const handleAllCheck = () => {
    if (isAllChecked) {
      const idArr = [];
      cartItems.forEach(ele => idArr.push(ele.id));
      setSelected(idArr);
    } else setSelected([]);
  };

  const handleMinus = id => {
    const tmp = cartItems.filter(item => item.id === id)[0];
    if (tmp.count <= 1) return;
    else tmp.count--;
    const next = [];
    cartItems.map(item => {
      if (item.id === tmp.id) next.push(tmp);
      else next.push(item);
    });
    setCartItems([...next]);
  };

  const handlePlus = id => {
    const tmp = cartItems.filter(item => item.id === id)[0];
    tmp.count++;
    const next = [];
    cartItems.map(item => {
      if (item.id === tmp.id) next.push(tmp);
      else next.push(item);
    });
    setCartItems([...next]);
  };

  const handleDelete = itemId => {
    setCartItems(cartItems.filter(ele => ele.id !== itemId));
  };

  const handleCheckedDelete = selected => {
    let tmp = [];
    selected.forEach(item => (tmp = cartItems.filter(ele => ele.id !== item)));
    selected.forEach(item => (tmp = tmp.filter(ele => ele.id !== item)));
    setCartItems(tmp);
  };

  const isAllChecked =
    selected.length === cartItems.length && selected.length !== 0;

  return (
    <div id="Cart">
      <table id="rwd-table-large">
        <thead>
          <tr>
            <th />
            <th id="item">물품명</th>
            <th id="price">가격</th>
            <th id="count">수량</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => {
            return (
              <tr key={item.id}>
                <td id="checkbox">
                  <input
                    type="checkbox"
                    onChange={e => handleCheck(e.target.checked, item.id)}
                    checked={selected.includes(item.id)}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <div>
                    <button onClick={() => handleMinus(item.id)}>-</button>
                    <span>{item.count}</span>
                    <button onClick={() => handlePlus(item.id)}>+</button>
                  </div>
                </td>
                <td id="deletebox">
                  <button onClick={() => handleDelete(item.id)}>X</button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td id="checkbox">
              <input
                type="checkbox"
                onChange={e => handleAllCheck(e.target.checked)}
                checked={isAllChecked}
              />
            </td>
            <td />
            <td>
              <p>{cartItems.reduce((acc, v) => acc + v.price * v.count, 0)}</p>
            </td>
            <td />
            <td id="deletebox">
              <button onClick={() => handleCheckedDelete(selected)}>X</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          id="payBtn"
          onClick={() => {
            if (cartItems.length) navigate('/pay');
          }}
        >
          <p>결제하기</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
