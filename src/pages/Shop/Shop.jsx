import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ShopContainer, Container, ShopList, ShopLink } from './Shop.styled';
import { getAllShops } from 'apiService/apiService';

const Shop = ({ setShops, shops }) => {
  useEffect(() => {
    getAllShops()
      .then(({ data }) => setShops(data))
      .catch(err => console.log(err));
  }, [setShops]);

  return (
    <Container>
      <main>
        <ShopContainer>
          <ShopList>
            {shops?.map(({ _id: id, restaurant, link }) => {
              return (
                <li key={id}>
                  <ShopLink to={link}>{restaurant}</ShopLink>
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
