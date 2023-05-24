import ProductCart from 'components/ProductCart/ProductCart';
import products from 'products';

const McDonald = ({ handleClick }) => {
  return (
    <div>
      <ul>
        {products?.map(product => (
          <ProductCart
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default McDonald;
