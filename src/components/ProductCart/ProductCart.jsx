const ProductCart = ({ product, handleClick }) => {
  const { img, name, price } = product;
  return (
    <li>
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
      <button onClick={() => handleClick(product)}>Add to order</button>
    </li>
  );
};

export default ProductCart;
