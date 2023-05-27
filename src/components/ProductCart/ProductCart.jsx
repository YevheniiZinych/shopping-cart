import { AddBtn, ProductItem } from './ProductCart.styled';

const ProductCart = ({ product, handleClick }) => {
  const { img, name, price } = product;
  return (
    <ProductItem>
      <article
        style={{
          marginTop: 20,
        }}
      >
        <figure
          style={{
            width: 125,
            margin: 0,
          }}
        >
          <img
            src={img}
            alt={name}
            loading="lazy"
            style={{
              height: 110,
              width: 130,
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
      </article>
      <p
        style={{
          position: 'absolute',
          bottom: 40,
          fontSize: 20,
          color: '#fff',
          marginBottom: 10,
        }}
      >
        Price: {price}
      </p>
      <AddBtn onClick={() => handleClick(product)}>Add to order</AddBtn>
    </ProductItem>
  );
};

export default ProductCart;
