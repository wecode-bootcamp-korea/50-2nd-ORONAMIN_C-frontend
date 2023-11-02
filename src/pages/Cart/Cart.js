import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // fetch('http://10.58.52.220:8000/orders/order', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => setCartItems(data));
  }, [cartItems]);

  const handleCheck = (checked, id) => {
    if (checked) {
      setSelected(prev => [...prev, id]);
    } else {
      setSelected(selected.filter(ele => ele !== id));
    }
  };

  const handleAllCheck = () => {
    if (!isAllChecked) {
      setSelected(cartItems.map(({ id }) => id));
    } else setSelected([]);
  };

  const handleMinus = id => {
    fetch('http://10.58.52.220:8000/orders/userProductQuantity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_id: id,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  const handlePlus = id => {
    fetch('http://10.58.52.220:8000/orders/ProductQuantity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_id: id,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  const handleDelete = itemId => {
    // setCartItems(cartItems.filter(ele => ele.id !== itemId));
    fetch('http://10.58.52.220:8000/orders/busket', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_id: itemId,
      }),
    });
  };

  const handleCheckedDelete = () => {
    selected.forEach(itemId => {
      fetch('http://10.58.52.220:8000/orders/busket', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: itemId,
        }),
      });
    });
  };

  const isAllChecked =
    selected.length === cartItems.length && cartItems.length !== 0;

  return (
    <div className="Cart">
      <table>
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
              <tr key={item.product_id}>
                <td className="checkbox">
                  <input
                    type="checkbox"
                    onChange={e =>
                      handleCheck(e.target.checked, item.product_id)
                    }
                    checked={selected.includes(item.product_id)}
                  />
                </td>
                <td>{item.product_name}</td>
                <td>{item.product_price}</td>
                <td>
                  <div>
                    <button
                      disabled={item.basket_quantity === 1}
                      onClick={() => handleMinus(item.product_id)}
                    >
                      -
                    </button>
                    <span className="countbox">{item.basket_quantity}</span>
                    <button onClick={() => handlePlus(item.product_id)}>
                      +
                    </button>
                  </div>
                </td>
                <td className="deletebox">
                  <button onClick={() => handleDelete(item.product_id)}>
                    X
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="checkbox">
              <input
                type="checkbox"
                onChange={e => handleAllCheck(e.target.checked)}
                checked={isAllChecked}
              />
            </td>
            <td />
            <td>
              <p>
                {cartItems.reduce(
                  (acc, v) => acc + v.product_price * v.basket_quantity,
                  0,
                )}
              </p>
            </td>
            <td />
            <td className="deletebox">
              <button onClick={handleCheckedDelete}>X</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          className="payBtn"
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
