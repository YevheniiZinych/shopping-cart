import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  Counter,
  NavContainer,
  NavList,
  LogoWrapper,
  CartWrapper,
  StyledLink,
} from 'components/SharedLayout/SharedLayout.styled';
import logo from '../../img/Flash-Logo.png';

const SharedLayout = ({ size }) => {
  return (
    <>
      <header>
        <NavContainer>
          <LogoWrapper>
            <img
              src={logo}
              alt="logo"
              style={{
                height: 30,
              }}
            />
            <span>FleshDelivery</span>
          </LogoWrapper>
          <nav>
            <NavList>
              <li>
                <StyledLink to="/">HOME</StyledLink>
              </li>
              <li>
                <StyledLink to="/shop">SHOP</StyledLink>
              </li>

              <li>
                <CartWrapper>
                  <StyledLink to="/cart">SHOPPING CART</StyledLink>
                  <Counter>{size}</Counter>
                </CartWrapper>
              </li>
            </NavList>
          </nav>
        </NavContainer>
        <Toaster />
      </header>

      <Suspense fallback={<div>Page is loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
