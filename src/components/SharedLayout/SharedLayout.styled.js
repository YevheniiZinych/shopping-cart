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
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 100vw;
  gap: 20px;
  background-color: #d6d618;
`;

export const Inner = styled.div``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s linear;

  @media (max-width: 769px) {
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    z-index: 15;
    height: 100vh;
    width: 100vw;

    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(120%)')};

    & li:first-child {
      margin-top: 50px;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartWrapper = styled.div`
  display: flex;
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
