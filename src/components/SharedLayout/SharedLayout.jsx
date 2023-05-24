import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Counter } from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = ({ size }) => {
  return (
    <div>
      <header>
        <div>
          <span>BestDelivery</span>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/shop">SHOP</NavLink>
            </li>
            <li>
              <NavLink to="/cart">SHOPPING CART</NavLink>
              <Counter>{size}</Counter>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Page is loading...</div>}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
};

export default SharedLayout;
