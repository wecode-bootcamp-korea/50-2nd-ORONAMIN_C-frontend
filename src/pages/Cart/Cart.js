import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const token = localStorage.getItem('token');

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
      .then(data => setCartItems(data));
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
    // const tmp = cartItems.filter(item => item.id === id)[0];
    // if (tmp.count <= 1) return;
    // else tmp.count--;
    // const next = [];
    // cartItems.map(item => {
    //   if (item.id === tmp.id) next.push(tmp);
    //   else next.push(item);
    // });
    // setCartItems([...next]);
    fetch('http://10.58.52.83:8000/users/cutProduct', {
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
    // const tmp = cartItems.filter(item => item.id === id)[0];
    // tmp.count++;
    // const next = [];
    // cartItems.map(item => {
    //   if (item.id === tmp.id) next.push(tmp);
    //   else next.push(item);
    // });
    // setCartItems([...next]);
    fetch('http://10.58.52.83:8000/users/addProduct', {
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

  // const handleClick = () => {
  //   fetch('', {
  //     method: 'POST',
  //     headers: {
  //       a: 'a',
  //     },
  //     body: JSON.stringify({
  //       cart: cartItems,
  //     }),
  //   });
  // };

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
              <tr key={item.product_id}>
                <td id="checkbox">
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
                    <button onClick={() => handleMinus(item.product_id)}>
                      -
                    </button>
                    <span id="countbox">{item.basket_quantity}</span>
                    <button onClick={() => handlePlus(item.product_id)}>
                      +
                    </button>
                  </div>
                </td>
                <td id="deletebox">
                  <button onClick={() => handleDelete(item.product_id)}>
                    X
                  </button>
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
              <p>
                {cartItems.reduce(
                  (acc, v) => acc + v.product_price * v.basket_quantity,
                  0,
                )}
              </p>
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
