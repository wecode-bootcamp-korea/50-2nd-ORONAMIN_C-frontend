import React, { useState, useEffect } from 'react';
import CartBtnComponent from '../../components/CartBtn/CartBtn';
import SubCategoryComponent from '../../components/SubCategory/SubCategory';
import MainCategoryComponent from '../../components/MainCategory/MainCategory';
import { useNavigate } from 'react-router-dom';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [productGrid, setProductGrid] = useState([]);
  const [subCategory, setSubCategory] = useState('');
  const [subDescriptionBody, setSubDescriptionBody] = useState('');

  const goToProductDetail = () => {
    navigate('/ProductDetail');
  };

  useEffect(() => {
    fetch('api주소', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setProductGrid(result.data));
  }, [subCategory]);

  return (
    <div>
      <div className="contaner">
        <MainCategoryComponent />
        <SubCategoryComponent />
        <div className="contanerDetail">
          <div className="subInfo">
            <div
              className="subCategory"
              onChange={e => setSubCategory(e.target.value)}
              value={subCategory}
            />
            <div
              className="subDescriptionBody"
              onChange={e => setSubDescriptionBody(e.target.value)}
              value={subDescriptionBody}
            />
          </div>
          <div className="productList">
            {MOK.map(data => (
              <li key={data.id} className="productGrid">
                <img
                  className="itemImg"
                  src={data.itemImg}
                  alt="itemImg"
                  onClick={goToProductDetail}
                />
                <div className="itemInfo">
                  <div className="info1">
                    <h5 className="itemName">{data.itemName}</h5>
                    <p className="itemDescription">{data.itemDescription}</p>
                  </div>
                  <div className="info2">
                    <div className="capacity">{data.Capacity}</div>
                    <div className="price">{data.Price}</div>
                  </div>
                </div>
                <CartBtnComponent />
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

//Mok데이터
const MOK = [
  {
    id: 1,
    itemImg:
      'https://velog.velcdn.com/images/rayong/post/30a5de22-fd54-46bc-b540-e906c2c4bf48/image.jpg',
    itemName: '우라논 오 드 퍼퓸',
    itemDescription: '변함없이 우뚝 서 있는 모노리스에서 영감을 받아 탄생',
    Capacity: '50ml',
    Price: 210000,
  },
  {
    id: 2,
    itemImg:
      'https://velog.velcdn.com/images/rayong/post/30a5de22-fd54-46bc-b540-e906c2c4bf48/image.jpg',
    itemName: '우라논 오 드 퍼퓸',
    itemDescription: '변함없이 우뚝 서 있는 모노리스에서 영감을 받아 탄생',
    Capacity: '50ml',
    Price: 210000,
  },
  {
    id: 3,
    itemImg:
      'https://velog.velcdn.com/images/rayong/post/30a5de22-fd54-46bc-b540-e906c2c4bf48/image.jpg',
    itemName: '우라논 오 드 퍼퓸',
    itemDescription: '변함없이 우뚝 서 있는 모노리스에서 영감을 받아 탄생',
    Capacity: '50ml',
    Price: 210000,
  },
  {
    id: 4,
    itemImg:
      'https://velog.velcdn.com/images/rayong/post/30a5de22-fd54-46bc-b540-e906c2c4bf48/image.jpg',
    itemName: '우라논 오 드 퍼퓸',
    itemDescription: '변함없이 우뚝 서 있는 모노리스에서 영감을 받아 탄생',
    Capacity: '50ml',
    Price: 210000,
  },
  // {
  //   id: 5,
  //   itemImg:
  //     'https://velog.velcdn.com/images/rayong/post/30a5de22-fd54-46bc-b540-e906c2c4bf48/image.jpg',
  //   itemName: '우라논 오 드 퍼퓸',
  //   itemDescription: '변함없이 우뚝 서 있는 모노리스에서 영감을 받아 탄생',
  //   Capacity: '50ml',
  //   Price: 210000,
  // },
  // {
  //   id: 6,
  //   itemImg:
  //     'https://velog.velcdn.com/images/rayong/post/30a5de22-fd54-46bc-b540-e906c2c4bf48/image.jpg',
  //   itemName: '우라논 오 드 퍼퓸',
  //   itemDescription: '변함없이 우뚝 서 있는 모노리스에서 영감을 받아 탄생',
  //   Capacity: '50ml',
  //   Price: 210000,
  // },
];

//{
//   "products": [
//     {
//         "id": 5,
//         "name": "딥다크21",
//         "price": 100,
//         "description": "냄새가좋아유",
//         "created_at": "2023-10-24T19:58:57.000Z",
//         "updated_at": null,
//         "brand_id": 2,
//         "scent_id": 1
//     },
