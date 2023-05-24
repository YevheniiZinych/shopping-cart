const ProductCart = ({ product, handleClick }) => {
  const { img, name, price } = product;
  return (
    <li>
      <article>
        <figure>
          <img src={img} alt={name} loading="lazy" width={150} />
          <figcaption>{name}</figcaption>
        </figure>
      </article>
      <p>Price: {price}</p>
      <button onClick={() => handleClick(product)}>Add to card</button>
    </li>
  );
};

export default ProductCart;
