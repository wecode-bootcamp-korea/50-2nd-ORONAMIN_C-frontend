import React, { useState, useEffect } from 'react';
import CartBtn from '../../components/CartBtn/CartBtn';
import CategoryComponent from '../../components/Category/Category';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const isScent = location.pathname.includes('scent');
  const [productData, setProductData] = useState({});
  const [hoveredProductId, setHoveredProductId] = useState();

  const goToProductDetail = productId => {
    navigate(`/product-list/detail/${productId}`); //scent_id 와 brand_id(서브카테고리)로 구분하여 페이지 이동하기
  };

  useEffect(() => {
    const api = `http://10.58.52.234:8000/products/?${
      isScent ? 'scentName' : 'brandName'
    }=${id}`;

    fetch(api)
      .then(response => response.json())
      .then(result => setProductData(result));
  }, [isScent, id]);

  return (
    <>
      <CategoryComponent />
      <div className="contanerDetail">
        <div className="subDescriptionBody">{MOK.scent_desc}</div>
        <div className="subInfo">
          <div className="productList">
            {/* optional chaining */}
            {MOK.products?.map(data => (
              <li
                key={data.id}
                className="productGrid"
                onClick={() => goToProductDetail(data.id)}
                onMouseEnter={() => setHoveredProductId(data.id)}
                onMouseLeave={() => setHoveredProductId()}
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
                {hoveredProductId === data.id && (
                  <CartBtn productId={data.id} />
                )}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

//Mok데이터
// const DATA = {
//   subCategoryId: '1',
//   sbubName: '시트러스',
//   subDes: 'dafdfadfadsfa',
//   grid: [
//     {
//       id: 1,
//       product_name: '라임 바질 앤 만다린',
//       price: 220000,
//       description:
//         '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
//       brand_id: 1,
//       scent_id: 3,
//       stock: null,
//       name: '시트러스',
//       scent_desc:
//         '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
//       brand_name: '조말론',
//       image_source:
//         '/Users/hwangsoohyun/Desktop/50-2nd-ORONAMIN_C-frontend/public/images/sample.png',
//       product_id: 1,
//     },
//     {
//       id: 2,
//       product_name: '라임 바질 앤 만다린',
//       price: 180000,
//       description:
//         '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
//       brand_id: 1,
//       scent_id: 3,
//       stock: null,
//       name: '시트러스',
//       scent_desc:
//         '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
//       brand_name: '조말론',
//       image_source: '파란색',
//       product_id: 1,
//     },
//     {
//       id: 3,
//       product_name: '라임 바질 앤 만다린',
//       price: 200000,
//       description:
//         '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
//       brand_id: 1,
//       scent_id: 3,
//       stock: null,
//       name: '시트러스',
//       scent_desc:
//         '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
//       brand_name: '조말론',
//       image_source: '파란색',
//       product_id: 1,
//     },
//     {
//       id: 4,
//       product_name: '라임 바질 앤 만다린',
//       price: 220000,
//       description:
//         '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
//       brand_id: 1,
//       scent_id: 3,
//       stock: null,
//       name: '시트러스',
//       scent_desc:
//         '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
//       brand_name: '조말론',
//       image_source: '파란색',
//       product_id: 1,
//     },
//     {
//       id: 5,
//       product_name: '라임 바질 앤 만다린',
//       price: 220000,
//       description:
//         '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
//       brand_id: 1,
//       scent_id: 3,
//       stock: null,
//       name: '시트러스',
//       scent_desc:
//         '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
//       brand_name: '조말론',
//       image_source: '파란색',
//       product_id: 1,
//     },
//     {
//       id: 6,
//       product_name: '라임 바질 앤 만다린',
//       price: 220000,
//       description:
//         '조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.',
//       brand_id: 1,
//       scent_id: 3,
//       stock: null,
//       name: '시트러스',
//       scent_desc:
//         '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
//       brand_name: '조말론',
//       image_source: '파란색',
//       product_id: 1,
//     },
//   ],
// };
const MOK = {
  scent_desc:
    '시트러스 향은 산뜻하고 풍미가 넘치며, 활력과 에너지를 부여해 줍니다.',
  products: [
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
      brand_name: '조말론',
      image_source: '파란색',
    },
    {
      id: 2,
      product_name: '바질 앤 네롤리',
      price: 220000,
      description:
        '런던의 모습을 그대로 담은 장난스럽고도 사랑스러운 향. 플로럴 향이 풍부한 네롤리에 바질의 기분 좋은 향이 더해져 즐거운 모험이 가득한 영국만의 독특한 향을 냅니다.',
      brand_id: 1,
      scent_id: 3,
      stock: null,
      name: '시트러스',
      brand_name: '조말론',
      image_source: '빨간색',
    },
    {
      id: 20,
      product_name: '네롤리 포르토피노',
      price: 540000,
      description:
        '생기있다, 반짝거리다, 활동적이다. 이탈리아 해변의 시원한 바람, 반짝이는 물결, 나뭇잎들을 그려내기 위해 톰 포드가 클래식 오 드 코롱을 재창조해낸 이 향수는, 시트러스 오일, 오렌지 플라워를 노트로 하며 앰버 향을 더하여 눈에 확 뛰면서도 존재감 있는 느낌을 줍니다.',
      brand_id: 8,
      scent_id: 3,
      stock: null,
      name: '시트러스',
      brand_name: '톰포드',
      image_source: null,
    },
  ],
};

// {
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
