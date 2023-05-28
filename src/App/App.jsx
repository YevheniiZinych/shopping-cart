import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import toast from 'react-hot-toast';
import { GlobalStyle } from 'components/GlobalStyle';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import McDonald from 'components/McDonald/McDonald';
import KFC from 'components/KFC/KFC';
import Mafia from 'components/Mafia/Mafia';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const ShoppingCart = lazy(() => import('../pages/ShoppingCart/ShoppingCart'));

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const libraries = ['places'];

export const App = () => {
  const [cart, setCart] = useState([]);
  const [shops, setShops] = useState([]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const handleClick = item => {
    let isPresent = false;
    cart.forEach(product => {
      if (item._id === product._id) isPresent = true;
    });

    if (isPresent) {
      toast.error('This product was added ');
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, count) => {
    let ind = 0;
    cart.forEach((data, index) => {
      if (data._id === item._id) ind = index;
    });

    const newCard = cart;

    newCard[ind].amount += count;

    if (newCard[ind].amount === 0) newCard[ind].amount = 1;

    setCart([...newCard]);
  };

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout size={cart.length} />}>
          <Route index element={<HomePage />} />

          <Route
            path="shop"
            element={<Shop setShops={setShops} shops={shops} />}
          >
            <Route
              path="mc"
              element={<McDonald handleClick={handleClick} shops={shops} />}
            />
            <Route
              path="kfc"
              element={<KFC handleClick={handleClick} shops={shops} />}
            />
            <Route
              path="mafia"
              element={<Mafia handleClick={handleClick} shops={shops} />}
            />
          </Route>

          <Route
            path="cart"
            element={
              <ShoppingCart
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
                isLoaded={isLoaded}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
