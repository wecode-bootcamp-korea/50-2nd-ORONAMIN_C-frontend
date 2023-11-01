import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.scss';

const SCENT = 'scent';
const BRAND = 'brand';

const Category = () => {
  const [subScentCategory, setSubScentCategory] = useState([]);
  const [subBrandCategory, setSubBrandCategory] = useState([]);
  const navigate = useNavigate();

  const onChange = (category, id) => {
    navigate(`/product-list/${category}/${id}`);
  };

  useEffect(() => {
    // fetch(`http://10.58.52.234:8000/products/${SCENT}/1`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(result =>
    //     setSubScentCategory(mapDataToCategory(result.scentName, SCENT)),
    //   );
    // fetch(`http://10.58.52.234:8000/products/${BRAND}/1`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(result =>
    //     setSubBrandCategory(mapDataToCategory(result.brandName, BRAND)),
    //   );
  }, []);

  const mapDataToCategory = (data, category) => {
    return data.map(item => ({
      ...item,
      category,
    }));
  };

  return (
    <div className="category">
      <div className="mainCategory">
        <label id="mainCategoryName">scent</label>
        {subScentCategory.map(data => (
          <ul key={data.id} className="scentSubCategory">
            <li onClick={onChange}>{data.name}</li>
          </ul>
        ))}
      </div>
      <div className="mainCategory">
        <label id="mainCategoryName">brand</label>
        {subBrandCategory.map(data => (
          <ul key={data.id} className="brandSubCategory">
            <li onClick={() => onChange(data.category, data.id)}>
              {data.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Category;

//MOK데이터

// const MOK = [
//   { id: 1, MainCategory: 'scent' },
//   { id: 2, MainCategory: 'brand' },
// ];
// const MOK = [
//   { id: 1, name: '시트러스' },
//   { id: 2, name: '우디' },
//   { id: 3, name: '플로럴' },
//   { id: 4, name: '프로티' },
//   { id: 5, name: '머스크' },
// ];

// const MOK1 = [
//   { id: 1, name: '딥티크' },
//   { id: 2, name: '크리드' },
//   { id: 3, name: '조말론' },
//   { id: 4, name: '이솝' },
//   { id: 5, name: '펜할리곤스' },
// ];
