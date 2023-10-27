import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
// import Main from './pages/main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        {/* <Route path="/main" element={<Main />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
