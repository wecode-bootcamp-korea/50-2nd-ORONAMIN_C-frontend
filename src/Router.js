import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Cart from './pages/Cart/Cart';
import Pay from './pages/Pay/Pay';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
