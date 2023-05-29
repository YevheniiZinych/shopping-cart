import { useState } from 'react';
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
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
const SharedLayout = ({ size }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        overflow: 'hidden',
      }}
    >
      <header>
        <NavContainer>
          <BurgerMenu setOpen={setOpen} open={open} />
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
            <NavList open={open}>
              <li>
                <StyledLink onClick={() => setOpen(!open)} to="/">
                  HOME
                </StyledLink>
              </li>
              <li>
                <StyledLink onClick={() => setOpen(!open)} to="/shop">
                  SHOP
                </StyledLink>
              </li>

              <li>
                <CartWrapper>
                  <StyledLink onClick={() => setOpen(!open)} to="/cart">
                    SHOPPING CART
                  </StyledLink>
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
    </div>
  );
};

export default SharedLayout;
