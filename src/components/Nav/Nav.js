import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    const isLogoutConfirmed = window.confirm('로그아웃 하시겠습니까?');

    if (isLogoutConfirmed) {
      localStorage.removeItem('token');
      navigate('/main');
    }
  };

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
                  {SCENT_CATEGORY_LIST.map(({ id, text }) => (
                    <li key={id}>
                      <Link to={`/product-list/scent/${id}`}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="main">
                <p>Brand</p>
                <ul className="mega_lists">
                  {BRAND_CATEGORY_LIST.map(({ id, text }) => (
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
                    <a>구독 안내</a>
                  </li>
                  <li>
                    <a>구독 신청</a>
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
          <img alt="logoimg" src="/images/logo.png" />
        </div>
        <ul className="header_links">
          {isLoggedIn ? (
            <>
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
];

const BRAND_CATEGORY_LIST = [
  { id: 1, text: 'Jo Malone' },
  { id: 2, text: 'Tom Ford' },
  { id: 3, text: 'Byredo' },
  { id: 4, text: 'Diptyque' },
];

const CATEGORY_LIST = [
  { id: 1, text: 'Scent', path: '' },
  { id: 2, text: 'Brand' },
  { id: 3, text: '구독 안내' },
];
