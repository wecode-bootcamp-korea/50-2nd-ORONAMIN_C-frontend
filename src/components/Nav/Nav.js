import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

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
          <li>
            <a>회원 가입</a>
          </li>
          <li>
            <a>로그인</a>
          </li>
          {/* <li>
                <a></a>
              </li> */}
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
