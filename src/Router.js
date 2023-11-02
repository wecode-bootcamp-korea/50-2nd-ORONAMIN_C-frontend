import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/main/Main';
import Footer from './components/Footer/Footer';
import Admin from './pages/Admin/Admin';
import Cart from './pages/Cart/Cart';
import Pay from './pages/Pay/Pay';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Info from './pages/info/info';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product-list/scent/:id" element={<ProductList />} />
        <Route path="/product-list/brand/:id" element={<ProductList />} />
        <Route
          path="/product-list/detail/:productId"
          element={<ProductDetail />}
        />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
