import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const isLoggedIn = !!localStorage.getItem('token');
  const [brand, setbrand] = useState([]);
  const [scent, setscent] = useState([]);

  const handleLogout = () => {
    const isLogoutConfirmed = window.confirm('로그아웃 하시겠습니까?');

    if (isLogoutConfirmed) {
      localStorage.removeItem('token');
      navigate('/main');
    }
  };

  useEffect(() => {
    fetch(`http://13.53.170.233:8000/brands`, {
      method: 'GET',
      headers: {
        'Content-type': `application/json`,
      },
    })
      .then(response => response.json())
      .then(result => setbrand(result.result));
  }, []);

  // useEffect(() => {
  //   fetch(`http://13.53.170.233:8000/products/all/?scentName=${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': `application/json`,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setscent(result.result));
  // }, []);

  return (
    <div className="nav">
      <div className="wrapper">
        <ul className="header_links" onMouseLeave={() => setIsHovered(false)}>
          {CATEGORY_LIST.map(({ id, text }) => (
            <li key={id} className="category">
              <Link to="/" onMouseEnter={() => setIsHovered(true)}>
                {text}
              </Link>
            </li>
          ))}
          <div className={`mega_menu${isHovered ? ' visible' : ''}`}>
            <div className="content">
              <div className="main">
                <p>Scent</p>
                <ul className="mega_lists">
                  {scent.map(({ id, text }) => (
                    <li key={id}>
                      <Link to={`/product-list/scent/${id}`}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="main">
                <p>Brand</p>
                <ul className="mega_lists">
                  {brand.map(({ id, text }) => (
                    <li key={id}>
                      <Link to={`/product-list/brand/${id}`}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="main">
                <p>구독 서비스</p>
                <ul className="mega_lists">
                  <li>
                    <Link to={`/info`}>구독 안내</Link>
                  </li>
                  <li>
                    <Link to={`/pay`}>구독 신청</Link>
                  </li>
                </ul>
              </div>
              <div className="main">
                <img alt="def" src="/images/item1.png" />
              </div>
            </div>
          </div>
        </ul>
        <div className="logo">
          <img
            alt="logoimg"
            src="/images/logo.png"
            onClick={() => navigate('/main')}
          />
        </div>

        <ul className="header_links">
          {isLoggedIn ? (
            <>
              <li>
                <p>한적한 하루의 고양이 님</p>
              </li>
              <li>
                <p>100,000 포인트</p>
              </li>
              <li>
                <p className="btn" onClick={handleLogout}>
                  로그아웃
                </p>
              </li>
              <li>
                <p className="btn" onClick={() => navigate('/cart')}>
                  장바구니
                </p>
              </li>
            </>
          ) : (
            <>
              <li></li>
              <li>
                <Link to="/signup">회원 가입</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

const SCENT_CATEGORY_LIST = [
  { id: 1, text: 'Citrus' },
  { id: 2, text: 'Woody' },
  { id: 3, text: 'Floral' },
  { id: 4, text: 'Musk' },
  { id: 5, text: 'Spicy' },
];

const BRAND_CATEGORY_LIST = [
  { id: 1, text: 'Jo Malone' },
  { id: 2, text: 'Tom Ford' },
  { id: 3, text: 'Byredo' },
  { id: 4, text: 'Diptyque' },
  { id: 5, text: 'Atelier Cologne' },
];

const CATEGORY_LIST = [
  { id: 1, text: 'Scent', path: '' },
  { id: 2, text: 'Brand' },
  { id: 3, text: '구독 안내' },
];
