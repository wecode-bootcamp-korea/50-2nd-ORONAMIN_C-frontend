import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const mock = [
    {
      id: 1,
      name: '사과',
      price: 1003,
      count: 2,
    },
    {
      id: 2,
      name: '바나나',
      price: 3004,
      count: 1,
    },
    {
      id: 3,
      name: '수박',
      price: 2005,
      count: 1,
    },
  ];
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([...mock]);
  const [selected, setSelected] = useState([]);

  const handleCheck = (checked, id) => {
    if (checked) {
      setSelected(prev => [...prev, id]);
    } else {
      setSelected(selected.filter(ele => ele !== id));
    }
  };
  const handleAllCheck = checked => {
    if (checked) {
      const idArr = [];
      cartItems.forEach(ele => idArr.push(ele.id));
      setSelected(idArr);
    } else setSelected([]);
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

  return (
    <div>
      <table>
        <tbody>
          {cartItems.map(item => {
            return (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={e => handleCheck(e.target.checked, item.id)}
                    checked={selected.includes(item.id) ? true : false}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button>-</button>
                  {item.count}
                  <button>+</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>X</button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <input
                type="checkbox"
                onChange={e => handleAllCheck(e.target.checked)}
                checked={selected.length === mock.length ? true : false}
              />
            </td>
            <td />
            <td>{cartItems.reduce((acc, v) => acc + v.price * v.count, 0)}</td>
            <td>
              <button onClick={() => handleCheckedDelete(selected)}>X</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          if (cartItems.length) navigate('/pay');
        }}
      >
        결제하기
      </button>
    </div>
  );
};

export default Cart;
