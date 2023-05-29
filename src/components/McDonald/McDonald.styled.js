import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100%;
  margin-left: 50px;
  margin-top: 10px;

  @media (max-width: 769px) {
    margin-left: 0;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  justify-content: start;

  @media (max-width: 769px) {
    justify-content: center;
  }

  flex-wrap: wrap;
  gap: 20px;
  width: calc((100% - 10px) / 1);
`;
