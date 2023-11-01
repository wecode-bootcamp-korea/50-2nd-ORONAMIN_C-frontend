import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const navigate = useNavigate();
  const { productId } = useParams();

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrYWthb2RkZGRkQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoi7J287JqU7J28IOuwpOydmCDsi6zsi6ztlZwg6rOg7Iq064-E7LmYIiwic3RhdHVzIjowLCJpYXQiOjE2OTgzOTA2MzcsImV4cCI6MTczNDM5MDYzN30.FzeJQLsft8Z8nWsleGXGwWuqLsB6u-HzLNA-PsZ0pCA';

  // `http://10.58.52.234:8000/product-list/detail/${productId}`
  // '/data/recommendData.json'
  useEffect(() => {
    fetch(`http://10.58.52.234:8000/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setProductInfo(result.product));
  }, [productId]);

  const goToAddProduct = ({ productId }) => {
    fetch('http://10.58.52.220:8000/users/addBusket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_id: productId,
      }),
    }).then(res => {
      if (res.ok) {
        alert('장바구니 담기 완료!');
        navigate(`/product-list/detail/${productId}`);
      }
    });
  };

  const formatPriceWithCommas = price => {
    return price.toLocaleString();
  };

  return (
    <>
      {productInfo?.map(data => (
        <div key={data.id} className="itemDetail">
          <img className="itemImg" src={data.image_source} alt="itemImg" />
          <div className="itemDetailInfo">
            <div className="itemDetailInfo1">
              <h1 className="itemName">{data.name}</h1>
              <p className="itemDescription">{data.description}</p>
            </div>
            <div className="itemDetailInfo2">
              <h4 className="itemPrice">
                ₩{formatPriceWithCommas(data.price)}
              </h4>
            </div>
            <button
              className="btn"
              onClick={() => goToAddProduct({ productId: data.id })}
            >
              카트에 추가담기
            </button>
            <div className="itemDetailInfo3">
              <label className="itemScent">향</label>
              <hr />
              <p className="itemScenName">{data.scents_name}</p>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default ProductDetail;
