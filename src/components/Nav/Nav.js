import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="wrapper">
        <ul className="header-links">
          <li>
            <a>Scent</a>
            <div className="mega_menu">
              <div className="content">
                <div className="main">
                  <p>Scent</p>
                  <ul className="mega_lists">
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
                <div className="main">
                  <p>Brand</p>
                  <ul className="mega_lists">
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
          </li>
          <li>
            <a>Brand</a>
            <div className="mega_menu">
              <div className="content">
                <div className="main">
                  <p>Scent</p>
                  <ul className="mega_lists">
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
                <div className="main">
                  <p>Brand</p>
                  <ul className="mega_lists">
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
          </li>
          <li>
            <a>구독 안내</a>
            <div className="mega_menu">
              <div className="content">
                <div className="main">
                  <p>Scent</p>
                  <ul className="mega_lists">
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
                <div className="main">
                  <p>Brand</p>
                  <ul className="mega_lists">
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
          </li>
        </ul>
        <div className="logo">
          <img alt="logoimg" src="/images/logo.png" />
        </div>

        <ul className="header-links">
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
