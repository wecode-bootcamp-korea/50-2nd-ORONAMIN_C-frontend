import React from 'react';
import './Main.scss';
import { ITEM_LIST } from '../../components/Nav/map';
import { ITEM_LIST2 } from '../../components/Nav/map';

const Main = () => {
  //  여기에 State , navigate , fetch 선언 추가 할것.

  return (
    <>
      <div className="all">
        <div className="container2">
          {/* img 는 fetch 로 받은 state 값으로 대체 할것. */}

          <div className="sec1">
            <img width={2000} alt="img1" src="/images/img1.png" />
          </div>

          <div className="sec2">
            <img width={900} alt="img2" src="/images/img2.png" />
            <img width={900} alt="img3" src="/images/img3.png" />
          </div>

          <h1>Best Items</h1>

          <div className="itemlist">
            <ul>
              {ITEM_LIST.map(item => (
                <li key={item.id}>
                  <img src={item.src} />

                  <div className="detail">
                    <div className="brand">{item.brand}</div>
                    <div>
                      {item.title} {item.volume}
                    </div>
                    <div>{item.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="sec3">
            <div className="textbox">
              <div className="textbox1">공간을 향기롭게 하는 방법</div>
              <div className="textbox2">
                분위기를 이끌며 향기로운 추억을 불러일으키는 향을 찾아보세요.
                디올 L'Or de J'adore 런던이 당신의 공간에 새로운 영감을 불어
                넣어줍니다.
              </div>
            </div>

            <div className="video">
              <video muted autoPlay loop>
                <source
                  src="video/L'Or de J'adore, the new perfume.mp4"
                  type="video/mp4"
                />
                <strong>Your browser does not support the video tag.</strong>
              </video>
            </div>
          </div>
          <div className="sec4">
            <h1>Choose your Scent</h1>
            <div className="scents">
              <button className="scentclick">Citrus</button>
              <button className="scentclick">Woody</button>
              <button className="scentclick">Musk</button>
              <button className="scentclick">Floral</button>
            </div>
          </div>
          <div className="sec5">
            <img width={900} alt="img6" src="/images/item6.png" />
            <div className="itemlist_2">
              <ul>
                {ITEM_LIST2.map(item => (
                  <li key={item.id}>
                    <img src={item.src} />

                    <div className="detail_2">
                      <div className="brand_2">{item.brand}</div>
                      <div>
                        {item.title} {item.volume}
                      </div>
                      <div>{item.price}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
