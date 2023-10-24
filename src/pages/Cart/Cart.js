import React, { useState } from 'react';

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
      mock.forEach(ele => idArr.push(ele.id));
      setSelected(idArr);
    } else setSelected([]);
  };
  const handleDelete = (e, itemId) => {
    e.preventDefault();
    setCartItems(cartItems.filter(ele => ele.id !== itemId));
  };
  return (
    <div>
      {cartItems.map(item => {
        return (
          // <div>
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
            <td>{item.count}</td>
            <td>
              <button>+</button>
              <button>-</button>
            </td>
            <td>
              <button onClick={e => handleDelete(e, item.id)}>X</button>
            </td>
          </tr>
          // </div>
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
          <button>X</button>
        </td>
      </tr>
      <button>결제하기</button>
    </div>
  );
};

export default Cart;
