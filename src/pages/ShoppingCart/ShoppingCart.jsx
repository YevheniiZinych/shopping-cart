import { useState, useEffect } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { OrderItem } from 'components/OrderItem/OrderItem';
import {
  Container,
  ShoppingContainer,
  ShoppingList,
  Wrapper,
  ShopInner,
} from './ShoppingCart.styled';
import { OrderForm } from 'components/OrderForm/OrderForm';
import { Map } from '..//../components/Map/Map';
import { getBrowserLocation } from '../../utils/geo';

const defaultLocation = { lat: 50.450001, lng: 30.523333 };
const libraries = ['places'];

const ShoppingCart = ({ cart, setCart, handleChange, mapKey }) => {
  const [price, setPrice] = useState(0);
  const [center, setCenter] = useState(defaultLocation);
  const [place, setPlace] = useState('');
  console.log(mapKey);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: mapKey,
    libraries,
  });

  const onPlaceSelect = coordinates => {
    setCenter(coordinates);
  };

  const handleRemove = _id => {
    const filteredCard = cart.filter(item => item._id !== _id);
    setCart(filteredCard);
  };

  useEffect(() => {
    const handlePrise = () => {
      let total = 0;

      cart.forEach(item => {
        total += item.amount * item.price;
      });

      setPrice(total);
    };
    handlePrise();
  }, [cart]);

  useEffect(() => {
    getBrowserLocation()
      .then(curLoc => setCenter(curLoc))
      .then(defaultLocation => setCenter(defaultLocation));
  }, []);

  return (
    <Container>
      <section>
        <ShoppingContainer>
          <Wrapper>
            <div
              style={{
                marginTop: 10,
              }}
            >
              {isLoaded ? (
                <Map
                  center={center}
                  isLoaded={isLoaded}
                  onPlaceSelect={onPlaceSelect}
                  onPlace={setPlace}
                  setPlace={setPlace}
                  mapKey={mapKey}
                />
              ) : (
                <h2>Loading...</h2>
              )}
              <OrderForm
                cart={cart}
                price={price}
                place={place}
                setCart={setCart}
              />
            </div>

            <ShopInner>
              <ShoppingList>
                {cart?.length > 0 &&
                  cart.map(item => {
                    return (
                      <OrderItem
                        key={item._id}
                        item={item}
                        handleRemove={handleRemove}
                        handleChange={handleChange}
                      />
                    );
                  })}
              </ShoppingList>
            </ShopInner>
          </Wrapper>
        </ShoppingContainer>
      </section>
    </Container>
  );
};

export default ShoppingCart;
