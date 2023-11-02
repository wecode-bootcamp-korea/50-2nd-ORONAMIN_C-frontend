import React, { useState, useEffect } from 'react';
import { ITEM_LIST } from '../../components/Nav/map';
import { ITEM_LIST2 } from '../../components/Nav/map';
import './Main.scss';

const SLIDE_TO_SHOW = 4;

const Main = () => {
  //  여기에 State , navigate , fetch 선언 추가 할것.
  const [carouselIdx, setCarouselIdx] = useState(0);

  const slideToLeft = () => {
    if (carouselIdx === 0) return;

    setCarouselIdx(prev => prev - 1);
  };

  const slideToRight = () => {
    if (carouselIdx === ITEM_LIST.length - SLIDE_TO_SHOW) return;

    setCarouselIdx(prev => prev + 1);
  };

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJrYWthb0BuYXZlci5jb20iLCJuaWNrbmFtZSI6Iu2ZlOyalOydvCDrsKTsnZgg7ZmU64KcIO2YuOuekeydtCIsInN0YXR1cyI6MSwiaWF0IjoxNjk4MzkwNjY1LCJleHAiOjE3MzQzOTA2NjV9.NfIiRzeJDDADH3HgBQu6m3lO0Ui-EPBX033x6RQgK1Q';

  const [slideList, setslideList] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.217:8000/images?desc=slideimg`, {
      method: 'GET',
      headers: {
        'Content-type': `application/json`,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(result => setslideList(result.result));
  }, []);

  return (
    <div className="main">
      {/* img 는 fetch 로 받은 state 값으로 대체 할것. */}
      <div className="slidebox">
        <input type="radio" name="slide" id="slide01" checked />
        <input type="radio" name="slide" id="slide02" checked />
        <input type="radio" name="slide" id="slide03" checked />
        <input type="radio" name="slide" id="slide04" checked />
        <ul className="slidelist">
          {slideList.map(slide => (
            <li className="slideitem">
              <div>
                <label for="slide04" className="left" />
                <label for="slide02" className="right" />
                <a>
                  <img src={slide.image_source}></img>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sec2">
        <div className="boximage">
          <img width={900} height={900} alt="img2" src="/images/img2.png" />
          <a className="textbox_2">
            <div className="textbox1_2">
              <span>BYREDO </span>
              <span>컬랙션</span>
            </div>
            <div className="textbox2_2">관련제품 더보기</div>
          </a>
        </div>
        <div className="boximage">
          <img width={900} height={900} alt="img3" src="/images/img3.png" />
          <a className="textbox_2">
            <div className="textbox1_2">
              <span>BYREDO </span>
              <span>컬랙션</span>
            </div>
            <div className="textbox2_2">관련제품 더보기</div>
          </a>
        </div>
      </div>

      <h1>Best Items</h1>

      <div className="itemlist">
        <ul
          style={{
            transform: `translateX(calc(-100% * ${
              carouselIdx / ITEM_LIST.length
            }))`,
          }}
        >
          {ITEM_LIST.map(item => (
            <li
              key={item.id}
              style={{ width: `calc(100vw / ${SLIDE_TO_SHOW})` }}
            >
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
        <div className="arrowContainer">
          <img
            className="arrow"
            src="/images/left_arrow.png"
            alt="left arrow"
            onClick={slideToLeft}
          />
          <img
            className="arrow"
            src="/images/right_arrow.png"
            alt="right arrow"
            onClick={slideToRight}
          />
        </div>
      </div>

      <div className="sec3">
        <div className="textbox">
          <div className="textbox1">공간을 향기롭게 하는 방법</div>
          <div className="textbox2">
            분위기를 이끌며 향기로운 추억을 불러일으키는 향을 찾아보세요. 디올
            L'Or de J'adore 런던이 당신의 공간에 새로운 영감을 불어 넣어줍니다.
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
      <a className="sec4">
        <div className="wideimg">
          <img width={1800} alt="img" src="./images/wideimg01.png" />
        </div>
        <a className="textbox_2">
          <div className="textbox1_2">조말론 컬렉션</div>
          <div className="textbox2_2">관련제품 더보기</div>
        </a>
      </a>
    </div>
  );
};

export default Main;
