import {
  CartItem,
  ImgWrapper,
  BtnWrapper,
  RemoveBtn,
  Price,
} from './OrderItem.styled';

const OrderItem = ({ item, handleRemove, handleChange }) => {
  console.log(item);
  const { _id, img, name, price, amount } = item;
  return (
    <CartItem>
      <ImgWrapper>
        <figure
          style={{
            width: 125,
            margin: 13,
          }}
        >
          <img
            src={img}
            alt={name}
            loading="lazy"
            style={{
              height: 110,
              width: '100%',
            }}
          />
          <figcaption
            style={{
              fontSize: 16,
              color: '#fff',
            }}
          >
            {name}
          </figcaption>
        </figure>
      </ImgWrapper>
      <BtnWrapper>
        <button onClick={() => handleChange(item, +1)} type="button">
          +
        </button>
        <button type="button">{amount}</button>
        <button onClick={() => handleChange(item, -1)} type="button">
          -
        </button>
      </BtnWrapper>
      <Price>Price: {price}</Price>
      <RemoveBtn onClick={() => handleRemove(_id)} type="button">
        X
      </RemoveBtn>
    </CartItem>
  );
};
export default OrderItem;
