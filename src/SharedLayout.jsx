import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SharedLayout = () => {
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
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Page is loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
