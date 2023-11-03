import React from 'react';
import './Info.scss';

const Info = () => {
  return (
    <div className="infoCont">
      {INFO_LIST.map(({ id, src }) => (
        <img key={id} alt="구독 서비스 안내" src={src} />
      ))}
    </div>
  );
};

export default Info;

const INFO_LIST = [
  { id: 1, src: '/images/info1_1.png' },
  { id: 2, src: '/images/info2.png' },
  { id: 3, src: '/images/info3.png' },
  { id: 4, src: '/images/info4.png' },
  { id: 5, src: '/images/info5.png' },
];
