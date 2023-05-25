import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Counter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  font-size: 12px;
  color: #fff;
  padding: 2px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 100vw;
  gap: 20px;
  margin-bottom: 20px;
  background-color: #d6d618;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartWrapper = styled.div`
  display: flex;
  margin-left: 600px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: red;
    transform: scaleX(0);
    transition: transform 0.25s;
  }

  &::before {
    top: 25px;
    transform-origin: left;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &.active::before {
    transform: scaleX(1);
  }
`;
