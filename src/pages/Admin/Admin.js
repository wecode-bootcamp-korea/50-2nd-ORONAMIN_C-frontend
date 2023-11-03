import React, { useState } from 'react';

const Admin = () => {
  const [item, setItem] = useState({
    productName: '',
    brandId: '',
    scentId: '',
    price: 0,
    description: '',
    imageId: 27,
  });
  const [brand, setBrand] = useState({
    brandName: '',
    brandLogo: '',
  });
  const [scent, setScent] = useState({
    scentName: '',
    scentDesc: '',
  });
  const [id, setId] = useState(0);
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
    fetch('http://13.53.170.233:8000/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  const handleUpdate = () => {
    const tmp = Object.fromEntries(
      Object.entries(item).filter(
        ([key, value]) =>
          value !== '' && value !== null && value !== undefined && value !== 0,
      ),
    );
    fetch(`http://13.53.170.233:8000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(tmp),
    });
  };

  const handleRead = item => {
    fetch(`http://13.53.170.233:8000/${item}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  const handleItemPost = (kind, item) => {
    fetch(`http://13.53.170.233:8000/${kind}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
  };

  const handleItemUpdate = (kind, item) => {
    fetch(`http://13.53.170.233:8000/${kind}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
  };

  const handleDelete = () => {
    fetch(`http://13.53.170.233:8000/products/${id}`, {
      method: 'DELETE',
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
        <button onClick={handleUpdate}>물품 수정</button>
      </div>
      <div>
        <button onClick={() => handleRead('brands')}>브랜드 목록</button>
        <input name="brandName" onChange={handleBrandChange} />
        <input name="brandLogo" onChange={handleBrandChange} />
        <button onClick={() => handleItemPost('brands', brand)}>
          브랜드 등록
        </button>
        <button onClick={() => handleItemUpdate('brands', brand)}>
          브랜드 수정
        </button>
      </div>
      <div>
        <button onClick={() => handleRead('scents')}>향 목록</button>
        <input name="scentName" onChange={handleScentChange} />
        <input name="scentDesc" onChange={handleScentChange} />
        <button onClick={() => handleItemPost('scents', scent)}>향 등록</button>
        <button onClick={() => handleItemUpdate('scents', scent)}>
          향 수정
        </button>
      </div>
      <div>
        <input onChange={e => setId(e.target.value)} />
        <button onClick={handleDelete}>물품 삭제</button>
      </div>
    </div>
  );
};

export default Admin;
