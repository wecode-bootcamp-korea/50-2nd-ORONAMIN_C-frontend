import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://10.58.52.234:8000/product-list/detail/${productId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setProductInfo(result));
  }, [productId]);

  const formatPriceWithCommas = price => {
    return price.toLocaleString();
  };

  return (
    <>
      {product &&
        product.map(data => (
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

const product = [
  {
    id: 12,
    name: '잉글리쉬 오크 앤 헤이즐넛',
    price: 220000,
    description:
      '잉글리쉬 오크 앤 헤이즐넛은 삼림지대에서 자라난 헤이즐넛의 바삭거림, 그레이프프루트의 매력, 상쾌한 이끼의 느낌, 엘리미의 스파이스, 우디한 베티버를 충분히 로스팅한 오크에서 담아내어 흙내음과 녹색이 어우러진 고혹적인 향을 선사합니다.',
    image_source: 'public/images/sample.png',
    scents_name: '스파이시',
  },
];
