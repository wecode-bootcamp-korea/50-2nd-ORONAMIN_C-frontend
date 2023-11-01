import React, { useState } from 'react';

const Admin = () => {
  const [item, setItem] = useState({
    name: '',
    brand: '',
    scent: '',
    price: 0,
  });
  const [brand, setBrand] = useState({
    brandName: '',
    brandLogo: '',
  });
  const [scent, setScent] = useState({
    scentName: '',
    scentDesc: '',
  });
  const token = localStorage.getItem('token');

  const handleItemChange = e => {
    setItem(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleBrandChange = e => {
    setBrand(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleScentChange = e => {
    setScent(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handlePost = () => {
    fetch('http://10.58.52.222:8000/product/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
  };

  const handleRead = item => {
    fetch(`http://10.58.52.222:8000/products/${item}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div>
      <div>
        <input name="productName" onChange={handleItemChange} />
        <input name="brandId" type="number" onChange={handleItemChange} />
        <input name="scentId" type="number" onChange={handleItemChange} />
        <input name="price" onChange={handleItemChange} />
        <input name="description" onChange={handleItemChange} />
        <button onClick={handlePost}>물품 등록</button>
      </div>
      <div>
        <button>브랜드 목록</button>
        <input name="brandName" onChange={handleBrandChange} />
        <input name="brandLogo" onChange={handleBrandChange} />
        <button onClick={() => handleRead(brand)}>브랜드 등록</button>
      </div>
      <div>
        <button>향 목록</button>
        <input name="scentName" onChange={handleScentChange} />
        <input name="scentDesc" onChange={handleScentChange} />
        <button onClick={() => handleRead(scent)}>브랜드 등록</button>
      </div>
      <div>
        <input />
        <button>물품 삭제</button>
      </div>
    </div>
  );
};

export default Admin;
