import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ShopContainer } from './Shop.styled';
const shops = [
  { id: '1', name: 'McDonald`s', link: 'mc' },
  { id: '2', name: 'KFC', link: 'kfc' },
  { id: '3', name: 'Mafia', link: 'mafia' },
];

const Shop = () => {
  return (
    <>
      <main>
        <ShopContainer>
          <ul>
            {shops?.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <NavLink to={link}>{name}</NavLink>
                </li>
              );
            })}
          </ul>
        </ShopContainer>
      </main>
      <Suspense fallback={<div>Page is loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Shop;
