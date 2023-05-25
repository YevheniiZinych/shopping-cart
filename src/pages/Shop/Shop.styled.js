import styled from 'styled-components';
import img from '../../img/background-img.jpeg';
import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';

export const ShopContainer = styled.div`
  display: flex;
  max-width: 1220px;
  padding: 0 10;
  height: calc(100vh - 45px);
  margin: 0 auto;
`;

export const Container = styled.div`
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ShopList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  margin-right: 10px;
  height: 90%;
  width: 200px;
  background: rgba(255, 255, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
  border: 1px solid rgba(255, 255, 255, 0.54);

  & li {
    margin-left: 10px;
    margin-top: 20px;
  }
`;

export const ShopLink = styled(StyledLink)`
  color: #fff;
`;
