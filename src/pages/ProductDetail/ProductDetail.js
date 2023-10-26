import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="itemDetail">
      <img className="itemImg" src="/images/sample.png" alt="itemImg" />
      <div className="itemDetailInfo">
        <div className="itemDetailInfo1">
          <h1 className="itemName">item name</h1>
          <p className="itemDescription">itemDescription</p>
        </div>
        <div className="itemDetailInfo2">
          <h4 className="itemPrice">₩210,000원</h4>
          <button>카트에 추가담기</button>
        </div>
        <div className="itemDetailInfo3">
          <p className="itemScent">item scent</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
