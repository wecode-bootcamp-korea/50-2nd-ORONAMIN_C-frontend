import React, { useState, useEffect } from 'react';
import './Category.scss';

const Category = () => {
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    fetch('api주소', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setSubCategory(result.data));
  }, [subCategory]);

  return (
    <div className="category">
      <div className="mainCategory">
        <label id="mainCategoryName">scent</label>
        {MOK.map(data => (
          <ul key={data.scent_id} className="scentSubCategory">
            <li>{data.subCategory}</li>
          </ul>
        ))}
      </div>
      <div className="mainCategory">
        <label id="mainCategoryName">brand</label>
        {MOK1.map(data => (
          <ul key={data.brand_id} className="brandSubCategory">
            <li>{data.subCategory}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Category;

//시트러스 / 우디/  플로럴 / 프로티 / 머스크
//brand_id": 2,
//         "scent_id": 1
//MOK데이터

// const MOK = [
//   { id: 1, MainCategory: 'scent' },
//   { id: 2, MainCategory: 'brand' },
// ];
const MOK = [
  { scent_id: 1, subCategory: '시트러스' },
  { scent_id: 2, subCategory: '우디' },
  { scent_id: 3, subCategory: '플로럴' },
  { scent_id: 4, subCategory: '프로티' },
  { scent_id: 5, subCategory: '머스크' },
];

const MOK1 = [
  { brand_id: 1, subCategory: '딥티크' },
  { brand_id: 2, subCategory: '크리드' },
  { brand_id: 3, subCategory: '조말론' },
  { brand_id: 4, subCategory: '이솝' },
  { brand_id: 5, subCategory: '펜할리곤스' },
];
