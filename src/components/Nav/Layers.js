import React from 'react';
import './Layers.scss';

const Header = () => {
  
  
  return (
    <div className="container">
      <ul className="headerleft">
        {HEADER_LIST_LEFT.map(header1 => (
          <li key={header1.id}>
            <a href="{header1.link}">{header1.text}</a>
          </li>
        ))}
      </ul>

      <div>
        <img alt="logo" src="/images/Logo.png " />
      </div>

      <ul className="headerright">
        {HEADER_LIST_RIGHT.map(header2 => (
          <li key={header2.id}>{header2.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

const HEADER_LIST_LEFT = [
  {
    id: 1,
    text: 'Scent',
    link: 'https://www.jomalone.co.kr/scents-collection',
  },
  {
    id: 2,
    text: 'Brand',
    link: 'https://www.jomalone.co.kr/scents-collection',
  },
  {
    id: 3,
    text: '구독 안내 및 신청',
    link: 'https://www.jomalone.co.kr/scents-collection',
  },
];

const HEADER_LIST_RIGHT = [
  { id: 1, text: 'Search' },
  { id: 2, text: '로그인' },
  { id: 3, text: '회원가입' },
];
