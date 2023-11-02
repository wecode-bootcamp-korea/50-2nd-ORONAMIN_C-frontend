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
    navigate(`/product-list/detail/${productId}`);
  };

  // '/data/recommendData.json'
  // `http://10.58.52.234:8000/products?${
  //   isScent ? 'scentName' : 'brandName'
  // }=${id}`;

  useEffect(() => {
    const api = '/data/productList.json';

    fetch(api)
      .then(response => response.json())
      .then(result => setProductData(result)); //result[0]
  }, [isScent, id]);

  const formatPriceWithCommas = price => {
    return price.toLocaleString();
  };

  return (
    <>
      <CategoryComponent />
      <div className="contanerDetail">
        <div className="subDescriptionBody">{productData.scent_desc}</div>
        <div className="subInfo">
          <div className="productList">
            {productData.products?.map(data => (
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
                  </div>
                  <div className="info2">
                    <div className="price">
                      ₩{formatPriceWithCommas(data.price)}
                    </div>
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
