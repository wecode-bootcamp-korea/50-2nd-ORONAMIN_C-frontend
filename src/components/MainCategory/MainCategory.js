import React, { useState, useEffect } from 'react';
import './MainCategory.scss';

const MainCategory = () => {
  const [MainCategory, setMainCategory] = useState([]);

  useEffect(() => {
    fetch('api주소', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setMainCategory(result.data));
  }, []);

  return (
    <nav>
      <ul className="MainCategoryList">
        {MOK.map(data => (
          <li key={data.id}>
            <a href="/sent_id">{data.MainCategory}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainCategory;

//시트러스 / 우디/  플로럴 / 프로티 / 머스크
//brand_id": 2,
//         "scent_id": 1
//MOK데이터

const MOK = [
  { id: 1, MainCategory: 'scent' },
  { id: 2, MainCategory: 'brand' },
];
