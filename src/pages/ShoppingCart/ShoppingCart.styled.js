import styled from 'styled-components';
import img from '../../img/background-img.jpeg';

export const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 769px) {
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
  }
`;

export const ShoppingContainer = styled.div`
  max-width: 1220px;
  height: calc(100vh - 50px);
  margin: 0 auto;
  padding: 0 10;
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 769px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const ShopInner = styled.div`
  height: 900px;
  width: 100%;
  margin: 10px;

  @media (max-width: 769px) {
    height: 300px;
  }

  overflow-y: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const ShoppingList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: calc((100% - 10px) / 1);
`;
