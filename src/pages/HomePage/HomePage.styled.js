import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from '../../img/background-img.jpeg';

export const Title = styled.h1`
  color: rgb(246, 243, 21);
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);

  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 150px;
  height: 50px;
  margin-top: 20px;
  overflow: hidden;
  border: 2px solid #fff;
  transition: all 0.3s ease-in-out;

  &::before {
    content: ' ';
    position: absolute;
    display: block;
    height: 100px;
    width: 30px;
    background-color: rgb(246, 243, 21);
    transform: rotate(35deg);
    left: -60px;
    top: -30px;
    transition: all 0.3s ease-in-out;
  }

  & span {
    z-index: 2;
  }

  &:hover::before {
    left: 200px;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;
