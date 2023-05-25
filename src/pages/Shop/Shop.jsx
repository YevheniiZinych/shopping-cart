import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ShopContainer, Container, ShopList, ShopLink } from './Shop.styled';

const shops = [
  { id: '1', name: 'McDonald`s', link: 'mc' },
  { id: '2', name: 'KFC', link: 'kfc' },
  { id: '3', name: 'Mafia', link: 'mafia' },
];

const Shop = () => {
  return (
    <Container>
      <main>
        <ShopContainer>
          <ShopList>
            {shops?.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <ShopLink to={link}>{name}</ShopLink>
                </li>
              );
            })}
          </ShopList>
        </ShopContainer>
      </main>
      <Suspense fallback={<div>Page is loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Shop;
