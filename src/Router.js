import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/Product-detail:product_id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
