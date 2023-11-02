import React, { useState, useEffect } from 'react';
import './info.scss';

const Info = () => {
  return (
    <>
      <div className="infocont">
        <div className="info1">
          <img alt="img_1" src=" ./images/info1_1.png " />
        </div>

        <div className="info2">
          <img alt="img_2" src=" ./images/info2.png " />
        </div>

        <div className="info3">
          <img alt="img_3" src=" /images/info3.png " />
        </div>

        <div className="info4">
          <img alt="img_4" src=" /images/info4.png " />
        </div>

        <div className="info5">
          <img alt="img_5" src=" /images/info5.png " />
        </div>
      </div>
    </>
  );
};

export default Info;
