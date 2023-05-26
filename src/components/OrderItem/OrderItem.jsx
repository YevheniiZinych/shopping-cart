import {
  CartItem,
  CartContainer,
  ImgWrapper,
  BtnWrapper,
  RemoveBtn,
} from './OrderItem.styled';

const OrderItem = ({ item, handleRemove, handleChange }) => {
  const { id, img, name, price, amount } = item;
  return (
    <CartContainer>
      <CartItem>
        <ImgWrapper>
          <img src={img} alt={name} loading="lazy" width={150} />
          <p>{name}</p>
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
        <div>
          <p
            style={{
              color: 'yellow',
            }}
          >
            Price: {price}
          </p>
          <RemoveBtn onClick={() => handleRemove(id)} type="button">
            Remove
          </RemoveBtn>
        </div>
      </CartItem>
    </CartContainer>
  );
};
export default OrderItem;
