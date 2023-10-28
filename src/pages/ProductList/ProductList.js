import React, { useState, useEffect } from 'react';
import CartBtnComponent from '../../components/CartBtn/CartBtn';
import CategoryComponent from '../../components/Category/Category';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(useParams);
  const [productGrid, setProductGrid] = useState([]);
  const [subCategory, setSubCategory] = useState('');
  const [subDescriptionBody, setSubDescriptionBody] = useState('');

  const goToProductDetail = () => {
    navigate(`/ProductDetail/${params.product_id}`); //scent_id 와 brand_id(서브카테고리)로 구분하여 페이지 이동하기
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
  }, [params.product_id]);

  return (
    <>
      <CategoryComponent />
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
            <li
              key={data.product_id}
              className="productGrid"
              onClick={goToProductDetail}
            >
              <img
                className="productImg"
                src={data.image_source}
                alt="productImg"
              />
              <div className="itemInfo">
                <div className="info1">
                  <h5 className="itemName">{data.product_name}</h5>
                  <p className="itemDescription">{data.description}</p>
                </div>
                <div className="info2">
                  <div className="price">{data.price}원</div>
                </div>
              </div>
              <CartBtnComponent />
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

//Mok데이터
const MOK = [
  {
    id: 1,
    product_name: '라임 바질 앤 만다린',
    price: 220000,
    description:
      '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
    brand_id: 1,
    scent_id: 3,
    stock: null,
    name: '시트러스',
    scent_desc:
      '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
    brand_name: '조말론',
    image_source: '파란색',
    product_id: 1,
  },
  {
    id: 2,
    product_name: '라임 바질 앤 만다린',
    price: 220000,
    description:
      '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
    brand_id: 1,
    scent_id: 3,
    stock: null,
    name: '시트러스',
    scent_desc:
      '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
    brand_name: '조말론',
    image_source: '파란색',
    product_id: 1,
  },
  {
    id: 3,
    product_name: '라임 바질 앤 만다린',
    price: 200000,
    description:
      '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
    brand_id: 1,
    scent_id: 3,
    stock: null,
    name: '시트러스',
    scent_desc:
      '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
    brand_name: '조말론',
    image_source: '파란색',
    product_id: 1,
  },
  {
    id: 4,
    product_name: '라임 바질 앤 만다린',
    price: 220000,
    description:
      '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
    brand_id: 1,
    scent_id: 3,
    stock: null,
    name: '시트러스',
    scent_desc:
      '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
    brand_name: '조말론',
    image_source: '파란색',
    product_id: 1,
  },
  {
    id: 5,
    product_name: '라임 바질 앤 만다린',
    price: 220000,
    description:
      '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
    brand_id: 1,
    scent_id: 3,
    stock: null,
    name: '시트러스',
    scent_desc:
      '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
    brand_name: '조말론',
    image_source: '파란색',
    product_id: 1,
  },
  {
    id: 6,
    product_name: '라임 바질 앤 만다린',
    price: 220000,
    description:
      '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
    brand_id: 1,
    scent_id: 3,
    stock: null,
    name: '시트러스',
    scent_desc:
      '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
    brand_name: '조말론',
    image_source: '파란색',
    product_id: 1,
  },
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
