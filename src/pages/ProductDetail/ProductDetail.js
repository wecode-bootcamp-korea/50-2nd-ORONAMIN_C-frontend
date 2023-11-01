import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const { id } = useParams();
  // console.log(id);

  // `http://10.58.52.234:8000/product-list/detail/${productId}`
  // '/data/recommendData.json'
  useEffect(() => {
    fetch('/data/productDetail.json', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setProductInfo(result.product));
  }, [id]);
  // console.log(setProductInfo());

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
            <button className="btn">카트에 추가담기</button>
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
