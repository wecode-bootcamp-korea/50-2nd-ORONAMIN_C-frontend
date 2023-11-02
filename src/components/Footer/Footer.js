import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer_menu">
      <div className="content">
        <div className="footer_main">
          <p>Scent</p>
          <ul className="footer_lists">
            <li>
              <a>Citrus</a>
            </li>
            <li>
              <a>Woody</a>
            </li>
            <li>
              <a>Floral</a>
            </li>
            <li>
              <a>Musk</a>
            </li>
          </ul>
        </div>
        <div className="footer_main">
          <p>Brand</p>
          <ul className="footer_lists">
            <li>
              <a>Jo Malone</a>
            </li>
            <li>
              <a>Tom Ford</a>
            </li>
            <li>
              <a>Byredo</a>
            </li>
            <li>
              <a>Diptyque</a>
            </li>
          </ul>
        </div>
        <div className="footer_main">
          <p>구독 서비스</p>
          <ul className="footer_lists">
            <li>
              <a>구독 안내</a>
            </li>
            <li>
              <a>구독 신청</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
