import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import SharedLayout from 'SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart';
import Shop from 'pages/Shop/Shop';
import McDonald from 'components/McDonald/McDonald';
import KFC from 'components/KFC/KFC';
import Mafia from 'components/Mafia/Mafia';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />}>
            <Route path="mc" element={<McDonald />} />
            <Route path="kfc" element={<KFC />} />
            <Route path="mafia" element={<Mafia />} />
          </Route>
          <Route path="cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </div>
  );
};
