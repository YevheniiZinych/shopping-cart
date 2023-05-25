import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import McDonald from 'components/McDonald/McDonald';
import KFC from 'components/KFC/KFC';
import Mafia from 'components/Mafia/Mafia';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const ShoppingCart = lazy(() => import('../pages/ShoppingCart/ShoppingCart'));

export const App = () => {
  const [cart, setCart] = useState([]);

  const handleClick = item => {
    let isPresent = false;
    cart.forEach(product => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, count) => {
    let ind = 0;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
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

          <Route path="shop" element={<Shop />}>
            <Route path="mc" element={<McDonald handleClick={handleClick} />} />
            <Route path="kfc" element={<KFC />} />
            <Route path="mafia" element={<Mafia />} />
          </Route>

          <Route
            path="cart"
            element={
              <ShoppingCart
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
