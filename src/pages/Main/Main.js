import React, { useState, useEffect } from 'react';
import { ITEM_LIST, ITEM_LIST2, SLIDE_ITEM, BOX_ITEM } from './slideData.js';
import { Link, useNavigate } from 'react-router-dom';
import './Main.scss';

const SLIDE_TO_SHOW = 4;

const Main = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [bannerSlideIdx, setBannerSlideIdx] = useState(0);
  // const [SlideList, setSlideList] = useState([]);
  // // const [Boximg, setBoximg] = useState([]);
  // // const [bestitem, setbestitem] = useState([]);
  // // const [brand, setbrand] = useState([]);
  // // const [scent, setscent] = useState([]);

  const slideToLeft = () => {
    if (bannerSlideIdx === 0) {
      setBannerSlideIdx(SLIDE_ITEM.length - 1);
    } else {
      setBannerSlideIdx(prev => prev - 1);
    }
  };

  const slideToRight = () => {
    if (bannerSlideIdx === SLIDE_ITEM.length - 1) {
      setBannerSlideIdx(0);
    } else {
      setBannerSlideIdx(prev => prev + 1);
    }
  };

  const carouselToLeft = () => {
    if (carouselIdx === 0) return;

    setCarouselIdx(prev => prev - 1);
  };

  const carouselToRight = () => {
    if (carouselIdx === ITEM_LIST.length - SLIDE_TO_SHOW) return;

    setCarouselIdx(prev => prev + 1);
  };

  // useEffect(() => {
  //   fetch(`http://13.53.170.233:8000/images?desc=slideimg`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': `application/json`,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setSlideList(result.result));
  // }, []);

  // useEffect(() => {
  //   fetch(`http://13.53.170.233:8000/images?desc=boximg`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': `application/json`,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setBoximg(result.result));
  // }, []);

  // useEffect(() => {
  //   fetch(`http://13.53.170.233:8000/images?desc=slideimg`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': `application/json`,
  //     },
  //   }).then(response => response.json());
  //   .then(brand => setbrand(result.result));
  // }, []);

  return (
    <div className="main">
      {SLIDE_ITEM.length !== 0 && (
        <div className="slidebox">
          <ul
            className="slidelist"
            style={{
              transform: `translateX(calc(-100% * ${bannerSlideIdx}))`,
            }}
          >
            {SLIDE_ITEM.map((slide, idx) => (
              <li className="slideitem" key={idx}>
                <img src={slide.image_source} />
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
      )}

      <div className="sec2">
        <div className="boximage">
          {BOX_ITEM.map(box => {
            return (
              <>
                <div key={box.id}>
                  <img
                    //
                    width={900}
                    height={900}
                    alt="img2"
                    src={box.image_source} //
                  />

                  <a className="textbox_2">
                    <div className="textbox1_2">
                      <span>{box.text1} </span>
                      <span>{box.text2}</span>
                    </div>
                    <div className="textbox2_2">{box.text3}</div>
                  </a>
                  <div className="boximage">
                    {/* <img
                      //
                      width={900}
                      height={900}
                      alt="img2"
                      src={box.image_source} //
                    /> */}

                    {/* <img width={900} height={900} alt="img3" src="/images/img3.png" /> */}
                    {/* <a className="textbox_2">
                      <div className="textbox1_2">
                        <span>BYREDO </span>
                        <span>컬랙션</span>
                      </div>
                      <div className="textbox2_2">관련제품 더보기</div>
                    </a> */}
                  </div>
                </div>
              </>
            );
          })}
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
          {ITEM_LIST.map(
            (
              item, //
            ) => (
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
            ),
          )}
        </ul>
        <div className="arrowContainer">
          <img
            className="arrow"
            src="/images/left_arrow.png"
            alt="left arrow"
            onClick={carouselToLeft}
          />
          <img
            className="arrow"
            src="/images/right_arrow.png"
            alt="right arrow"
            onClick={carouselToRight}
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
