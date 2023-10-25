import React, { useState, useEffect } from 'react';
import './SubCategory.scss';

const SubCategory = () => {
  const [subCategoryName, setSubCategoryName] = useState([]);

  useEffect(() => {
    fetch('api주소', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setSubCategoryName(result.data));
  }, []);

  return (
    <nav>
      <ul className="subCategoryList">
        {MOK.map(data => (
          <>
            <li key={data.scent_id}>
              <span>{data.subCategory}</span>
            </li>
            {/* <li key={data.brand_id}>
              <span>{data.subCategory}</span>
            </li> */}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default SubCategory;

//시트러스 / 우디/  플로럴 / 프로티 / 머스크
//brand_id": 2,
//         "scent_id": 1
//MOK데이터

const MOK = [
  { scent_id: 1, subCategory: '시트러스' },
  { scent_id: 2, subCategory: '우디' },
  { scent_id: 3, subCategory: '플로럴' },
  { scent_id: 4, subCategory: '프로티' },
  { scent_id: 5, subCategory: '머스크' },
  { brand_id: 1, subCategory: '톰포드' },
  { brand_id: 2, subCategory: '딥티크' },
  { brand_id: 3, subCategory: '펜할리곤스' },
  { brand_id: 4, subCategory: '조말론' },
  { brand_id: 5, subCategory: '크리드' },
];

const DATA = [
  {
    id: 1,
    type: 'scent',
    sub: [
      {
        id: 1,
        name: '시트러스',
      },
      {
        id: 1,
        name: '시트러스',
      },
      {
        id: 1,
        name: '시트러스',
      },
    ],
  },
  {
    id: 2,
    type: 'brand',
  },
];
