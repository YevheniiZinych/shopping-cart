import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100%;
  margin-left: 50px;
  margin-top: 10px;
`;

export const ProductList = styled.ul`
  display: flex;
  justify-content: start;

  flex-wrap: wrap;
  gap: 20px;
  width: calc((100% - 10px) / 1);
`;
