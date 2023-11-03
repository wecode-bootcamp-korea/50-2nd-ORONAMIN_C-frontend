import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const navigate = useNavigate();
  const { productId } = useParams();

  const token = localStorage.getItem('token');

  // `http://13.53.170.233:8000/product-list/detail/${productId}`
  // '/data/recommendData.json'
  useEffect(() => {
    fetch(`http://13.53.170.233:8000/product-list/detail/${productId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setProductInfo(result.product));
  }, [productId]);

  const goToAddProduct = ({ productId }) => {
    if (token) {
      fetch('http://13.53.170.233:8000/orders/productBusket', {
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
    } else {
      alert('로그인 후에 이용가능합니다!');
      navigate('/Login');
    }
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
