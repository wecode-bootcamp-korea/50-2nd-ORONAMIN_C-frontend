import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Cart from './pages/Cart/Cart';
import Pay from './pages/Pay/Pay';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product-list/scent/:id" element={<ProductList />} />
        <Route path="/product-list/brand/:id" element={<ProductList />} />
        <Route
          path="/product-list/detail/:productId"
          element={<ProductDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
