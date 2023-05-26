import styled from 'styled-components';
import img from '../../img/background-img.jpeg';

export const ShoppingContainer = styled.div`
  max-width: 1220px;
  height: calc(100vh - 48px);
  margin: 0 auto;
  padding: 0 10;
  border: 1px solid red;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const ShopInner = styled.div`
  height: 600px;
  width: 650px;
  margin: 20px 20px 0 50px;

  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const Container = styled.div`
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ShoppingList = styled.ul`
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: calc((100% - 10px) / 1);

  & li {
    font-size: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 250px;
    width: 170px;

    background: rgba(255, 255, 255, 0.29);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.6px);
    -webkit-backdrop-filter: blur(2.6px);
    border: 1px solid rgba(255, 255, 255, 0.54);
  }
`;
